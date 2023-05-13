package com.spr.myspring.repository;
import org.springframework.data.repository.CrudRepository;

import com.spr.myspring.model.User;


public interface UserRepository extends CrudRepository<User, Long> {
    //User findByUsername(String username);
    User findByEmail(String email);
    Iterable<User> findAll();
    User getUserById(Long id);
}
