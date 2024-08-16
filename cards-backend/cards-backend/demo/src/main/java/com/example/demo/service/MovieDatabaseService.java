package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.MovieDatabase;
import com.example.demo.repository.MovieDatabaseRepo;

@Service
public class MovieDatabaseService {

    private final MovieDatabaseRepo movieDatabaseRepo;

    @Autowired
    public MovieDatabaseService(MovieDatabaseRepo movieDatabaseRepo) {
        this.movieDatabaseRepo = movieDatabaseRepo;
    }

    public MovieDatabase saveMovieDatabase(MovieDatabase movieDatabase) {
        return movieDatabaseRepo.save(movieDatabase);
    }

    public List<MovieDatabase> getAllMovieDatabases() {
        return movieDatabaseRepo.findAll();
    }

    public Optional<MovieDatabase> getMovieDatabaseById(Long id) {
        return movieDatabaseRepo.findById(id);
    }

    public void deleteMovieDatabaseById(Long id) {
        movieDatabaseRepo.deleteById(id);
    }
}
