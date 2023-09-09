package com.example.hospital.web.service;

import com.example.hospital.model.Choice;
import com.example.hospital.repository.ChoiseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ChoiceService {
    private final ChoiseRepository choiseRepository;

    public List<Choice> getChoises(Integer order){
        return choiseRepository.findChoicesByOrderValue(order);
    }

    public Choice getChoise(Long id){
        return choiseRepository.findById(id).orElseThrow(()->new NoSuchElementException("There is not choise with this id"));
    }
}
