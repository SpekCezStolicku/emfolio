<template>
  <div id="app">
    <NavBar class="menu"></NavBar>
    <full-page id="fullpage" ref="fullpage" :options="options">
      <!--      SECTION HOME-->
      <div class="section">
        <IntroPage id="home"></IntroPage>
      </div>
      <!--      SECTION ABOUT-->
      <div id="section3" class="section">
        <About id="about"></About>
      </div>
      <!--     SECTION SKILLS -->
      <div class="section">
        <div class="slide">
          <Skills id="skills"></Skills>
        </div>
        <div class="slide">
          <SoftSkills></SoftSkills>
        </div>
      </div>
      <!--      SECTION EDUCATION-->
      <div class="section">
        <Education id="education"></Education>
      </div>
      <!--      SECTION EXPERIENCE-->
      <div class="section">
        <Experience id="experience"></Experience>
      </div>
    </full-page>
  </div>
</template>

<script>
import IntroPage from "@/components/Header/IntroPage";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Education from "@/components/education/Education";
import NavBar from "@/components/Header/NavBar";
import Experience from "@/components/experience/Experience";
import SoftSkills from "@/components/skills/SoftSkills";

export default {
  components: {
    Experience,
    IntroPage,
    About,
    Skills,
    Education,
    NavBar,
    SoftSkills,
  },
  data() {
    return {
      options: {
        slidesNavigation: true,
        navigation: true,
        scrollBar: false,
        anchors: ["slide1", "slide2", "slide3", "slide4", "slide5"],
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss">
@import "../src/assets/css/fonts.css";
@import "../src/assets/css/global.css";
@import "../src/assets/css/fullpage.css";
@import "../src/assets/css/vuetyper.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

#app {
  font-family: "Geogrotesque Stencil B Bd", cursive, "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: snow;

    &.router-link-exact-active {
      color: snow;
    }
  }

  a:hover {
    color: snow;
  }
}
</style>
