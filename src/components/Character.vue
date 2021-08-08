<template>
  <div class="character">
    <router-link :to="'/'" title="Вернуться к списку персонажей" class="back-icon">
      <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M35.8081 18.0928C35.8081 27.4668 28.209 35.0659 18.835 35.0659C9.46045 35.0659 1.86133 27.4668 1.86133 18.0928C1.86133 8.71826 9.46045 1.11914 18.835 1.11914C28.209 1.11914 35.8081 8.71826 35.8081 18.0928ZM36.8081 18.0928C36.8081 28.019 28.7612 36.0659 18.835 36.0659C8.9082 36.0659 0.861328 28.019 0.861328 18.0928C0.861328 8.16602 8.9082 0.119141 18.835 0.119141C28.7612 0.119141 36.8081 8.16602 36.8081 18.0928ZM13.8252 18.7197C13.6299 18.5244 13.6299 18.208 13.8252 18.0127L14.418 17.4199L19.3257 12.5122C19.521 12.3169 19.8374 12.3169 20.0327 12.5122L20.6255 13.105C20.8208 13.3003 20.8208 13.6167 20.6255 13.812L16.0713 18.3662L20.6255 22.9204C20.8208 23.1157 20.8208 23.4321 20.6255 23.6274L20.0327 24.2202C19.8374 24.4155 19.521 24.4155 19.3257 24.2202L14.418 19.3125L13.8252 18.7197Z" fill="#A5ACB2">
        </path>
      </svg>
    </router-link>
    <div v-if="character" class="character__info">
      <div class="character__info__img"><img :src="url" alt="Изображение персонажа"></div>
      <div class="character__info__tx">
        <h3>{{  character.name }}</h3>
        <p>{{ character.description ? character.description : 'Хмм... Кажется, у этого персонажа отсутствует описание 🤔' }}</p>
      </div>
    </div>
    <div v-if="!isLoading && error" class="character__error">
      <div>Произошла ошибка :(</div>
      <div>Пожалуйста, попробуйте обновить страницу</div>
    </div>
    <dot-loader v-if="isLoading" :loading="isLoading" :color="'#fc3903'" :size="'26px'"></dot-loader>
  </div>
</template>

<script>

import DotLoader from 'vue-spinner/src/PulseLoader.vue'
import { privateKey, publicKey } from '../marvel';
import axios from 'axios';

export default {
  name: 'Character',
  components: {
    DotLoader
  },
  data () {
    return {
      isLoading: true,
      error: false,
      character: null,
      url: '',
      size: 'standard_large.jpg'
    }
  },
  created () {
    this.getCharacter();
  },
  methods: {
    getCharacter () {
      this.error = false;
      this.isLoading = true;

      const id = this.$route.params.id;

      axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=${publicKey}`)
        .then((response) => {
          this.isLoading = false;
          this.error = false;

          this.character = response.data.data.results[0];
          this.url = `${this.character.thumbnail.path}/${this.size}`;
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = true;
          console.log(error);
        });
    }
  }
}
</script>

<style lang="sass">

.character
  position: relative
  padding-left: 300px
.back-icon
  position: absolute
  top: -4px
  left: 200px
  height: 37px
  svg path
    transition: ease .3s
  &:hover
    svg path
      fill: #fc3903
.character__error
  font-family: "RobotoCondensed Bold", "Trebuchet MS", Helvetica,Arial, sans-serif
.character__info
  display: flex
.character__info__img
  margin-right: 20px
.character__info__tx
  max-width: 400px
  font-family: "RobotoCondensed Bold", "Trebuchet MS", Helvetica,Arial, sans-serif
  h3
    margin-top: 0

@media (max-width: 1024px)
  .character
    padding-top: 40px
    padding-left: 250px
  .back-icon
    top: 36px
    left: 95px

@media (max-width: 475px)
  .character
    padding-left: 65px
    padding-top: 25px
  .back-icon
    top: 24px
    left: 0
  .character__info
    flex-direction: column
  .character__info__img
    display: flex
    justify-content: flex-start
    margin-right: 0
    margin-bottom: 30px
  .character__info__tx
    text-align: left

</style>