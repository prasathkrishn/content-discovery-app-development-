package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.MovieDatabase;

public interface MovieDatabaseRepo extends JpaRepository<MovieDatabase, Long> {
}
