package com.example.demo.controllers;

import com.example.demo.dao.UserDao;
import com.example.demo.models.User;
import com.example.demo.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private UserDao userDao;

    @Autowired
    private JWTUtil jwt;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String loginUser(@RequestBody User user) {
        User loggedUser = userDao.getUserByCredentials(user);

        if (loggedUser != null) {
            String token = jwt.create(String.valueOf(loggedUser.getId()), loggedUser.getEmail());
            return token;
        }

        return "FAIL";
    }
}
