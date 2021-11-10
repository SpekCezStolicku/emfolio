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
          <div>
            <Skills id="skills" />
          </div>
        </div>
        <div class="slide">
          <div>
            <SoftSkills />
          </div>
        </div>
      </div>
      <!--      SECTION EDUCATION-->
      <div class="section">
        <div>
          <Education id="education" />
        </div>
      </div>
      <!--      SECTION EXPERIENCE-->
      <div class="section">
        <div class="slide">
          <div>
            <Templates id="templates" />
          </div>
        </div>
        <div class="slide">
          <div>
            <Experience id="experience" />
          </div>
        </div>
      </div>
      <!--      SECTION HOBBY-->
      <div class="section">
        <div>
          <Hobby id="hobby" />
        </div>
      </div>
      <!--      SECTION REFERENCES-->
      <div class="section">
        <div>
          <References id="references" />
        </div>
      </div>
      <!--      SECTION CONTACT-->
      <div class="section">
        <div>
          <Contact id="contact" />
        </div>
      </div>
    </full-page>
    <SmallScreen id="small-screen" />
  </div>
</template>

<script>
import IntroPage from "@/components/Header/IntroPage";
import NavBar from "@/components/Header/NavBar";
import SmallScreen from "@/components/SmallScreen";

export default {
  components: {
    Experience: () => import("../src/components/experience/Experience.vue"),
    IntroPage,
    About: () => import("../src/components/about/About.vue"),
    Skills: () => import("../src/components/skills/Skills.vue"),
    Education: () => import("../src/components/education/Education.vue"),
    NavBar,
    SoftSkills: () => import("../src/components/skills/SoftSkills.vue"),
    Hobby: () => import("../src/components/hobby/Hobby.vue"),
    References: () => import("../src/components/footer/References.vue"),
    Contact: () => import("../src/components/footer/Contact.vue"),
    Templates: () => import("../src/components/experience/Templates.vue"),
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
  height: 100vh !important;
  width: 100vw !important;
  padding-bottom: 8%;
}
#silentbox-overlay__embed img,
#silentbox-overlay__embed iframe {
  position: absolute !important;
  width: 100vw !important;
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
@media screen and (max-width: 999px) {
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
@media screen and (max-height: 700px) {
  .menu {
    display: none;
  }
  #fullpage {
    display: none;
  }
  #fp-nav {
    display: none;
  }
  #small-screen {
    display: block;
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
