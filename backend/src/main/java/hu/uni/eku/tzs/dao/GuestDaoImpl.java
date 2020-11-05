package hu.uni.eku.tzs.dao;

import hu.uni.eku.tzs.dao.entity.GuestEntity;
import hu.uni.eku.tzs.model.Guest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RequiredArgsConstructor
@Service
public class GuestDaoImpl implements GuestDao{
    private final  GuestRepository repo;
    @Override
    public void create(Guest guest) {
        repo.save(GuestEntityModelConverter.model2entity(guest));
    }

    @Override
    public Collection<Guest> readAll() {
        return StreamSupport.stream(repo.findAll().spliterator(), false)
                .map(GuestEntityModelConverter::entity2model)
                .collect(Collectors.toList());
    }

    @Override
    public void update(Guest original, Guest updated) {

    }

    @Override
    public void delete(Guest guest) {

    }

    @Override
    public Guest findById(int id) {

        return GuestEntityModelConverter.entity2model(repo.findById(id));
    }

    public static class GuestEntityModelConverter {
        public static Guest entity2model(GuestEntity entity){
            return new Guest(
                    entity.getId(),
                    entity.getFirstName(),
                    entity.getLastName(),
                    entity.getGuestAge(),
                    entity.getEmail()
            );
        }

        public static GuestEntity model2entity(Guest model){
            return GuestEntity.builder()
                    .firstName(model.getFirstName())
                    .lastName(model.getLastName())
                    .guestAge(model.getGuestAge())
                    .email(model.getEmail())
                    .build();
        }
    }
}
