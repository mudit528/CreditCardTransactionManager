package com.example.demo.controller;

import com.example.demo.model.DashboardStats;
import com.example.demo.repository.CardRepository;
import com.example.demo.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {
    @Autowired
    private CardRepository cardRepository;
    @Autowired
    private TransactionRepository transactionRepository;

    @GetMapping("/stats")
    public DashboardStats getStats() {
        return new DashboardStats(
            (int) cardRepository.count(),
            (int) cardRepository.countByStatus("Active"),
            (int) transactionRepository.count()
        );
    }
}
