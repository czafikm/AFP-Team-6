package hu.uni.eku.tzs.dao;

import hu.uni.eku.tzs.dao.entity.Watch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WatchRepository extends JpaRepository <Watch, Integer> {

}