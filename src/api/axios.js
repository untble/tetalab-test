import axios from 'axios';

export default axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines?country=ua&apiKey=e861eeb636364c14966dc010acc75a73'
});