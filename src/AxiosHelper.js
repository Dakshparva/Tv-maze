import axios from 'axios';

export const getByShowName = async (searchString) => {
  const data = await axios.get(
    'https://api.tvmaze.com/search/shows?q=' + searchString,
  );
  if (data != null) {
    return data.data;
  }
};
export const getByActorName = async (searchString) => {
  const data = await axios.get(
    'https://api.tvmaze.com/search/people?q=' + searchString,
  );
  if (data != null) {
    return data.data;
  }
};

export const getShowsByActorName = async (searchString) => {
  const data = await axios.get(
    `https://api.tvmaze.com/people/${searchString}/castcredits?embed=show`,
  );
  if (data != null) {
    return data.data;
  }
};
