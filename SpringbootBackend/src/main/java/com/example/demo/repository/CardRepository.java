package com.example.demo.repository;

import com.example.demo.model.Card;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class CardRepository {
    private List<Card> cards = new ArrayList<>();

    public CardRepository() {
        cards.add(new Card("1", "**** 4589", "Admin", "12/28", "123", "S-Bank", "Active", 5000));
        cards.add(new Card("2", "**** 1234", "Admin", "06/27", "456", "Global Bank", "Active", 12500));
    }

    public List<Card> findAll() {
        return cards;
    }

    public Card save(Card card) {
        cards.add(card);
        return card;
    }

    public Optional<Card> findById(String id) {
        return cards.stream().filter(c -> c.getId().equals(id)).findFirst();
    }

    public void deleteById(String id) {
        cards = cards.stream().filter(c -> !c.getId().equals(id)).collect(Collectors.toList());
    }

    public long count() {
        return cards.size();
    }

    public long countByStatus(String status) {
        return cards.stream().filter(c -> c.getStatus().equals(status)).count();
    }
}
