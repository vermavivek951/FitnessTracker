package com.spr.myspring.repository;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import com.spr.myspring.model.User;



public interface UserRepository extends CrudRepository<User, UUID> {
    //User findByUsername(String username);
    User findByEmail(String email);
    Iterable<User> findAll();
    User getUserById(UUID id);
}
