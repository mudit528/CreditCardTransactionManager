package com.example.demo.repository;

import com.example.demo.model.User;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class UserRepository {
    private List<User> users = new ArrayList<>();

    public UserRepository() {
        users.add(new User("admin@example.com", "admin1!", "ADMIN", "password123"));
        users.add(new User("user@example.com", "Standard User", "USER", "password123"));
    }

    public Optional<User> findByEmail(String email) {
        return users.stream().filter(u -> u.getEmail().equals(email)).findFirst();
    }

    public User save(User user) {
        users.add(user);
        return user;
    }
}
