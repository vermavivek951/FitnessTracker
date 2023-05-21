package com.spr.myspring.model;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

/*
 * 
3. Exercise:
- id
- workout_id
- name
- description
 */

@Entity
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne
    @JoinColumn(name="workout_id",insertable=false,updatable = false)
    private Workout workout;

    private UUID workout_id;
    private String name;
    private String description;

    public Exercise() {
        //default constructor required by JPA
    }
    
    public Exercise(UUID workout_id, String name, String description) {
        this.workout_id = workout_id;
        this.name = name;
        this.description = description;
    }

    public UUID getWorkout_id() {
        return workout_id;
    }
    public void setWorkout_id(UUID workout_id) {
        this.workout_id = workout_id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
        
}
