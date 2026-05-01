package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    public CommandLineRunner init() {
        return args -> {
            System.out.println("================================");
            System.out.println("Backend is ready on port 8080!");
            System.out.println("Admin User: admin@example.com / password123");
            System.out.println("================================");
        };
    }
}
