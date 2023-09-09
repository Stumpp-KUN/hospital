package com.example.hospital.web.controller;


import com.example.hospital.model.Choice;
import com.example.hospital.web.service.ChoiceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/choices")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ChoiceController {

    private final ChoiceService choiceService;

    @GetMapping("/{id}")
    public ResponseEntity<List<Choice>> getChoisesByOrder(@PathVariable Integer id){
        return new ResponseEntity<>(choiceService.getChoises(id), HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<Choice> getChoise(@PathVariable Long id){
        return new ResponseEntity<>(choiceService.getChoise(id),HttpStatus.OK);
    }
}
