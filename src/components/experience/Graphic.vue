<template>
  <div>
    <h1 class="subtitle burlywood">in graphic</h1>
    <p>
      I'm glad you visited this section. If you think some logos are the same,
      you're right. The only difference is in the hours of creation.
    </p>
    <div class="flex-card d-flex">
      <img
        v-for="(image, index) in images"
        :key="index"
        :alt="image.alt"
        :src="image.src"
        width="220"
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
  mounted() {
    window.localStorage.setItem("storeData", this.images);
  },
};
</script>

<style scoped>
img {
  margin: 4em 3em;
  filter: brightness(0.3) opacity(0.8);
  transition: all 600ms ease;
}

img:hover {
  filter: brightness(1) opacity(1);
  transform: scale(1.1, 1.1);
}

.flex-card {
  display: flex;
  justify-content: center !important;
}

p {
  margin: 1em 5em;
}
@media screen and (max-width: 1930px) {
  h1 {
    font-size: 1.4em;
  }
  img {
    width: 12em;
    margin: 2em;
  }
}
@media screen and (max-width: 1400px) {
  img {
    width: 8em;
  }
  .d-flex {
    justify-content: space-between;
  }
}
</style>
