import React from 'react';
import VideoTemplate from './VideoTemplate';

const ExamplePage = () => {
  const videoDetails = {
    videoUrl: 'https://example.com/video.mp4',
    title: 'Avengers: Endgame',
    description: 'The Avengers assemble once again to reverse the damage caused by Thanos in Infinity War.',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Scarlett Johansson'],
    genre: 'Action, Adventure, Sci-Fi',
    rating: '8.4/10'
  };

  return (
    <VideoTemplate
      videoUrl={videoDetails.videoUrl}
      title={videoDetails.title}
      description={videoDetails.description}
      cast={videoDetails.cast}
      genre={videoDetails.genre}
      rating={videoDetails.rating}
    />
  );
};

export default ExamplePage;
