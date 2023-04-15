import axios from 'axios';
const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
});

export default pokeApi;


//base reference to the Api to be consumed later