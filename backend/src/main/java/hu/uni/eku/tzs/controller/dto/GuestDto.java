package hu.uni.eku.tzs.controller.dto;

import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class GuestDto {

    private String id ;
    private String name;
    private byte age;

}
