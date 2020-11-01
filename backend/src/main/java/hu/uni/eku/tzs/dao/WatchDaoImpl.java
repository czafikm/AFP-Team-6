package hu.uni.eku.tzs.dao;

import hu.uni.eku.tzs.dao.entity.Watch;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;

@RequiredArgsConstructor
@Service
public class WatchDaoImpl implements WatchDao{

    private final WatchRepository repository;

    @Override
    public void create(Watch watch) {
        repository.save(watch);
    }

    @Override
    public Collection<Watch> readAll() {
        return repository.findAll();
    }

    @Override
    public void update(Watch watch) {
        repository.save(watch);
    }

    @Override
    public void delete(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public Watch getById(Integer id) {
        return repository.findById(id).get();
    }

}
