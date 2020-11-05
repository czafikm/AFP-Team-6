package hu.uni.eku.tzs.controller;

import hu.uni.eku.tzs.controller.dto.GuestDto;
import hu.uni.eku.tzs.controller.dto.GuestRecordRequestDto;
import hu.uni.eku.tzs.model.Guest;
import hu.uni.eku.tzs.service.GuestService;
import hu.uni.eku.tzs.service.exceptions.GuestAlreadyExistException;
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
@RequestMapping(value = "/guest")
@RequiredArgsConstructor
@Api(tags = "Guests")
@Slf4j
public class GuestController {

    private final GuestService service;

    @PostMapping(value = "/record")
    @ApiOperation(value = "Record guest")
    public void record(@RequestBody GuestRecordRequestDto request) {
        log.info("Recording new Guest ({},{},{},{})", request.getFirstName(), request.getLastName(), request.getGuestAge(), request.getEmail());
        try {
            service.record(new Guest(
                    0,
                    request.getFirstName(),
                    request.getLastName(),
                    request.getGuestAge(),
                    request.getEmail()
            ));
        } catch (GuestAlreadyExistException e) {
            log.info("Guest ({},{},{},{}) is already exists! Message: {}", request.getFirstName(), request.getLastName(), request.getGuestAge(), request.getEmail(), e.getMessage());
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    e.getMessage()
            );
        }
    }

    @GetMapping(value = {"/list"}, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    @ApiOperation(value= "Guest list")
    public Collection<GuestDto> query() {

         return service.readAll().stream().map(model ->
                 GuestDto.builder()
         .id(model.getId())
         .firstName(model.getFirstName())
         .lastName(model.getLastName())
         .guestAge(model.getGuestAge())
         .email(model.getEmail())
         .build()).collect(Collectors.toList());
    }
}
