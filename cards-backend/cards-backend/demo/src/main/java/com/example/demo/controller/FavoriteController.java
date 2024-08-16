package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Favorite;
import com.example.demo.service.FavoriteService;

@RestController
@CrossOrigin
@RequestMapping("/api/favorites")
public class FavoriteController {

    private final FavoriteService favoriteService;

    @Autowired
    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }


    @PostMapping("/post")
    public ResponseEntity<Favorite> createFavorite(@RequestBody Favorite favorite) {
        Favorite savedFavorite = favoriteService.saveFavorite(favorite);
        return new ResponseEntity<>(savedFavorite, HttpStatus.CREATED);
    }

    // Get all favorites
    @GetMapping("/get")
    public ResponseEntity<List<Favorite>> getAllFavorites() {
        List<Favorite> favorites = favoriteService.getAllFavorites();
        return new ResponseEntity<>(favorites, HttpStatus.OK);
    }

    // Get a favorite by ID
    @GetMapping("/{id}")
    public ResponseEntity<Favorite> getFavoriteById(@PathVariable Long id) {
        Optional<Favorite> favorite = favoriteService.getFavoriteById(id);
        return favorite.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                       .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Update a favorite
    @PutMapping("/{id}")
    public ResponseEntity<Favorite> updateFavorite(@PathVariable Long id, @RequestBody Favorite favoriteDetails) {
        Optional<Favorite> favorite = favoriteService.getFavoriteById(id);

        if (favorite.isPresent()) {
            Favorite existingFavorite = favorite.get();
            existingFavorite.setTitle(favoriteDetails.getTitle());
            existingFavorite.setYear(favoriteDetails.getYear());
            existingFavorite.setDuration(favoriteDetails.getDuration());
            existingFavorite.setGenre(favoriteDetails.getGenre());
            existingFavorite.setRating(favoriteDetails.getRating());
            existingFavorite.setMetascore(favoriteDetails.getMetascore());
            existingFavorite.setUserRating(favoriteDetails.getUserRating());
            existingFavorite.setDescription(favoriteDetails.getDescription());
            existingFavorite.setLanguages(favoriteDetails.getLanguages());
            existingFavorite.setSubtitles(favoriteDetails.getSubtitles());
            existingFavorite.setPosterUrl(favoriteDetails.getPosterUrl());

            Favorite updatedFavorite = favoriteService.saveFavorite(existingFavorite);
            return new ResponseEntity<>(updatedFavorite, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteFavorite(@PathVariable Long id) {
        try {
            favoriteService.deleteFavoriteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
