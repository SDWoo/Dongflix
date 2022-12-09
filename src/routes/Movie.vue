<template>
  <Loading
    v-if="movieStore.loading"
    v-model="movieStore.loading" />
  <section
    v-else
    class="movie-detail-container">
    <RouterLink :to="`/`">
      <button class="home-btn">
        홈으로 가기
      </button>
    </RouterLink>
    <div class="movie-detail">
      <div class="movie-image-container">
        <img
          class="movie-image"
          :src="movie.Poster"
          alt="" />
      </div>
      <div class="movie-info-container">
        <h1 class="movie-title">
          {{ movie.Title }}
        </h1>
        <span class="movie-infos">{{ movie.Released }} / {{ movie.Runtime }} / {{ movie.Genre }}</span>
        <span class="movie-info">{{ movie.Plot }}</span>
        <h2 class="movie-sub-title">
          Ratings
        </h2>
        <span
          v-for="Rating in movie.Ratings"
          :key="Rating.Value"
          class="movie-info">
          {{ Rating.Source }} {{ Rating.Value }}
        </span>
        <h2 class="movie-sub-title">
          Actors
        </h2>
        <span class="movie-info">
          {{ movie.Actors }}
        </span>
        <h2 class="movie-sub-title">
          Director
        </h2>
        <span class="movie-info">
          {{ movie.Director }}
        </span>
        <h2 class="movie-sub-title">
          Production
        </h2>
        <span class="movie-info">
          {{ movie.Production }}
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import {useMovieStore} from '~/store/movie';
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
    movie() {
      return this.movieStore.movie;
    }
  }
};
</script>


<style lang="scss" scoped>

.movie-detail-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;


  .movie-detail {
    display: flex;
    width: 90%;
    height: 80vh;
    
    .movie-image-container {
      width: 50%;
      text-align: center;

      .movie-image {
        width: 80%;
        height: 100%;
        background-size: cover;
      }
    }
      .movie-info-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        box-sizing: border-box;
        width: 50%;
        height: 100%;
        padding: 20px 50px;
        color: white;
        background-color: rgba(36, 37, 39, 0.3);

        .movie-title {
          font-size: 80px;
        }
        
        .movie-sub-title {
          margin: 10px 0;
          font-size: 24px;
        }

        .movie-infos {
          color: rgb(140, 255, 0);
          margin-bottom: 10px;
        }

        .movie-info {
          color: gray;
          font-family:Arial, Helvetica, sans-serif;
        }

      }
  }
  
  .home-btn {
    position: absolute;
    top: 20px;
    right: 40px;
    padding: 10px 15px;
    background-color: transparent;
    border: none;
    border-radius: 8px;
    color: white;
  }

  .home-btn:hover {
    background-color: rgb(96, 92, 92);
  }
  
}
</style>