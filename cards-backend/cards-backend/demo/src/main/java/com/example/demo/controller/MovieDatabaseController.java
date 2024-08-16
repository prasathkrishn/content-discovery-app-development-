package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.MovieDatabase;
import com.example.demo.service.MovieDatabaseService;

@RestController
@CrossOrigin
@RequestMapping("/api/moviedatabases")
public class MovieDatabaseController {

    private final MovieDatabaseService movieDatabaseService;

    @Autowired
    public MovieDatabaseController(MovieDatabaseService movieDatabaseService) {
        this.movieDatabaseService = movieDatabaseService;
    }

    @PostMapping("/post")
    public ResponseEntity<MovieDatabase> createMovieDatabase(@RequestBody MovieDatabase movieDatabase) {
        MovieDatabase savedMovieDatabase = movieDatabaseService.saveMovieDatabase(movieDatabase);
        return new ResponseEntity<>(savedMovieDatabase, HttpStatus.CREATED);
    }

    @GetMapping("/get")
    public ResponseEntity<List<MovieDatabase>> getAllMovieDatabases() {
        List<MovieDatabase> movieDatabases = movieDatabaseService.getAllMovieDatabases();
        return new ResponseEntity<>(movieDatabases, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MovieDatabase> getMovieDatabaseById(@PathVariable Long id) {
        Optional<MovieDatabase> movieDatabase = movieDatabaseService.getMovieDatabaseById(id);
        return movieDatabase.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<MovieDatabase> updateMovieDatabase(@PathVariable Long id, @RequestBody MovieDatabase movieDatabaseDetails) {
        Optional<MovieDatabase> movieDatabase = movieDatabaseService.getMovieDatabaseById(id);

        if (movieDatabase.isPresent()) {
            MovieDatabase existingMovieDatabase = movieDatabase.get();
            existingMovieDatabase.setTitle(movieDatabaseDetails.getTitle());
            existingMovieDatabase.setYear(movieDatabaseDetails.getYear());
            existingMovieDatabase.setRuntime(movieDatabaseDetails.getRuntime());
            existingMovieDatabase.setGenres(movieDatabaseDetails.getGenres());
            existingMovieDatabase.setRating(movieDatabaseDetails.getRating());
            existingMovieDatabase.setUserRating(movieDatabaseDetails.getUserRating());
            existingMovieDatabase.setOverview(movieDatabaseDetails.getOverview());
            existingMovieDatabase.setPlotKeyword(movieDatabaseDetails.getPlotKeyword());
            existingMovieDatabase.setDirector(movieDatabaseDetails.getDirector());
            existingMovieDatabase.setTopCasts(movieDatabaseDetails.getTopCasts());
            existingMovieDatabase.setWriter(movieDatabaseDetails.getWriter());
            existingMovieDatabase.setPath(movieDatabaseDetails.getPath());

            MovieDatabase updatedMovieDatabase = movieDatabaseService.saveMovieDatabase(existingMovieDatabase);
            return new ResponseEntity<>(updatedMovieDatabase, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteMovieDatabase(@PathVariable Long id) {
        try {
            movieDatabaseService.deleteMovieDatabaseById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
