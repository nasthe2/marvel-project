<template>
  <div class="home">
    <CharactersList />
  </div>
</template>

<script>
import CharactersList from '@/components/CharactersList.vue'

export default {
  name: 'Home',
  components: {
    CharactersList
  }
}
</script>
