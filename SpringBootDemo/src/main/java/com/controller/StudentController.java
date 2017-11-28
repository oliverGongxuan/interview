package com.controller;

import com.entity.Student;
import com.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller    // This means that this class is a Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path="/student") // This means URL's start with /demo (after Application path)
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PutMapping(path="/add",consumes = MediaType.APPLICATION_JSON_VALUE) // Map ONLY POST Requests
    public  ResponseEntity<?> addNewStudent (@RequestBody Student student) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        studentService.addStudent(student);
        System.out.println("Saved");
        return new ResponseEntity(null,HttpStatus.CREATED);
    }
    @PostMapping(path="/delete",consumes = MediaType.APPLICATION_JSON_VALUE) // Map ONLY POST Requests
    public  ResponseEntity<?> deleteStudent (@RequestBody Student student) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        studentService.deleteStudent(student);
        System.out.println("Saved");
        return new ResponseEntity(null,HttpStatus.OK);
    }
    @PostMapping(path="/update",consumes = MediaType.APPLICATION_JSON_VALUE) // Map ONLY POST Requests
    public  ResponseEntity<?> updateStduent (@RequestBody Student student) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        studentService.updateStudent(student);
        System.out.println("updated");
        return new ResponseEntity(null,HttpStatus.OK);
    }

//    @GetMapping(path="/all",produces = MediaType.APPLICATION_JSON_VALUE)
//    public @ResponseBody Iterable<Student> getAllUsers() {
//        // This returns a JSON with the users
//        return studentService.getAllUsers();
//    }

//    }
}