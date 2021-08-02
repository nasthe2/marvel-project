<template>
  <div>
    <ul v-if="characters.length" class="characters-list">
      <li v-for="item in characters" :key="item.id" class="characters-list__item">{{ item.name }}</li>
    </ul>
    <div v-else>Ни одного персонажа не загружено :(</div>
  </div>
</template>

<script>
import { privateKey, publicKey } from '../marvel';
import axios from 'axios';

export default {
  name: 'CharactersList',
  data () {
    return {
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
          this.charactersShown += 10;
          console.log(this.characters);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>

<style lang="sass">

</style>