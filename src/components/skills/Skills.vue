<template>
  <div class="flex-container background-color">
    <div class="inner-container">
      <h3 class="title">programming skills</h3>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  components: {
    ProgressSkill: () => import("@/components/skills/ProgressSkill"),
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
  margin: 1em auto;
  filter: opacity(0.4);
}
.icon:hover {
  filter: opacity(1);
  transform: scale(1.1);
}
.iconFlex {
  width: 45%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
}

button {
  width: 100px;
}
</style>
