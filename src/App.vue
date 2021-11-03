J
<template>
  <div id="app">
    <NavBar class="menu"></NavBar>
    <full-page id="fullpage" ref="fullpage" :options="options">
      <!--      SECTION HOME-->
      <div class="section">
        <IntroPage id="home" />
      </div>
      <!--      SECTION ABOUT-->
      <div id="section" class="section">
        <div>
          <About id="about" />
        </div>
      </div>
      <!--     SECTION SKILLS -->
      <div class="section">
        <div class="slide">
          <Skills id="skills" />
        </div>
        <div class="slide">
          <SoftSkills />
        </div>
      </div>
      <!--      SECTION EDUCATION-->
      <div class="section">
        <Education id="education" />
      </div>
      <!--      SECTION EXPERIENCE-->
      <div class="section">
        <div class="slide">
          <Templates id="templates" />
        </div>
        <div class="slide">
          <Experience id="experience" />
        </div>
      </div>
      <!--      SECTION HOBBY-->
      <div class="section">
        <Hobby id="hobby" />
      </div>
      <!--      SECTION REFERENCES-->
      <div class="section">
        <References id="references" />
      </div>
      <!--      SECTION CONTACT-->
      <div class="section">
        <Contact id="contact" />
      </div>
    </full-page>
    <SmallScreen id="small-screen" />
  </div>
</template>

<script>
import About from "@/components/about/About";
import IntroPage from "@/components/Header/IntroPage";
import Skills from "@/components/skills/Skills";
import Education from "@/components/education/Education";
import NavBar from "@/components/Header/NavBar";
import Experience from "@/components/experience/Experience";
import SoftSkills from "@/components/skills/SoftSkills";
import Hobby from "@/components/hobby/Hobby";
import References from "@/components/footer/References";
import Templates from "@/components/experience/Templates";
import Contact from "@/components/footer/Contact";
import SmallScreen from "@/components/SmallScreen";

export default {
  components: {
    Experience,
    IntroPage,
    About,
    Skills,
    Education,
    NavBar,
    SoftSkills,
    Hobby,
    References,
    Contact,
    Templates,
    SmallScreen,
  },
  data() {
    return {
      options: {
        slidesNavigation: true,
        navigation: true,
        scrollBar: false,
        anchors: [
          "slide1",
          "slide2",
          "slide3",
          "slide4",
          "slide5",
          "slide6",
          "slide7",
          "slide8",
        ],
      },
    };
  },
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
// LIGHTBOX STYLES

%variation {
  left: 10em !important;
}

#silentbox-overlay {
  background: rgba(0, 0, 0, 0.6);
}

.silentbox-item:nth-child(2),
.silentbox-item:nth-child(4) {
  align-self: flex-start !important;
  margin-bottom: 6em;
}
.silentbox-item:nth-child(1),
.silentbox-item:nth-child(3) {
  align-self: flex-end !important;
}

#silentbox-overlay__arrow-buttons .arrow-previous {
  @extend %variation;
}

#silentbox-overlay__arrow-buttons .arrow-next,
#silentbox-overlay__arrow-buttons .arrow-previous {
  display: none !important;
}

.silentbox-item {
  transform: rotate3d(1, -1, 1, 45deg);
  box-shadow: 15px 15px 0px rgba(222, 184, 135, 0.3);
  margin: 1em 3em;
  background: burlywood;
  filter: sepia(20%);
}
#silentbox-overlay {
  position: static !important;
  max-width: 100vw;
  max-height: 100vh;
}
#silentbox-overlay__embed img,
#silentbox-overlay__embed iframe {
  position: absolute !important;
  top: 0 !important;
  bottom: auto !important;
}

.silentbox-item:hover {
  transition: all 1s ease;
  filter: sepia(0%);
  box-shadow: 0px 0px 15px #222;
  transform: rotate3d(1, 11, 1, 0) scale(1.1);
}
@media screen and (min-width: 1000px) {
  #small-screen {
    display: none;
  }
}
@media screen and (max-width: 1000px) {
  .menu {
    display: none;
  }
  #fullpage {
    display: none;
  }
  #fp-nav {
    display: none;
  }
}
@media screen and (max-width: 1930px) {
  .silentbox-item {
    margin: 0.2em 2em;
  }
}
@media screen and (max-width: 1500px) {
  .silentbox-item:nth-child(2),
  .silentbox-item:nth-child(4) {
    margin-bottom: 0;
  }
  .silentbox-item {
    margin: 0.2em 0.5em;
  }
  .silentbox-item {
    margin: 0 2em;
  }
}
</style>
