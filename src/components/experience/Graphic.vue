<template>
  <div>
    <h1 class="subtitle burlywood">in graphic</h1>
    <div>
      <img v-for="(image, index) in images" :key="index"
        :src="image.src"
        width="220"
        :alt="image.alt"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Graphic",
  data() {
    return {
      images: [
        {
          src: require("../../assets/exp/logos/soccerSociety1.svg"),
          alt: 1
        },
        {
          src: require("../../assets/exp/logos/soccerSociety2.svg"),
          alt: 2
        },
        {
          src: require("../../assets/exp/logos/sportify.svg"),
          alt: 3
        },
        {
          src: require("../../assets/exp/logos/TaS.svg"),
          alt: 4
        }
      ]
    }
  }
};
</script>

<style scoped>
img {
  margin: 2.5%;
}
</style>
