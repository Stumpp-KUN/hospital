package com.example.hospital.web.controller;

import com.example.hospital.model.Instruction;
import com.example.hospital.web.service.InstructionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/instruction")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class InstructionController {
    private final InstructionService instructionService;

    @GetMapping("/")
    public ResponseEntity<Instruction> getInstruction(@RequestParam String title){

        return new ResponseEntity<>(instructionService.getInstruction(title), HttpStatus.OK);
    }

}
