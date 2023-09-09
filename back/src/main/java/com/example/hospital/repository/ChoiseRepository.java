package com.example.hospital.repository;

import com.example.hospital.model.Choice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChoiseRepository extends JpaRepository<Choice,Long> {
    List<Choice> findChoicesByOrderValue(Integer orderValue) ;
}
