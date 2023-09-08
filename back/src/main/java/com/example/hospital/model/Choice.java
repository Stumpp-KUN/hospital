//package com.example.hospital.model;
//
//import jakarta.persistence.*;
//import lombok.Data;
//import lombok.RequiredArgsConstructor;
//
//import java.util.List;
//
//@Entity
//@Data
//@RequiredArgsConstructor
//public class Choice {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    @Column(name = "id", nullable = false)
//    private Long id;
//
//    @ManyToOne
//    private Choice parentChoice;
//
//    @OneToMany(mappedBy = "parentChoice")
//    private List<Choice> choiceList;
//
//    private String symptom;
//
//    private Integer order;
//}
