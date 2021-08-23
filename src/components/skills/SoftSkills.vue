<template>
  <div class="space-between">
    <div v-for="(prog1, index) in progress" :key="index">
      <Progress
        :transitionDuration="2000"
        :radius="60"
        :stroke-color="prog1.color"
        :strokeWidth="15"
        :value="prog1.value"
      />
      <h3 :style="{ color: prog1.color }">{{ prog1.name }}</h3>
    </div>
  </div>
</template>

<script>
import Progress from "easy-circular-progress/src/index.vue";
export default {
  name: "SoftSkills",
  components: {
    Progress
  },
  data() {
    return {
      progress: [
        {
          name: "Adobe Illustrator",
          color: "#2C3E50",
          value: "85",
        },
        {
          name: "Adobe Photoshop",
          color: "#1f3828",
          value: "65",
        },
        {
          name: "Autocad",
          color: "#1f3038",
          value: "100",
        },
        {
          name: "Sketchup",
          color: "#2c5039",
          value: "50",
        },
        {
          name: "After Effects",
          color: "#2f3350",
          value: "50",
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>