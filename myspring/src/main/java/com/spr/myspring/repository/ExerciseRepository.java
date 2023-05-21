package com.spr.myspring.repository;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import com.spr.myspring.model.Exercise;

public interface ExerciseRepository extends CrudRepository<Exercise,UUID> {
    
}
