package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Movie;
import com.example.demo.service.MovieService;

@RestController
@CrossOrigin
@RequestMapping("/api/movies")
public class MovieController {

    private final MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    // Create a new movie
    @PostMapping("/post")
    public ResponseEntity<Movie> createMovie(@RequestBody Movie movie) {
        Movie savedMovie = movieService.saveMovie(movie);
        return new ResponseEntity<>(savedMovie, HttpStatus.CREATED);
    }

    // Get all movies
    @GetMapping("/get")
    public ResponseEntity<List<Movie>> getAllMovies() {
        List<Movie> movies = movieService.getAllMovies();
        return new ResponseEntity<>(movies, HttpStatus.OK);
    }

    // Get a movie by ID
    @GetMapping("/get/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable Long id) {
        Optional<Movie> movie = movieService.getMovieById(id);
        return movie.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Update a movie
    @PutMapping("/{id}")
    public ResponseEntity<Movie> updateMovie(@PathVariable Long id, @RequestBody Movie movieDetails) {
        Optional<Movie> movie = movieService.getMovieById(id);

        if (movie.isPresent()) {
            Movie existingMovie = movie.get();
            existingMovie.setTitle(movieDetails.getTitle());
            existingMovie.setYear(movieDetails.getYear());
            existingMovie.setDuration(movieDetails.getDuration());
            existingMovie.setGenre(movieDetails.getGenre());
            existingMovie.setRating(movieDetails.getRating());
            existingMovie.setMetascore(movieDetails.getMetascore());
            existingMovie.setUserRating(movieDetails.getUserRating());
            existingMovie.setDescription(movieDetails.getDescription());
            existingMovie.setLanguages(movieDetails.getLanguages());
            existingMovie.setSubtitles(movieDetails.getSubtitles());
            existingMovie.setPosterUrl(movieDetails.getPosterUrl());

            Movie updatedMovie = movieService.saveMovie(existingMovie);
            return new ResponseEntity<>(updatedMovie, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteMovie(@PathVariable Long id) {
        try {
            movieService.deleteMovieById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}