package com.spr.myspring.repository;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import com.spr.myspring.model.Workout;

public interface WorkoutRepository extends CrudRepository<Workout,UUID> {
}
