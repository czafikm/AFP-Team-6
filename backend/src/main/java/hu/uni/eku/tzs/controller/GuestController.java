package hu.uni.eku.tzs.controller;

import hu.uni.eku.tzs.controller.dto.GuestDto;
import hu.uni.eku.tzs.controller.dto.GuestRecordRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/guest")
@RequiredArgsConstructor
@Api(tags = "Guests")
@Slf4j
public class GuestController {

    private Collection<GuestDto> guest = new ArrayList<>();
    @PostMapping(value = "/record")
    @ApiOperation(value = "Record guest")
    public void record(@RequestBody GuestRecordRequestDto request)
    {
        GuestDto newGuest= GuestDto.builder()
                .id(UUID.randomUUID().toString())
                .name("Kiss Béla")
                .age((byte) 40)
                .build();
        guest.add(newGuest);
         newGuest= GuestDto.builder()
                .id(UUID.randomUUID().toString())
                .name("Nagy Ernő")
                .age((byte) 32)
                .build();
        guest.add(newGuest);
        //log.info("New guest recorded! ({},{})",request.getName(), request.getAge());
    }
    @GetMapping(value = {"/list"}, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    @ApiOperation(value= "Guest list")
    public Collection<GuestDto> query() {

            return guest.stream().map(guest ->
                    GuestDto.builder()
                            .id(guest.getId())
                            .name(guest.getName())
                            .age(guest.getAge())
                            .build()
            ).collect(Collectors.toList());
    }
    @DeleteMapping(value = {"/delete/{id}"})
    @ApiOperation(value = "Delete guest")
    public void delete(@PathVariable String id) {
        guest.removeIf(guest -> guest.getId().equals(id));
    }
}
