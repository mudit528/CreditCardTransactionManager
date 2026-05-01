package com.example.demo.model;

public class DashboardStats {
    private int totalCards;
    private int activeCards;
    private int totalTransactions;

    public DashboardStats(int totalCards, int activeCards, int totalTransactions) {
        this.totalCards = totalCards;
        this.activeCards = activeCards;
        this.totalTransactions = totalTransactions;
    }

    // Getters and Setters
    public int getTotalCards() { return totalCards; }
    public void setTotalCards(int totalCards) { this.totalCards = totalCards; }
    public int getActiveCards() { return activeCards; }
    public void setActiveCards(int activeCards) { this.activeCards = activeCards; }
    public int getTotalTransactions() { return totalTransactions; }
    public void setTotalTransactions(int totalTransactions) { this.totalTransactions = totalTransactions; }
}
