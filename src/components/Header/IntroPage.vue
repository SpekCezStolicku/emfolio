<template>
  <div class="anime-container-background">
    <div class="vanta" ref="vantaElement"></div>
    <div class="center-card">
      <h1 class="transition-text">
        Hello friend, <br />
        my name is Martin
      </h1>
      <h3 class="subtitle">frontend developer and graphic designer</h3>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.halo.min";
import gsap from "gsap";

export default {
  name: "IntroPage",
  data() {
    return {
      vantaEffect: null,
      options: {
        mouseControls: true,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        baseColor: 0x294690,
        backgroundColor: 0x0,
        amplitudeFactor: 0.8,
        xOffset: -0.26,
        size: 0.5,
      },
    };
  },
  methods: {
    setVanta() {
      console.log("Initializing Vanta...");
      try {
        if (this.$refs.vantaElement || !this.vantaEffect) {
          this.vantaEffect = WAVES({
            el: this.$refs.vantaElement,
            THREE,
            ...this.options,
            onRender: () => console.log("Vanta is rendering..."),
          });
        }
      } catch (error) {
        console.error("Error initializing Vanta:", error);
      }
    },
    updateSize() {
      this.options.minHeight = window.innerHeight;
      this.options.minWidth = window.innerWidth;
      if (this.vantaEffect) {
        this.vantaEffect.resize();
      }
    },
  },
  mounted() {
    this.setVanta();
    gsap.from(".transition-text", {
      duration: 2,
      opacity: 0,
      x: -1000,
      ease: "back",
    });
    window.addEventListener("resize", this.updateSize);
  },
  beforeDestroy() {
    if (this.vantaEffect) this.vantaEffect.destroy();
    window.removeEventListener("resize", this.updateSize);
  },
};
</script>

<style scoped>
.anime-container-background {
  width: 100%;
  height: 100%;
  z-index: -2;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}

h1 {
  color: snow;
  text-transform: uppercase;
  font-size: 4em;
}

.vanta {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

h3 {
  color: #deb887;
  font-weight: normal;
  font-size: 1.85em;
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
    width: 33ch;
    filter: blur(0px);
  }
}

.transition-text {
  color: transparent;
  background-image: linear-gradient(to left, white, burlywood);
  -webkit-background-clip: text;
  background-clip: text;
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

.center-card {
  position: absolute;
}
@media screen and (max-width: 1400px) {
  h1 {
    font-size: 3em;
  }
  h3 {
    font-size: 1.5em;
  }
}
@media screen and (max-width: 1930px) {
  h1 {
    font-size: 3.5em;
  }
  h3 {
    font-size: 1.7em;
  }
}
@media screen and (max-height: 730px) {
  h1 {
    font-size: 2.5em;
  }
  h3 {
    font-size: 1.2em;
  }
}
</style>
