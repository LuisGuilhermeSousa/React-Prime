import axios from 'axios';

//URL FILMES EM CARTAZ:
// https://api.themoviedb.org/3/

// movie/now_playing &language=pt-BR &page=1

export const key = '98afb426203eee33cee3e9cec3460ae0'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;