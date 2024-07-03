<template>
  <div class="flex-container background-color">
    <div class="inner-container full-width">
      <h3 class="title">Coding journey</h3>
      <div>
        <p>
          I will be serious for a moment because a bit of seriousness doesn’t
          hurt. I have primarily been developing in Vue.js and Nuxt.js with
          TypeScript since 2019. I have worked on various large and small
          projects where I have regularly improved my skills in:
        </p>
        <ul>
          <li v-for="item in skills" :key="item.index">{{ item }}</li>
        </ul>
        <p>
          Check out my latest project
          <a target="_blank" href="https://spekcezstolicku.github.io/snakeGame/"
            >-here-</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Templates",
  data() {
    return {
      skills: [
        "Project setup, configuration, testing, version control using Docker, Git, GitLab, GitHub,...",
        "In-depth speed and SEO optimizations on both the server side and client side",
        "Code sustainability, reviews, documentation, e2e and unit testing, project migrations",
        "Creating custom npm libraries",
        "Deploying projects to production on both static and dynamic servers",
      ],
      level1: 0,
      windowHeight: window.innerWidth,
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
li {
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  color: burlywood;
  font-size: 1.3em;
  margin: 20px 25%;
  text-align: start;
}
ul {
  margin: 3em auto;
}
</style>
