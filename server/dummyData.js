import Post from './models/post';
import User from './models/user';
import Comment from './models/comment';

import mongoose from 'mongoose';

export default function () {


  User.count().exec((err, count) => {
    if (count > 0) {
      // Post.collection.drop()
      // User.collection.drop()
      // Comment.collection.drop()
       return;
    }
    const user1 = new User({ username: 'username1', password: '123456', name: 'Trung', dob: '13/09/1995'})
    const user2 = new User({ username: 'username2', password: '1234567', name: 'Phuoc', dob: '1/10/1994'})
    const user3 = new User({ username: 'username3', password: '12345689', name: 'Nguyen', dob: '3/02/1992'})
    User.create([user1, user2, user3], 
      (error) => {
        const content1 = `Sed ut perspiciatis unde omnis iste natus error
        sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
        ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum`;

        const content2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Sed ut perspiciatis unde omnis iste natus error
          sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet.`;

        const post2 = new Post({ owner: user2._id, title: 'Lorem Ipsum', searchTitle: 'lorem ipsum', content: content2, tags: ["consult", "it", "hala"] });
        const post1 = new Post({ owner: user1._id, title: 'Neque porro ', searchTitle: 'neque porro', content: content1, tags: ["gov", "legal", "political"]});

        const post3 = new Post({ owner: user2._id, title: 'Lorem Ipsum', searchTitle: 'lorem ipsum', content: content2, tags: ["consult", "it", "hala"]});
        const post4 = new Post({ owner: user1._id, title: 'magni dolores',searchTitle: 'magni dolores',content: content1 });

        const post5 = new Post({ owner: user3._id, title: 'oluptatem quia voluptas sit', searchTitle: 'oluptatem quia voluptas sit' ,content: content2, tags: ["gov", "legal", "political"] });
        const post6 = new Post({ owner: user3._id, title: 'Lorem Ipsum', searchTitle: 'lorem ipsum', content: content1 });

        const post7 = new Post({ owner: user3._id, title: 'qui dolorem', searchTitle: 'qui dolorem', content: content2, tags: ["gov", "legal", "political"] });
        const post8 = new Post({ owner: user1._id, title: 'qui dolorem', searchTitle: 'qui dolorem', content: content1 });

        const post9 = new Post({ owner: user2._id, title: 'Lorem Ipsum', searchTitle: 'lorem ipsum', content: content2, tags: ["consult", "it", "hala"]});
        const post10 = new Post({ owner: user1._id, title: 'magni dolores',searchTitle: 'magni dolores',content: content1 });

        const post11 = new Post({ owner: user3._id, title: 'oluptatem quia voluptas sit', searchTitle: 'oluptatem quia voluptas sit' ,content: content2, tags: ["gov", "legal", "political"] });
        const post12 = new Post({ owner: user2._id, title: 'Lorem Ipsum', searchTitle: 'lorem ipsum', content: content2, tags: ["consult", "it", "hala"]});

        Post.create([post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11, post12 ], (error) => {
          if (!error) {
            console.log('ready to go....');
          }

          const comment1 = new Comment({owner: user1._id, post: post1._id, content: 'Lorem ipsum dolor sit amet'})
          const comment2 = new Comment({owner: user1._id, post: post1._id, content: 'veritatis et quasi architecto beatae'})
          const comment3 = new Comment({owner: user2._id, post: post2._id, content: 'giat nulla pariatur. Excepteur sin'})
          const comment4 = new Comment({owner: user1._id, post: post4._id, content: 'Lorem ipsum dolor sit amet'})
          const comment5 = new Comment({owner: user2._id, post: post4._id, content: 'giat nulla pariatur. Excepteur sin'})
          const comment6 = new Comment({owner: user3._id, post: post6._id, content: 'Lorem ipsum dolor sit amet'})
          const comment7 = new Comment({owner: user3._id, post: post7._id, content: 'veritatis et quasi architecto beatae'})
          const comment8 = new Comment({owner: user3._id, post: post2._id, content: 'Lorem ipsum dolor sit amet'})
          const comment9 = new Comment({owner: user2._id, post: post10._id, content: 'giat nulla pariatur. Excepteur sin'})
          const comment10 = new Comment({owner: user1._id, post: post12._id, content: 'Lorem ipsum dolor sit amet'})
          const comment11 = new Comment({owner: user3._id, post: post11._id, content: 'veritatis et quasi architecto beatae'})
          const comment12 = new Comment({owner: user3._id, post: post10._id, content: 'Lorem ipsum dolor sit amet'})
          Comment.create([comment1, comment2, comment3, comment4, comment5, comment6, comment7, comment8,comment9, comment10, comment11, comment12 ], (error) => {
            if (!error) {
              console.log('ready to go....');
            }
          });

        });

        

      }
    )
  });
}
