<template>
  <div class="space-between">
    <div v-for="(prog, index) in progress" :key="index">
      <Progress
        :transitionDuration="2000"
        :radius="60"
        :stroke-color="prog.color"
        :strokeWidth="15"
        :value="prog.value"
      />
      <h2 :style="{ color: prog.color }">{{ prog.name }}</h2>
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
    };
  },
};
</script>

<style scoped></style>
