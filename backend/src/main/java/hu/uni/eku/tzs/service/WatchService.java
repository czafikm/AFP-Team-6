package hu.uni.eku.tzs.service;

import hu.uni.eku.tzs.model.Watch;
import hu.uni.eku.tzs.service.exceptions.WatchAlreadyExistException;

import java.util.Collection;

public interface WatchService {
    void record(Watch watch) throws WatchAlreadyExistException;
    Collection<Watch> readAll();

}
