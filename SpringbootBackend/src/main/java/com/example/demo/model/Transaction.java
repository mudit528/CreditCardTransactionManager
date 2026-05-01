package com.example.demo.model;

import java.time.LocalDateTime;

public class Transaction {
    private String id;
    private String date;
    private String merchant;
    private double amount;
    private String status;
    private String cardId;

    public Transaction() {}

    public Transaction(String id, String date, String merchant, double amount, String status, String cardId) {
        this.id = id;
        this.date = date;
        this.merchant = merchant;
        this.amount = amount;
        this.status = status;
        this.cardId = cardId;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }
    public String getMerchant() { return merchant; }
    public void setMerchant(String merchant) { this.merchant = merchant; }
    public double getAmount() { return amount; }
    public void setAmount(double amount) { this.amount = amount; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getCardId() { return cardId; }
    public void setCardId(String cardId) { this.cardId = cardId; }
}
