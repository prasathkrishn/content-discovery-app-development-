package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Movie;
import com.example.demo.repository.MovieRepo;

@Service
public class MovieService {

    private final MovieRepo movieRepo;

    @Autowired
    public MovieService(MovieRepo movieRepo) {
        this.movieRepo = movieRepo;
    }

    // Save a movie
    public Movie saveMovie(Movie movie) {
        return movieRepo.save(movie);
    }

    // Get all movies
    public List<Movie> getAllMovies() {
        return movieRepo.findAll();
    }

    // Get a movie by ID
    public Optional<Movie> getMovieById(Long id) {
        return movieRepo.findById(id);
    }

    // Update a movie (handled by saveMovie when passed an existing movie)
    // Not strictly necessary to have a separate method if we're using saveMovie

    // Delete a movie by ID
    public void deleteMovieById(Long id) {
        movieRepo.deleteById(id);
    }
}