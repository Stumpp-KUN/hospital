package com.example.hospital.repository;

import com.example.hospital.model.Instruction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstructionRepository extends JpaRepository<Instruction,Long> {
    Instruction getInstructionByTitle(String title);
}
