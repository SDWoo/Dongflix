import {defineStore} from 'pinia';
import fetch from 'node-fetch';

export const useMovieStore = defineStore('movie',{
    state() {
        return {
            movies: [],
            movie: {},
            title: '',
            page: 1,
            totalPage: 1,
            loading: false
        };
    },
    actions: {
        async getMovies() {
            console.log(process, process.env);
            if(this.title.trim().length <= 0 || !this.loading) return;

            const response = await fetch(
              `https://www.omdbapi.com?apikey=${process.env.APIKEY}&s=${this.title}&page=${this.page}`
            );

            const data = await response.json();
            const {Search} = data;
            this.movies = [...Search];
            this.totalPage = Math.ceil(data.totalResults / 10);
            console.log(this.movies, data, this.totalPage);
        },

        async getNextPageMovies() {
            if(this.page === this.totalPage) {
                alert('다음 페이지가 없습니다!');
                this.loading = false;
                return ;
            }
            this.page += 1;
            await this.getMovies();
        },
        async getPrevPageMovies() {
            if(this.page === 1) {
                alert('이전 페이지가 없습니다!');
                this.loading = false;
                return ; 
            }
            this.page -= 1;
            await this.getMovies();
        },
        async getDetailMovie(id) {
            const response = await fetch(
              `https://www.omdbapi.com?apikey=${process.env.APIKEY}&i=${id}&plot=full`
            );

            const data = await response.json();
            this.movie = data;
            this.movie.Poster = this.movie.Poster.replace(/SX300/, 'SX700');
        }
    }
});