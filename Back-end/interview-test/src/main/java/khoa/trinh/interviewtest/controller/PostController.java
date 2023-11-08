package khoa.trinh.interviewtest.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import khoa.trinh.interviewtest.entity.Comment;
import khoa.trinh.interviewtest.entity.Post;
import khoa.trinh.interviewtest.entity.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @GetMapping(value = "/get/posts")
    private List<Post> getAllPost(){
        String uri="https://jsonplaceholder.typicode.com/posts";
        RestTemplate restTemplate=new RestTemplate();


        List<Post> result=restTemplate.getForObject(uri,List.class);
        List<User>userList=getAllUsers();
        List<Comment>commentList=getAllComments();

        List<Post> finalPostList=new ArrayList<>();
        ObjectMapper mapper=new ObjectMapper();
        List<Post>posts=mapper.convertValue(result, new TypeReference<List<Post>>() {
        });
        List<User>users=mapper.convertValue(userList, new TypeReference<List<User>>() {
        });
        List<Comment> comments=mapper.convertValue(commentList, new TypeReference<List<Comment>>() {
        });
        for (Post post:posts
             ) {
            Post newPost=new Post();
            for (User user:users
                 ) {
                if(post.getUserId()==user.getId()){
                    newPost.setId(post.getId());
                    newPost.setBody(post.getBody());
                    newPost.setTitle(post.getTitle());
                    newPost.setUserId(post.getUserId());
                    newPost.setUser(user);
                    finalPostList.add(newPost);
                }
            }
        }
        for (Post post:finalPostList
             ) {
            List<Comment> tempCommentList= new ArrayList<>();
            for (Comment comment:comments
                 ) {
                if(comment.getPostId()==post.getId()){
                    tempCommentList.add(comment);
                }
            }
            post.setComments(tempCommentList);
        }
        return finalPostList;
   }
    @GetMapping(value = "/get/comments")
    private List<Comment> getAllComments(){
        String uri="https://jsonplaceholder.typicode.com/comments";
        RestTemplate restTemplate=new RestTemplate();
        List<Comment> result=restTemplate.getForObject(uri,List.class);
        return result;
    }
    @GetMapping(value = "/get/users")
    private List<User> getAllUsers(){
        String uri="https://jsonplaceholder.typicode.com/users";
        RestTemplate restTemplate=new RestTemplate();
        List<User> result=restTemplate.getForObject(uri,List.class);
        return result;
    }
    @GetMapping(value = "/get/posts/{id}")
    private Post getOnePost(@PathVariable(name = "id")int id){
        String uri="https://jsonplaceholder.typicode.com/posts/"+id;
        RestTemplate restTemplate=new RestTemplate();
        Post result=restTemplate.getForObject(uri,Post.class);
        return result;
    }
    @GetMapping(value = "/get/posts/{id}/comments")
    private List<Comment> getOnePostAllComments(@PathVariable(name = "id")int id){
        String uri="https://jsonplaceholder.typicode.com/posts/"+id+"/comments";
        RestTemplate restTemplate=new RestTemplate();
        List<Comment> result=restTemplate.getForObject(uri,List.class);
        return result;
    }

}
