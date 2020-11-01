package hu.uni.eku.tzs.dao.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class Watch {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column
    private String guestName;
    @Column
    private byte guestAge;
    @Column
    private int balance;
}
