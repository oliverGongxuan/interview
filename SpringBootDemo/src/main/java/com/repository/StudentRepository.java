package com.repository;

import com.entity.Student;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository

public interface StudentRepository extends CrudRepository<Student, Long> {
}