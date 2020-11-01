package hu.uni.eku.tzs.controller;

import hu.uni.eku.tzs.controller.dto.WatchDto;
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
@RequestMapping(value = "/watch")
@RequiredArgsConstructor
@Api(tags = "Watch")
@Slf4j

public class WatchController {

    private Collection<WatchDto> watches = new ArrayList<>();
    @GetMapping(value = {"/list"}, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    @ApiOperation(value = "List all watch")
    public Collection<WatchDto> watchDetails() {
        return watches.stream().map(watch ->
                WatchDto.builder()
                        .id(watch.getId())
                        .balance(watch.getBalance())
                        .build()
        ).collect(Collectors.toList());
    }
    @PostMapping(value = "/record")
    @ApiOperation(value = "Record a watch")
    public void createWatch()
    {
        WatchDto newWatch = WatchDto.builder()
                .id(UUID.randomUUID().toString())
                .balance(0)
                .build();
        watches.add(newWatch);

    }
    @DeleteMapping(value = {"/delete/{id}"})
    @ApiOperation(value = "Delete watch")
    public void deleteWatch(@PathVariable String id) {
        watches.removeIf(watch -> watch.getId().equals(id));
    }

    /*private final WatchDao service;

    @GetMapping(value = "/list",produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "watchlist")
    public Collection<Watch> listAll(){
            return service.readAll();
    }

    @GetMapping(value = "/list/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "watchListId")
    public ResponseEntity<Watch> getWatchById(@PathVariable Integer id) {
        Watch watch = service.getById(id);
        return new ResponseEntity<>(watch, HttpStatus.OK);
    }

    @PostMapping(value = "/add",produces = MediaType.APPLICATION_JSON_VALUE)
    @ApiOperation(value = "watchAdd")
    public void add(@RequestBody Watch watch) {
        service.create(watch);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Watch> update(@RequestBody Watch watch,@PathVariable Integer id)
    {
        try
        {
            Watch existProduct = service.getById(id);
            service.create(watch);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch (NoSuchElementException e)
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Integer id) throws Exception {
        try {
            service.delete(id);
            return "You are successfully deleted watch with " + id;
        } catch (Exception e) {
            throw new Exception("Dont exist watch with " + id);
        }
    }

     */
}
