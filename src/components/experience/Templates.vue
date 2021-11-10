<template>
  <div class="flex-container background-color">
    <div class="inner-container full-width">
      <h3 class="title">Coding journey</h3>
      <p v-if="level1 < 1">
        Oh ye, finally! The serious part ahead. I really love this part, so let
        me introduce. There are some pictures below this text. You may have
        noticed that the web page does not appear when you click on it... See?
      </p>
      <div class="flex-card wrap" v-if="level1 < 1">
        <silent-box
          :gallery="images"
          class="image-style d-flex bottom-first-5"
        ></silent-box>
      </div>

      <div class="bottom-second-5" v-if="level1 < 1">
        <p class="margin-p">
          Ok! I know... You want to see at least one real project deployed on
          real internet. Technically, you are just staring at one. But ok. I
          will fulfill your wish. However, let's play the game first. There is a
          link at the end of this topic. This link randomly generates anchor of
          each project you found in the pictures above. Very similar to a
          roulette game. How many times should you click to open all projects?
          We will see...
          <a
            v-if="level1 < 1"
            href="https://nucleit.sk"
            target="_blank"
            @click="level1++"
            ><br />
            Click me</a
          >
        </p>
      </div>
      <p v-if="level1 === 1" class="level-p-style">
        Did you... really just open the hidden link? You're a nightmare of
        hackers. Luckily for you I am a good person. Don't be shy and click the
        link again.<a
          class="link-2"
          v-if="level1 < 2"
          href="https://nucleit.sk"
          target="_blank"
          @click="level1++"
          ><br />
          Click me</a
        >
      </p>
      <p class="level-p-style" v-if="level1 === 2">
        Hm... again? That's a pity. But it's reminds me old saying: "If I bought
        a cementery people would stop dying" Don't worry, it won't be your case.
        Go ahead and open the link again.
        <a
          class="link-2"
          v-if="level1 === 2"
          href="https://nucleit.sk"
          target="_blank"
          @click="level1++"
          ><br />
          Click me</a
        >
      </p>
      <p class="level-p-style" v-if="level1 >= 3">
        I have to admit, playing with you is fun. At least for me. Now you
        surely know that link is static. Sorry for that. As an excuse, I offer
        you this link, where you will find a real game. <br />
        <button>
          <a
            target="_blank"
            class="link-2 link-2-2"
            href="https://snake-game-speky.herokuapp.com/"
            >- Enjoy here -</a
          >
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Templates",
  data() {
    return {
      level1: 0,
      windowHeight: window.innerWidth,
      images: [
        {
          src: require("../../assets/exp/templates/coffeeShop.jpg"),

          thumbnail: require("../../assets/exp/templates/coffeeShop.jpg"),
          thumbnailWidth: window.innerHeight / 5,
        },
        {
          src: require("../../assets/exp/templates/nclt.jpg"),

          thumbnail: require("../../assets/exp/templates/nclt.jpg"),
          thumbnailWidth: window.innerHeight / 5,
        },
        {
          src: require("../../assets/exp/templates/rumana.jpg"),

          thumbnail: require("../../assets/exp/templates/rumana.jpg"),
          thumbnailWidth: window.innerHeight / 5,
        },
        {
          src: require("../../assets/exp/templates/TaS.jpg"),

          thumbnail: require("../../assets/exp/templates/TaS.jpg"),
          thumbnailWidth: window.innerHeight / 5,
        },
      ],
    };
  },
  watch: {
    windowHeight(newHeight, old) {
      console.log(newHeight, old);
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.images.forEach(
        (item) => (item.thumbnailWidth = window.innerHeight / 5)
      );
    },
  },
};
</script>

<style scoped>
.background-color {
  background: #3f1717;
  background-image: url("../../assets/noise.png");
  color: white;
}

.image-style {
  margin: 5em 0;
  transition: all ease-in 0.5s;
}
.margin-p {
  margin: 0 5em;
}
.inner-container {
  width: 100%;
}

.level-p-style {
  color: burlywood;
  border: burlywood dotted 5px;
  margin: 3em 7em;
  padding: 1em;
  transition: all 0.5s ease-in-out;
}

h3 {
  color: burlywood;
  margin-bottom: 0.5em;
}

a {
  color: burlywood;
  text-decoration: none;
  margin-top: 0.4em;
}
p {
  padding: 0 11%;
}

a:visited {
  color: burlywood;
}
button {
  margin-top: 3em;
  background: transparent;
  border: none;
}
.link-2 {
  color: snow !important;
  margin: 2em 0;
  font-size: 1em;
}
.link-2-2 {
  font-size: 1.7em !important;
}
.d-flex {
  align-content: center !important;
  align-items: center !important;
  justify-content: center !important;
}
@media screen and (max-width: 1930px) {
  p {
    font-size: 1em;
  }
}
</style>
