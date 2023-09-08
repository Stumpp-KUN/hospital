package com.example.hospital.web.service;

import com.example.hospital.model.Instruction;
import com.example.hospital.repository.InstructionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class InstructionService {
    private final InstructionRepository instructionRepository;

    public Instruction getInstruction(String title){
        return instructionRepository.getInstructionByTitle(title);
    }

}
