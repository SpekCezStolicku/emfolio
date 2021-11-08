<template>
  <div class="flex-container section-color">
    <div class="inner-container d-flex wrap">
      <h2 class="gsapTitle white-text">Hobby time</h2>
      <div class="d-flex wrap hobby-wrapper">
        <div class="hobby-container b-1 left">
          <h3 class="title color-burlywood">Sport</h3>
          <p class="white-text">
            I love them all. Without exception. So don't get tricked by my
            figure. Anyway, my most favorite sports are:
          </p>
          <div v-for="icon in sportIcons" :key="icon" class="d-flex d-inline-f">
            <mdicon
              class="white-text md-icons"
              size="4em"
              :name="icon"
            ></mdicon>
          </div>
        </div>
        <div class="hobby-container b-2 right">
          <h3 class="title color-burlywood">Digital world</h3>
          <p class="white-text">
            It has become appallingly obvious that our technology has exceeded
            our humanity. Therefore, everything related to the digital age
            fascinates me.
          </p>
          <div class="d-inline-f d-flex wrap">
            <img v-for="digi in digiIcons" :key="digi" :src="digi" alt="svg" />
          </div>
        </div>
        <div class="hobby-container b-3 left">
          <h3 class="title color-burlywood">Renewable energy sources</h3>
          <p class="white-text">
            Once you got a solar panel on a roof, energy is free. Once we
            convert our entire electricity grid to green and renewable energy,
            cost of living goes down.
          </p>
          <div class="d-inline-f d-flex wrap">
            <img
              v-for="solar in solarIcons"
              :key="solar"
              :src="solar"
              alt="svg"
              class="solar-img"
            />
          </div>
        </div>
        <div class="hobby-container b-4 right">
          <h3 class="title color-burlywood">The rest</h3>
          <p class="white-text">
            Playing chess? Well. Do you play the guitar? Great. Are you
            fascinated by Rubik's Cube? Well, in that case, we're the same.
          </p>
          <div class="d-inline-f d-flex wrap">
            <img v-for="rest in restIcons" :key="rest" :src="rest" alt="svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "Hobby",
  data() {
    return {
      typerStatus: false,
      sportIcons: ["soccer", "hockey-sticks"],
      digiIcons: [
        require("../../assets/svg/world.svg"),
        require("../../assets/svg/laptop.svg"),
        require("../../assets/svg/bulb.svg"),
      ],
      solarIcons: [
        require("../../assets/svg/sun.svg"),
        require("../../assets/svg/solar.svg"),
      ],
      restIcons: [
        require("../../assets/svg/chess.svg"),
        require("../../assets/svg/rubik.svg"),
        require("../../assets/svg/sudoku.svg"),
        require("../../assets/svg/guitar.svg"),
      ],
    };
  },
  watch: {
    $route(from) {
      if (from.hash === "#slide6") {
        gsap.from(".left", {
          duration: 0.5,
          opacity: 0,
          delay: 0.75,
          x: -800,
          ease: "none",
          display: "none",
        });
        gsap.from(".right", {
          duration: 0.5,
          delay: 0.75,
          x: 800,
          ease: "none",
          display: "none",
        });

        return (this.typerStatus = true);
      }
      return (this.typerStatus = false);
    },
  },
};
</script>

<style scoped>
.section-color {
  background: #1f3038;
  background-image: url("../../assets/noise.png");
}

.white-text {
  color: snow;
}
.hobby-container {
  display: inline-block;
  width: 49%;
  height: 38vh;
  min-height: 40%;

  text-align: center;
  align-content: center;
}
.gsapTitle {
  font-size: 5em;
  color: burlywood;
  position: absolute;
  background: #1f3038;
  background-image: url("../../assets/noise.png");
  padding: 0.2em;
  text-align: center;
  z-index: 10000;
}
.b-1 {
  border-right: solid burlywood;
  border-bottom: solid burlywood;
}
.b-2 {
  border-bottom: solid burlywood;
  border-left: solid burlywood;
}
.b-3 {
  border-right: solid burlywood;
  border-top: solid burlywood;
}
.b-4 {
  border-left: solid burlywood;
  border-top: solid burlywood;
}
h3 {
  font-size: 2.5em;
  margin-top: 2em;
}
p {
  margin: 0 3em;
}
img {
  width: 50px;
  margin: 2em 3em;
}
.solar-img {
  width: 80px;
}
@media screen and (max-width: 1930px) {
  img {
    width: 2.5em;
    margin: 0em 2em;
  }
  p {
    margin: 0 2em;
  }
  h3 {
    margin-top: 1em;
    font-size: 1.8em;
  }
  .gsapTitle {
    font-size: 3.25em;
  }
  .md-icons {
    font-size: 0.75em;
    margin: 0 1em;
  }
  .solar-img {
    width: 3.5em;
  }
}
@media screen and (max-width: 1300px) {
  .d-inline-f {
    margin: 2em;
  }
  .md-icons {
    font-size: 0.55em;
  }
  .solar-img {
    width: 2.8em;
  }
  img {
    width: 2.2em;
    margin: 0em 2em;
  }
}
@media screen and (max-width: 1190px) {
  .d-inline-f {
    margin: 1.8em;
  }
  .md-icons {
    font-size: 0.55em;
  }
  .solar-img {
    width: 2.5em;
  }
  img {
    width: 2em;
    margin: 0em 1.8em;
  }
  .gsapTitle {
    font-size: 2.5em;
  }
  .title {
    font-size: 1.6em;
  }
}
</style>
