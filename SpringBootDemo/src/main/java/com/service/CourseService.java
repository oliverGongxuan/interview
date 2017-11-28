package com.service;

import com.entity.Course;
import com.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    public Iterable<Course> findAllCourses(){
        return courseRepository.findAll();
    }
}