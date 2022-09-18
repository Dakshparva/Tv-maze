import React, { useEffect } from 'react';
import Cards from './Cards';
import Grid from '@mui/material/Grid';
function ByMovieName({ data }) {
  return (
    <div>
      {data?.length > 0 ? (
        <Grid direction='rows' container spacing={2}>
          {data?.map((movie) => (
            <Grid item xs={4}>
              <Cards
                img={
                  movie?.show?.image != null && movie?.show?.image?.original != null
                    ? movie.show.image.original
                    : 'https://www.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg'
                }
                name={movie.show.name}
                language={movie.show.language}
                desc={movie.show.summary}
                genres={movie.show.genres}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        'No Movie Found'
      )}
    </div>
  );
}

export default ByMovieName;
