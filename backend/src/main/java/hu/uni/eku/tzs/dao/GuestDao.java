package hu.uni.eku.tzs.dao;

import hu.uni.eku.tzs.model.Guest;

import java.util.Collection;

public interface GuestDao {
    void create(Guest guest);

    Collection<Guest> readAll();

    void update(int id, Guest updated);

    void delete(int id);

    Guest findById (int id);

}
