<template>
  <div class="flex-container background-color">
    <div class="inner-container">
      <h3 id="fromRight" class="title">programming skills</h3>
      <p id="opacity">
        Programming is a skill best acquired by practice and example rather than
        from books. Alan Turing once said. I've been using this method for a few
        years to skill. Primary interests are vue, nuxt, vite, node.js, css
        preprocessors and of course html. My personal goal is to raise every
        single skill to 100%
      </p>
      <div class="margin">
        <ProgressSkill :progress="progress" />
      </div>
      <div id="fromBottom-2" class="offsetTop">
        <p>...and familiar with</p>
        <div class="iconFlex">
          <mdicon
            v-for="icon in icons"
            :key="icon"
            :name="icon"
            class="icon"
            size="4em"
            >{{ icon }}
          </mdicon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressSkill from "@/components/skills/ProgressSkill";

export default {
  name: "Skills",
  components: {
    ProgressSkill,
  },
  data() {
    return {
      progress: [
        {
          name: "html",
          color: "#2C3E50",
          value: "95",
        },
        {
          name: "css/scss",
          color: "#1f3828",
          value: "85",
        },
        {
          name: "js/vue",
          color: "#1f3038",
          value: "60",
        },
        {
          name: "php",
          color: "#2c5039",
          value: "35",
        },
        {
          name: "c/c++",
          color: "#2f3350",
          value: "45",
        },
        {
          name: "arduino",
          color: "#1f3828",
          value: "50",
        },
      ],
      icons: [
        "language-html5",
        "language-css3",
        "angular",
        "nodejs",
        "vuejs",
        "vuetify",
        "bootstrap",
        "bulma",
        "github",
        "git",
        "gitlab",
        "language-java",
        "firebase",
        "stack-overflow",
        "language-php",
        "webpack",
        "npm",
        "linux",
        "microsoft-visual-studio-code",
        "google-ads",
        "wordpress",
        "sass",
      ],
    };
  },
};
</script>

<style scoped>
.background-color {
  background-image: linear-gradient(to top, snow, snow, #2c3e50);
  color: #1f3038;
}

.offsetTop {
  margin-top: 120px;
}

.margin {
  margin: 8vh auto auto auto;
}

.icon {
  margin: 1em 0.8em;
  filter: opacity(0.4);
}

.icon:hover {
  filter: opacity(1);
  transform: scale(1.1);
}

.iconFlex {
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
}

button {
  width: 100px;
}
@media screen and (max-width: 1930px) {
  .icon {
    font-size: 0.65em;
  }
  .offsetTop {
    margin-top: 70px;
  }
}
@media screen and (max-width: 1535px) {
  .icon {
    font-size: 0.6em;
  }
  .offsetTop {
    margin-top: 60px;
  }
  .iconFlex {
    width: 90%;
  }
}
</style>
