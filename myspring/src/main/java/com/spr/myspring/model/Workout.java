// //Dont uncomment yet, following code contains some errors

// package com.spr.myspring.model;

// import com.spr.myspring.model.User;
// import java.util.Date;
// import java.util.concurrent.TimeUnit;

// import jakarta.persistence.ElementCollection;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToMany;



// /*
//  * Workout:
// - id
// - user_id
// - date
// - duration
// - notes
//  */


// @Entity
// public class Workout {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @ManyToMany
//     @JoinColumn(name = "user_id")
//     private User user;

//     private Long user_id;
//     private Date date;
//     private TimeUnit duration;
//     private String notes;


//     public Workout(Long user_id, Date date, TimeUnit duration, String notes) {
//         this.user_id = user_id;
//         this.date = date;
//         this.duration = duration;
//         this.notes = notes;
//     }    

//     public Long getUser_id() {
//         return user_id;
//     }

//     public void setUser_id(Long user_id) {
//         this.user_id = user_id;
//     }

//     public Date getDate() {
//         return date;
//     }

//     public void setDate(Date date) {
//         this.date = date;
//     }

//     public TimeUnit getDuration() {
//         return duration;
//     }

//     public void setDuration(TimeUnit duration) {
//         this.duration = duration;
//     }

//     public String getNotes() {
//         return notes;
//     }

//     public void setNotes(String notes) {
//         this.notes = notes;
//     }

    
// }

