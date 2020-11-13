package hu.uni.eku.tzs.controller.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GuestDto {

    private int id;
    private String firstName;
    private String lastName;
    private byte guestAge;
    private String email;

}
