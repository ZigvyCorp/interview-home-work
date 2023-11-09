package khoa.trinh.interviewtest.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Post {
    @Id
    private int id;
    private int userId;
    @OneToOne
    @JoinColumn(name = "user")
    private User user;
    private String title;
    private String body;
    @OneToMany
    @JoinColumn(name = "user")
    private List<Comment> comments;
}
