<template>
  <header class="movie-app__header">
    <h1 class="movie-app__title">
      DONGFLIX
    </h1>
    <form
      class="movie-app__form"
      @submit.prevent="getMovies">
      <input
        v-model="movieStore.title"
        class="movie-app__input" />
      <button
        class="movie-app__search-button">
        <img
          src="../assets/icon/search.svg"
          alt="search" />
      </button>
    </form>
  </header>
  <Loading
    v-if="movieStore.loading"
    v-model="movieStore.loading" />
  <section
    v-else
    class="movie-app-contents__container">
    <h1 v-if="!movies.length">
      Search Movies
    </h1>
    <div
      v-for="movie in movies"
      v-else
      :key="movie.imdbID"
      class="movie-app__contents">
      <div class="movie-app__content">
        <RouterLink
          :to="`/movie/${movie.imdbID}`"
          @click="getDetailMovie(movie.imdbID)">
          <img
            class="movie-content__poster"
            :src="movie.Poster"
            alt="poster" />
          <div class="movie-content__info">
            <span class="movie-content__title">{{ movie.Title }}</span>
            <span class="movie-content__year">{{ movie.Year }}</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
  <section
    v-if="movies.length"
    class="movie-app__more-contents">
    <button
      @click="getPrevPageMovies">
      이전 페이지
    </button>
    <span>{{ movieStore.page }}</span>
    <button
      @click="getNextPageMovies">
      다음 페이지
    </button>
  </section>
</template>

<script>
import { useMovieStore } from '~/store/movie';
import Loading from '~/components/Loading';

export default {
  components: {
    Loading
  },
  computed: {
    movieStore() {
      const store = useMovieStore();
      return store;
    },
    movies() {
      return this.movieStore.movies;
    },
  },
  watch: {
    movies() {
      console.log(this.movies);
    },
  },
  methods: {
    async getMovies() {
      this.movieStore.loading = true;
      await this.movieStore.getMovies();
      setTimeout(() => {        
        this.movieStore.loading = false;
      }, 2000);
    },
    async getNextPageMovies() {
      this.movieStore.loading = true;
      await this.movieStore.getNextPageMovies();
      setTimeout(() => {        
        this.movieStore.loading = false;
      }, 2000);
    },
    async getPrevPageMovies() {
      this.movieStore.loading = true;
      await this.movieStore.getPrevPageMovies();
      setTimeout(() => {        
        this.movieStore.loading = false;
      }, 2000);
    },
    async getDetailMovie(id) {
      console.log(id);
      this.movieStore.loading = true;
      await this.movieStore.getDetailMovie(id);
      setTimeout(() => {        
        this.movieStore.loading = false;
      }, 2000);
    }
  }
};

</script>


<style lang="scss" scoped>
    .movie-app__header {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px 0;
        height: 20%;
        
        .movie-app__title {
            font-size: 60px;
            margin-bottom: 20px;
        }

        .movie-app__form {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 400px;
            height: 35px;
            padding: 10 15px;
            background-color: white;
            border: none;
            border-radius: 12px;

            .movie-app__input {
                width: 80%;
                font-size: 16px;
                margin: 2px 5px;
                padding: 10 15px;
                outline: none;
                border: none;
            }
            .movie-app__search-button {
                width: 10%;
                height: 90%;
                border: none;
                border-radius: 0 50px 50px 0;
                background-color: #fff;
                cursor: pointer;
            }
        }

    }

    .movie-app-contents__container  {
      width: 80vw;
      padding: 20px;
      border-radius: 8px;
      background-color:rgb(40, 40, 42);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;

      .movie-app__content {
        width: 200px;
        height: 300px;
        border-radius: 4px;
        background-color: black;
        position: relative;
        
        .movie-content__poster{
          width: 100%;
          height: 100%;
          background-size: cover;
          overflow: hidden;
        }

        .movie-content__info {
          display: flex;
          flex-direction: column;
          
          background-color: rgba(14,17,27,.3);
          color: rgb(229, 217, 82);
          backdrop-filter: blur(10px);
          width: 100%;
          padding: 14px;
          box-sizing: border-box;
          font-size: 14px;
          text-align: center;
          position: absolute;
          left: 0;
          bottom: 0;
          .movie-content__title{
            font-size: 20px;
          }
        }

      }

    }
    .movie-app__more-contents {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 50px;
      padding: 10px 20px;
      color: white;
      
      button {
        border: none;
        border-radius: 8px;
        padding: 5px 10px;
        margin: 5px;
        background-color: transparent;
        color: white;
        cursor: pointer;
      }

      button:hover {
        background-color: rgb(151, 151, 151);
      }
    }
</style>