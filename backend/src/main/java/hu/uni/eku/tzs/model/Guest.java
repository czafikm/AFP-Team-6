package hu.uni.eku.tzs.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Guest
{
    private int id;
    private String firstName;
    private String lastName;
    private byte guestAge;
    private String email;
}
