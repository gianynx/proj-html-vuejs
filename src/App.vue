<template>
  <HeaderComponent v-for="(item, index) in navbarVoices" :key="index" :home="item.first_voice"
    :mission="item.second_voice" :causes="item.third_voice" :journal="item.fourth_voice" />
  <main>
    <section id="every_moment_counts">
      <EveryMomentCountsComponent />
    </section>
    <section id="our_values">
      <OurValuesComponent />
    </section>
  </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import EveryMomentCountsComponent from './components/EveryMomentCountsComponent.vue';
import OurValuesComponent from './components/OurValuesComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    EveryMomentCountsComponent,
    OurValuesComponent
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