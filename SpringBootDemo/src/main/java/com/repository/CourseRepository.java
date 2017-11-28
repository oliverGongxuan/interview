package com.repository;

import com.entity.Course;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
//import org.springframework.data.repository.*;

import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository

public interface CourseRepository extends CrudRepository<Course, Long> {
//    List<Course> findByStudentid(Integer studentid);
//    @Query("select c from Course")
//    List<Course> findByStudentid(String studentid);
}