import axios from 'axios';

// request data to the movie database
export default axios.create({
  baseURL: 'https://www.omdbapi.com',
});
