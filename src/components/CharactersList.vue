<template>
  <div class="list-wrapper">
    <ul v-if="characters.length" class="characters-list">
      <li v-for="item in characters" :key="item.id" class="characters-list__item" title="Узнать подробнее">
        <router-link :to="{ name: 'Character', params: {id: item.id} }">{{ item.name }}</router-link>
      </li>
    </ul>
    <div v-else-if="!isLoading">
      <div>Произошла ошибка :(</div>
      <div>Пожалуйста, попробуйте повторить запрос позже</div>
    </div>
    <dot-loader v-if="isLoading" :loading="isLoading" :color="'#fc3903'" :size="'26px'"></dot-loader>
    <button
      class="more-characters-btn"
      title="Загрузить больше персонажей"
      @click="getCharacters">
      Показать еще
    </button>
  </div>
</template>

<script>

import DotLoader from 'vue-spinner/src/PulseLoader.vue'
import { privateKey, publicKey } from '../marvel';
import axios from 'axios';

export default {
  name: 'CharactersList',
  components: {
    DotLoader
  },
  data () {
    return {
      isLoading: true,
      characters: [],
      charactersShown: 0
    }
  },
  created () {
    this.getCharacters();
  },
  methods: {
    getCharacters () {
      this.isLoading = true;

      axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&offset=${this.charactersShown}&limit=10`)
        .then((response) => {
          const data = response.data.data.results;
          data.forEach((item) => {
            this.characters.push(item);
          })
          this.isLoading = false;
          this.charactersShown += 10;
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    }
  }
}
</script>

<style lang="sass">

.list-wrapper
  position: relative
.v-spinner
  position: absolute
  bottom: -50px
  left: 40px
.characters-list
  display: flex
  flex-direction: column
  align-items: flex-start
  max-width: max-content
  list-style: none
  &__item
    display: inline-block
    margin-bottom: 20px
    cursor: pointer
    a 
      color: #fff
      text-decoration: none
      transition: ease .3s
      &:hover
        color: #fc3903
.more-characters-btn
  position: fixed
  right: 450px
  top: 50%
  transform: translateY(-50%)
  padding: 10px 20px 12px
  background: #fc3903
  color: #fff
  border-color: #fc3903
  border-radius: 5px
  border-style: none
  cursor: pointer
  font: 400 20px "RobotoCondensed Bold", "Trebuchet MS", Helvetica,Arial, sans-serif
  opacity: .9
  transition: ease .3s
  &:hover
    opacity: 1

</style>