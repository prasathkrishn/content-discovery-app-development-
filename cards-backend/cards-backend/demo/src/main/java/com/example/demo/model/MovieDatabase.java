package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "Moviedatabase")
public class MovieDatabase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String runtime;
    private String rating;
    private String userRating;
    private String overview;
    private String director;
    private String writer;
    private int year;
    private String path;

    @ElementCollection
    private List<String> genres;

    @ElementCollection
    private List<String> plotKeyword;

    @ElementCollection
    private List<String> topCasts;
}
