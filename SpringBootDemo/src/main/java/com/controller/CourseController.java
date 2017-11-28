package com.controller;

import com.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import com.entity.Course;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller    // This means that this class is a Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path="/course") // This means URL's start with /demo (after Application path)
public class CourseController {
    @Autowired
    private CourseService courseService;
    //Find and display students along with student's enrolled courses.
    @GetMapping(path="/search",produces = MediaType.APPLICATION_JSON_VALUE) // Map ONLY POST Requests
    public @ResponseBody Iterable<Course> searchCourses () {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
//        JSONObject jsonObject = new JSONObject(studentid);
        System.out.println("search");
//        System.out.println(jsonObject.getInt("studentid"));
        return courseService.findAllCourses();

    }
    @GetMapping(path="/all",produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody Iterable<Course> getAllUsers() {
        // This returns a JSON with the users
        return courseService.findAllCourses();
    }
}
