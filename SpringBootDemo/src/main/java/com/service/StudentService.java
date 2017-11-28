package com.service;

import com.entity.Student;
import com.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public void addStudent(Student student){
        studentRepository.save(student);
    }
    public void deleteStudent(Student student){
        studentRepository.delete(student);
    }
    public void updateStudent(Student student){
        studentRepository.save(student);
    }
}