<template>
  <HeaderComponent v-for="(item, index) in navbarVoices" :key="index" :home="item.first_voice"
    :mission="item.second_voice" :causes="item.third_voice" :journal="item.fourth_voice" />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  data() {
    return {
      navbarVoices: [
        {
          first_voice: "Home",
          second_voice: "Mission",
          third_voice: "Causes",
          fourth_voice: "Journal"
        }
      ]
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'Montserrat', sans-serif;
}
</style>