package com.spr.myspring.controller;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.spr.myspring.repository.ExerciseRepository;
import com.spr.myspring.model.Exercise;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/exercise")
public class ExcerciseController {
    @Autowired
    private ExerciseRepository exerciseRepository;

    @GetMapping("/{id}")
    public Optional<Exercise> getMethodName(@PathVariable("id") UUID id) {
        return exerciseRepository.findById(id);
    }
    
}
