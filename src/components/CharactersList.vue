<template>
  <div class="list-wrapper">
    <ul v-if="characters.length" class="characters-list">
      <li v-for="item in characters" :key="item.id" class="characters-list__item" title="Узнать подробнее">
        <router-link :to="{ name: 'Character', params: {id: item.id} }">{{ item.name }}</router-link>
      </li>
    </ul>
    <div v-if="!isLoading && error" class="characters-list__error">
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

import { mapState } from 'vuex';
import { privateKey, publicKey } from '../marvel';
import axios from 'axios';

export default {
  name: 'CharactersList',
  components: {
    DotLoader
  },
  data () {
    return {
      isLoading: false,
      error: false
    }
  },
  computed: {
    ...mapState({
      characters: state => state.characters
    })
  },
  created () {
    if (!this.characters.length) {
      this.getCharacters();
    }
  },
  updated () {
    if (!this.isLoading && this.characters.length) {
      this.scrollToLast();
    }
  },
  methods: {
    getCharacters () {
      this.error = false;
      this.isLoading = true;

      axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&offset=${this.characters.length}&limit=10`)
        .then((response) => {
          this.isLoading = false;
          this.error = false;

          const data = response.data.data.results;
          const characters = [];
          data.forEach((item) => {
            characters.push(item);
          })

          this.$store.commit('SET_CHARACTERS', characters);
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = true;
          console.log(error);
        });
    },
    scrollToLast () {
      if (this.$el.querySelector('.characters-list')) {
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
      }
    }
  }
}
</script>

<style lang="sass">

.list-wrapper
  position: relative
.v-spinner,
.characters-list__error
  position: absolute
  bottom: -50px
  left: 40px
.characters-list__error
  div
    text-align: left
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
  right: 400px
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