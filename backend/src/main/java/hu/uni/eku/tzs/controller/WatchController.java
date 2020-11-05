package hu.uni.eku.tzs.controller;

import hu.uni.eku.tzs.controller.dto.WatchDto;
import hu.uni.eku.tzs.controller.dto.WatchRecordRequestDto;
import hu.uni.eku.tzs.model.Watch;
import hu.uni.eku.tzs.service.WatchService;
import hu.uni.eku.tzs.service.exceptions.WatchAlreadyExistException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/watch")
@RequiredArgsConstructor
@Api(tags = "Watch")
@Slf4j

public class WatchController {

    private final WatchService service;

    @PostMapping(value = "/record")
    @ApiOperation(value = "Record watch")
    public void record(@RequestBody WatchRecordRequestDto request) {
        log.info("Recording new Watch ({},{})", request.getBalance(), request.getPaymentStatus());
        try {
            service.record(new Watch(
                    0,
                    request.getBalance(),
                    request.getPaymentStatus()
            ));
        } catch (WatchAlreadyExistException e) {
            log.info("Watch ({},{}) is already exists! Message: {}", request.getBalance(), request.getPaymentStatus(), e.getMessage());
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    e.getMessage()
            );
        }
    }

    @GetMapping(value = {"/list"}, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    @ApiOperation(value= "Watch list")
    public Collection<WatchDto> query() {

        return service.readAll().stream().map(model ->
               WatchDto.builder()
                .id(model.getId())
        .balance(model.getBalance())
        .paymentStatus(model.getPaymentStatus())
        .build()).collect(Collectors.toList());

    }

}
