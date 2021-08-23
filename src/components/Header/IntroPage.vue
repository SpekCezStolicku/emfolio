<template>
  <div class="animeBg">
    <v-vanta class="pos" effect="waves" :options="options"> </v-vanta>
    <div class="card1">
      <h1 class="transitionText">
        Hello there, <br />
        my name is Martin
      </h1>
      <h3 class="subtitle">frontend developer and graphic designer</h3>
    </div>
  </div>
</template>

<script>
import VVanta from "vue-vanta";
import gsap from "gsap";
export default {
  name: "IntroPage",
  components: {
    VVanta
  },
  data() {
    return {
      options: {
        mouseControls: true,
        touchControls: true,
        color: 0x4040e,
        scale: 1.0,
        scaleMobile: 1.0,
        shininess: 40,
        waveHeight: 40,
        waveSpeed: 0.3,
        zoom: 1.2,
      },
    };
  },
  methods: {
    updateSize() {
      this.options.minHeight = window.innerHeight;
      this.options.minWidth = window.innerWidth;
    },
  },
  mounted() {
    gsap.from(".transitionText", {
      duration: 2,
      opacity: 0,
      x: -1000,
      ease: "back",
    });
    window.addEventListener("resize", this.updateSize);
  },
  beforeDestroy: function () {
    window.removeEventListener("resize", this.updateSize);
  },
  beforeMount() {
    this.updateSize();
  },
  updated() {
    window.removeEventListener("resize", this.updateSize);
  },
  beforeUpdate() {
    window.addEventListener("resize", this.updateSize);
  },
};
</script>

<style scoped>
.animeBg {
  width: 100%;
  overflow: hidden;
  height: 100%;
  z-index: -2;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  width: 100%;
  height: auto;
  text-align: center;
  color: snow;
  text-transform: uppercase;
  font-size: 4em;
}
.pos {
  position: initial;
  width: 100%;
  z-index: -1;
  height: 100%;
}
h3 {
  color: burlywood;
  font-weight: normal;
  font-size: 1.85em;
  text-align: center;
  overflow: hidden;
  width: 0;
  white-space: nowrap;
  border-top: solid 2px burlywood;
  animation: type 2s steps(39) forwards;
  animation-delay: 2s;
}
@keyframes type {
  0% {
    width: 0;
    filter: blur(1px);
  }
  100% {
    width: 32ch;
    filter: blur(0px);
  }
}
.transitionText {
  color: transparent;
  background-image: linear-gradient(to left, white, burlywood);
  -webkit-background-clip: text;
  animation: animate 10s linear infinite;
  -webkit-background-size: 500%;
  background-size: 500%;
}
@keyframes animate {
  0% {
    background-position: 0 100%;
  }
  50% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 100%;
  }
}
span {
  color: snow;
  filter: blur(0);
}
.card1 {
  position: absolute;
}
</style>
