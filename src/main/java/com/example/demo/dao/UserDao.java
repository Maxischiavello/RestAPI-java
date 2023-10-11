package com.example.demo.dao;

import com.example.demo.models.User;

import java.util.List;

public interface UserDao {

    List<User> getUsers();

    void delete(Long id);

    void register(User user);

    User getUserByCredentials(User user);
}
