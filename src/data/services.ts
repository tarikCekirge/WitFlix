const BASE_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const fetchData = async (url: string) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Failed to fetch data");
    const json = await response.json();
    return json;
  } catch (err) {
    console.error("Fetch Error:", err);
    return null;
  }
};

// Movie Categories
export const fetchMovieCategories = async () => {
  const url = `${BASE_URL}/genre/movie/list`;
  return await fetchData(url);
};

// TV Categories
export const fetchTvCategories = async () => {
  const url = `${BASE_URL}/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'`;
  return await fetchData(url);
};

// All Trends
export const fecthAllTrends = async () => {
  const url = `${BASE_URL}/trending/all/day?language=en-US`;
  return await fetchData(url);
};

// Trending Movies
export const fetchTrendingMovies = async () => {
  const url = `${BASE_URL}/trending/movie/week`;
  return await fetchData(url);
};

// Trending Movies
export const fetchTrendingTv = async () => {
  const url = `${BASE_URL}/trending/tv/day?language=en-US`;
  return await fetchData(url);
};

export const fetchMovieById = async (id: number) => {
  const url = `${BASE_URL}/movie/${id}`;
  return await fetchData(url);
};
export const fetchTvById = async (id: number) => {
  const url = `${BASE_URL}/tv/${id}`;
  return await fetchData(url);
};
