package com.example.demo.model;

public class Card {
    private String id;
    private String cardNumber;
    private String cardHolder;
    private String expiryDate;
    private String cvv;
    private String bankName;
    private String status;
    private double balance;

    public Card() {}

    public Card(String id, String cardNumber, String cardHolder, String expiryDate, String cvv, String bankName, String status, double balance) {
        this.id = id;
        this.cardNumber = cardNumber;
        this.cardHolder = cardHolder;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
        this.bankName = bankName;
        this.status = status;
        this.balance = balance;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getCardNumber() { return cardNumber; }
    public void setCardNumber(String cardNumber) { this.cardNumber = cardNumber; }
    public String getCardHolder() { return cardHolder; }
    public void setCardHolder(String cardHolder) { this.cardHolder = cardHolder; }
    public String getExpiryDate() { return expiryDate; }
    public void setExpiryDate(String expiryDate) { this.expiryDate = expiryDate; }
    public String getCvv() { return cvv; }
    public void setCvv(String cvv) { this.cvv = cvv; }
    public String getBankName() { return bankName; }
    public void setBankName(String bankName) { this.bankName = bankName; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public double getBalance() { return balance; }
    public void setBalance(double balance) { this.balance = balance; }
}
