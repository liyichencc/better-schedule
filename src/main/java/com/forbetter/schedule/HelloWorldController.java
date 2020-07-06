package com.forbetter.schedule;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.text.DecimalFormat;

@Controller
public class HelloWorldController {

    @RequestMapping("/hello")
    public String hello() {
        return "pages-register";
    }

    public static void main(String[] args) {

    }
}
