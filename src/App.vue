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
    <section id="recent_causes">
      <RecentCausesComponent v-for="(image, index) in recentCausesImages" :key="index" :first_image="image.first_image"
        :second_image="image.second_image" :third_image="image.third_image" :fourth_image="image.fourth_image" />
    </section>
    <section id="latest_articles">
      <LatestArticlesComponent />
    </section>
  </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import EveryMomentCountsComponent from './components/EveryMomentCountsComponent.vue';
import OurValuesComponent from './components/OurValuesComponent.vue';
import RecentCausesComponent from './components/RecentCausesComponent.vue';
import LatestArticlesComponent from './components/LatestArticlesComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    EveryMomentCountsComponent,
    OurValuesComponent,
    RecentCausesComponent,
    LatestArticlesComponent
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
      ],
      recentCausesImages: [
        {
          first_image: '/images/recent_causes_1.png/',
          second_image: '/images/recent_causes_2.png/',
          third_image: '/images/recent_causes_3.png/',
          fourth_image: '/images/recent_causes_4.png/'
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