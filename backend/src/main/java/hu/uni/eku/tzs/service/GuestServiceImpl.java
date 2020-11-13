package hu.uni.eku.tzs.service;

import hu.uni.eku.tzs.dao.GuestDao;
import hu.uni.eku.tzs.model.Guest;
import hu.uni.eku.tzs.service.exceptions.GuestAlreadyExistException;
import hu.uni.eku.tzs.service.exceptions.GuestNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;
@Slf4j
@RequiredArgsConstructor
@Service
public class GuestServiceImpl implements GuestService{
   private final GuestDao dao;


    @Override
    public void record(Guest guest) throws GuestAlreadyExistException {
        final boolean isAlreadyRecorded = dao.readAll()
                .stream()
                .anyMatch(g -> g.getFirstName() == guest.getFirstName()
                        && g.getLastName() == guest.getFirstName()
                        && g.getGuestAge() == guest.getGuestAge()
                        && g.getEmail() == guest.getEmail());
        if (isAlreadyRecorded) {
            log.info("Guest {} is already recorded!", guest);
            throw new GuestAlreadyExistException(String.format("Guest (%s) already exists!", guest.toString()));
        }
        dao.create(guest);
    }
    @Override
    public Collection<Guest> readAll() {
        return dao.readAll();
    }

    @Override
    public void update(int id, Guest updated) throws GuestNotFoundException {
        dao.update(id,updated);
    }

    @Override
    public void delete(int id) throws GuestNotFoundException {
        dao.delete(id);
    }


}
