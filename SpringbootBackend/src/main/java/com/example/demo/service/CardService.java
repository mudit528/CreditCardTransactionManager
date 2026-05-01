package com.example.demo.service;

import com.example.demo.model.Card;
import com.example.demo.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CardService {
    @Autowired
    private CardRepository cardRepository;

    public List<Card> getAllCards() {
        return cardRepository.findAll();
    }

    public Card createCard(Card card) {
        if (card.getId() == null) {
            card.setId(String.valueOf(cardRepository.count() + 1));
        }
        if (card.getStatus() == null) {
            card.setStatus("Active");
        }
        return cardRepository.save(card);
    }

    public void deleteCard(String id) {
        cardRepository.deleteById(id);
    }
}
