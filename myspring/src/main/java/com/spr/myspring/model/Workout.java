//Dont uncomment yet, following code contains some errors

package com.spr.myspring.model;

import java.time.LocalDate;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "user_id",insertable=false, updatable=false)
    private User user;

    private UUID user_id;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;

    private Long duration;
    private String notes;


    public Workout(UUID user_id, LocalDate date, Long duration, String notes) {
        this.user_id = user_id;
        this.date = date;
        this.duration = duration;
        this.notes = notes;
    }    

    public UUID getUser_id() {
        return user_id;
    }

    public void setUser_id(UUID user_id) {
        this.user_id = user_id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Long getDuration() {
        return duration;
    }

    public void setDuration(Long duration) {
        this.duration = duration;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    
}

