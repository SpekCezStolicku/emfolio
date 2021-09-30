<template>
  <div class="navBanner">
    <a
      v-for="(anchor, index) in anchors"
      :key="index"
      :href="'#slide' + countIndex(index)"
      class="gsapAnime"
      @click="animeNav"
      >{{ anchor }}</a
    >
    <div class="border-top"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import gsap from "gsap";

export default {
  name: "NavBar",
  computed: {
    ...mapState(["anchors"]),
  },
  mounted() {
    gsap.from(".gsapAnime", {
      duration: 3,
      opacity: 0,
      scale: 0,
      stagger: {
        each: 0.2,
      },
    });
  },
  methods: {
    countIndex(val) {
      return val + 1;
    },
    animeNav() {
      gsap.fromTo(
        ".navBanner",
        {
          duration: 1,
          y: -100,
        },
        {
          duration: 1,
          delay: 0.5,
          y: 0,
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  position: relative;
  cursor: pointer;
  color: white;
  margin: auto;
  text-transform: uppercase;
  font-size: 1.2em;
  padding: 0.5em;
  text-decoration: none;
  z-index: 1002;
}

a:hover {
  content: attr(data-text);
  color: burlywood;
  transition: all 0.4s linear;
}

.navBanner {
  position: fixed;
  height: 10%;
  left: 50%;
  top: 1%;
  transform: translate(-50%);
  z-index: 1000;
}

.border-top {
  position: relative;
}

.border-top:before {
  content: "";
  position: absolute;
  left: 0;
  top: 1%;
  bottom: 0;
  width: 0;
  border-bottom: solid 2px burlywood;
  animation: border_anim 2s linear forwards;
}

@keyframes border_anim {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@for $i from 1 through 5 {
  .fp-viewing-slide#{$i} a:nth-child(#{$i}) {
    color: burlywood;
  }
}
</style>
