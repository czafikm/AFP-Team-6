package hu.uni.eku.tzs.dao;

import hu.uni.eku.tzs.dao.entity.Watch;

import java.util.Collection;

public interface WatchDao {

    void create(Watch watch);

    Collection<Watch> readAll();

    void update(Watch watch);

    void delete(Integer id);

    Watch getById (Integer id);
}
