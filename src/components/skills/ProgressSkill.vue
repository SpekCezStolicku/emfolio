<template>
  <div class="space-between">
    <div v-for="(prog, index) in progress" :key="index">
      <Progress
        class="progress"
        v-if="typerStatus"
        :radius="radius"
        :stroke-color="prog.color"
        :strokeWidth="stroke"
        :transitionDuration="3000"
        :value="prog.value"
      >
        <div class="content">{{ prog.value }}%</div></Progress
      >
      <h4 class="content" :style="{ color: prog.color }">{{ prog.name }}</h4>
    </div>
  </div>
</template>

<script>
import Progress from "easy-circular-progress/src/index.vue";

export default {
  name: "ProgressSkill",
  components: {
    Progress,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      circle: 60,
      typerStatus: false,
    };
  },
  props: {
    progress: {
      type: Array,
    },
  },
  watch: {
    $route(from) {
      if (from.hash === "#slide3" || from.hash === "#slide3/1") {
        return (this.typerStatus = true);
      }
      return (this.typerStatus = false);
    },
  },
  mounted() {
    window.onresize = () => (this.windowWidth = window.innerWidth);
    window.addEventListener("resize", this.resize);
  },
  beforeDestroy: function () {
    window.removeEventListener("resize", this.resize);
  },
  methods: {
    resize() {
      this.windowWidth = window.innerWidth;
    },
  },
  computed: {
    radius() {
      if (this.windowWidth <= 1930) {
        return 45;
      } else if (this.windowWidth <= 1400) {
        return 35;
      }
      return 60;
    },
    stroke() {
      if (this.windowWidth <= 1930) {
        return 8;
      } else if (this.windowWidth <= 1400) {
        return 6;
      }
      return 13;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~easy-circular-progress/src/index";
.content {
  font-size: 1.7em !important;
}
@media screen and (max-width: 1930px) {
  .content {
    font-size: 1.3em !important;
  }
}
</style>
