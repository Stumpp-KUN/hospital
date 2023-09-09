package com.example.hospital.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Entity
@Data
@RequiredArgsConstructor
@Table(name = "choice")
public class Choice {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne
    @JsonIgnore
    private Choice parentChoice;

    @OneToMany(mappedBy = "parentChoice")
    @JsonIgnoreProperties("choiceList")
    private List<Choice> choiceList;

    @Column(name = "symptom")
    private String symptom;

    @Column(name = "order_value")
    private Integer orderValue;
}

