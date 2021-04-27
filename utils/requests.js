const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchActions: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchHorror: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchRomance: {
    title: "Other",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=56`,
  },
  // fetch4: {
  //   title: "Comedy",
  //   url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  // },
};
