<template>
  <div>
    <h1 class="subtitle burlywood">in graphic</h1>
    <div class="flex-card">
      <img
        v-for="(image, index) in images"
        :key="index"
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
          alt: 1,
        },
        {
          src: require("../../assets/exp/logos/nucleit.svg"),
          alt: "nucleit",
        },
        {
          src: require("../../assets/exp/logos/soccerSociety2.svg"),
          alt: 3,
        },
        {
          src: require("../../assets/exp/logos/sportify.svg"),
          alt: 4,
        },
        {
          src: require("../../assets/exp/logos/TaS.svg"),
          alt: 5,
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  margin-top: 4em;
  filter: brightness(0.3) opacity(0.8);
  transition: all 600ms ease;
}
img:hover {
  filter: brightness(1) opacity(1);
  transform: scale(1.1, 1.1);
}
.flex-card {
  display: flex;
  justify-content: space-between;
}
</style>
