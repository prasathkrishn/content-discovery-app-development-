package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Favorite;
import com.example.demo.repository.FavoriteRepo;

@Service
public class FavoriteService {

    private final FavoriteRepo favoriteRepo;

    @Autowired
    public FavoriteService(FavoriteRepo favoriteRepo) {
        this.favoriteRepo = favoriteRepo;
    }

    // Save a favorite
    public Favorite saveFavorite(Favorite favorite) {
        return favoriteRepo.save(favorite);
    }

    // Get all favorites
    public List<Favorite> getAllFavorites() {
        return favoriteRepo.findAll();
    }

    // Get a favorite by ID
    public Optional<Favorite> getFavoriteById(Long id) {
        return favoriteRepo.findById(id);
    }

    // Delete a favorite by ID
    public void deleteFavoriteById(Long id) {
        favoriteRepo.deleteById(id);
    }
}
