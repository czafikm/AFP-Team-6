package hu.uni.eku.tzs.controller.dto;

import hu.uni.eku.tzs.model.PaymentStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WatchRecordRequestDto {

    private int id;
    private int balance;
    private PaymentStatus paymentStatus;
}
