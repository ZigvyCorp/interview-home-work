package khoa.trinh.interviewtest.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {
    @Id
    private int id;
    private String name;
    private String username;
    private String email;
    @OneToOne
    @JoinColumn(name = "address_id")
    private Address address;
    private String phone;
    private String website;
    @OneToOne
    @JoinColumn(name = "company_id")
    private Company company;
}
