import React, { useReducer, useEffect } from "react";

import Foot from "./footer";
import './Homepage.css';
import Navbar from "./navbar";



import Slide from "./Slider";
import Teamspot from "./cards1";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search
        });
      });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error
          });
        }
      });
  };
  // const cards = [1, 2, 3];
  // const { movies, errorMessage, loading } = state;

  return (
    <>
      <div className="App" style={{  backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Navbar />
        {/* <marquee style={{ color: 'RED' }}>
  <h3>HURRY UP!!! DECEMBER SALE ON PREMIUMPLUS+ PACK WHICH INCLUDES LATEST TV SHOWS, MOVIES AND WEBSERIES. GRAB 10% OFF ON CHECKOUT WITH CODE: FLAT10+.</h3>
</marquee> */}
        {/* <div className="hero">
      <Hero ></Hero>

      </div> */}
      <div className="slid">
      <Slide/>

      </div>
     <Teamspot/>
    {/* <Slide/> */}
    {/* <Hero/> */}
        {/* <Search /> */}
        <p className="App-intro">Discover your favourite movie content.</p>
        {/* <main>
          <Box
            sx={{
              bgcolor: 'Black',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h5"
                variant="h4"
                align="center"
                color="white"
                gutterBottom
              >
                OUR TOP MOVIES !!
              </Typography>
              <Typography variant="h6" align="center" color="white" paragraph>
                Embark on an exhilarating cinematic journey with our carefully curated selection of top movies. Immerse yourself in a world where storytelling meets brilliance, as each frame unfolds a captivating narrative"
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              />
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        pt: '57.25%',
                      }}
                      image="https://source.unsplash.com/random?wallpapers"
                      
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Movie
                      </Typography>
                      <Typography>
                       Synopsis of the movie.....
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Movie Info</Button>
                      <Button size="small">Rating</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            
          </Container>
        </main> */}
         {/* <div className="movies">
          {loading && !errorMessage ? (
            <span>loading... </span>
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : (
            movies.map((movie, index) => (
              <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))
          )}
        </div> */}
        <div className="foot">
          <Foot />
        </div>
      </div>
    </>
  );
}
