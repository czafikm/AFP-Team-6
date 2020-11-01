package hu.uni.eku.tzs.controller.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class WatchDto {
    private String id ;
    private int balance;
    //private GuestDto guestDto;

}
