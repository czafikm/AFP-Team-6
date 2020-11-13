package hu.uni.eku.tzs.controller.dto;

import hu.uni.eku.tzs.model.PaymentStatus;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class WatchDto {

    private int id;
    private int balance;
    private PaymentStatus paymentStatus;

}
