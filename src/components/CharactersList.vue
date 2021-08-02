<template>
  <div>
    <ul v-if="characters.length && !isLoading" class="characters-list">
      <li v-for="item in characters" :key="item.id" class="characters-list__item" title="Узнать подробнее">{{ item.name }}</li>
    </ul>
    <div v-else-if="!isLoading">
      <div>Произошла ошибка :(</div>
      <div>Пожалуйста, попробуйте повторить запрос позже</div>
    </div>
    <div v-else>Loading...</div>
    <button class="more-characters-btn">Показать еще</button>
  </div>
</template>

<script>
import { privateKey, publicKey } from '../marvel';
import axios from 'axios';

export default {
  name: 'CharactersList',
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
      axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&offset=${this.charactersShown}&limit=10`)
        .then((response) => {
          const data = response.data.data.results;
          data.forEach((item) => {
            this.characters.push(item);
          })
          this.isLoading = false;
          this.charactersShown += 10;
          console.log(this.characters);
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

.characters-list
  display: flex
  flex-direction: column
  align-items: center
  max-width: 800px
  list-style: none
  &__item
    display: inline-block
    margin-bottom: 20px
    cursor: pointer
.more-characters-btn
  cursor: pointer

</style>