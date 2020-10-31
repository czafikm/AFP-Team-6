package hu.uni.eku.tzs.controller;

import hu.uni.eku.tzs.dao.WatchDao;
import hu.uni.eku.tzs.dao.entity.Watch;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.Collection;
import java.util.NoSuchElementException;

@RestController
@RequestMapping(value = "/watch")
@RequiredArgsConstructor
@Api(tags = "Watch")
@Slf4j

public class WatchController {

    private final WatchDao service;

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

}
