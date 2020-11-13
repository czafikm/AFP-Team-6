package hu.uni.eku.tzs.service;

import hu.uni.eku.tzs.model.Guest;
import hu.uni.eku.tzs.service.exceptions.GuestAlreadyExistException;
import hu.uni.eku.tzs.service.exceptions.GuestNotFoundException;

import java.util.Collection;

public interface GuestService {
    void record(Guest guest) throws GuestAlreadyExistException;
    Collection<Guest> readAll();
    void update(int id, Guest updated) throws GuestNotFoundException;
    void delete(int id) throws GuestNotFoundException;
}
