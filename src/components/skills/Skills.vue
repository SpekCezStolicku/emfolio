<template>
  <div class="viewContainer bg">
    <div class="cont text">
      <h2>programming skills</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non
        risus ac leo posuere tincidunt non non massa. Nulla massa nibh,
        elementum quis lacinia
      </p>
      <div class="margin">
        <ProgressSkill></ProgressSkill>
      </div>
      <div class="offsetTop">
        <p>...and familiar with</p>
        <div class="iconFlex">
          <mdicon
            class="icon"
            size="4em"
            v-for="icon in icons"
            :key="icon"
            :name="icon"
          />
        </div>
        <p>and who knows what else...</p>
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
      ],
    };
  },
};
</script>

<style scoped>
.bg {
  background-image: linear-gradient(to top, snow, snow, #2c3e50);
}
h3 {
  color: #1f3828;
  font-size: 2em;
}
h2 {
  color: #1f3038;
  font-size: 3em;
}
.text {
  display: block;
}
.offsetTop {
  margin-top: 100px;
}
.margin {
  margin: 8vh auto auto auto;
}
.icon {
  margin: 1em auto;
}
.iconFlex {
  width: 45%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-evenly;
}
</style>
