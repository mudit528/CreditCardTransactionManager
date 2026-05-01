package com.example.demo.repository;

import com.example.demo.model.Transaction;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;
import java.time.LocalDateTime;

@Repository
public class TransactionRepository {
    private List<Transaction> transactions = new ArrayList<>();

    public TransactionRepository() {
        transactions.add(new Transaction("TX101", LocalDateTime.now().toString(), "Zara", -1000, "Success", "1"));
    }

    public List<Transaction> findAll() {
        return transactions;
    }

    public Transaction save(Transaction transaction) {
        transactions.add(transaction);
        return transaction;
    }

    public long count() {
        return transactions.size();
    }
}
