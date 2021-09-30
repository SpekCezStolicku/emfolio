<template>
  <div class="flex-container background-color">
    <div class="inner-container">
      <h3 id="fromRight" class="title">software skills</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non
        risus ac leo posuere tincidunt non non massa. Nulla massa nibh,
        elementum quis lacinia
      </p>
      <div class="margin">
        <div class="space-between">
          <div v-for="(prog1, index) in softSkills" :key="index">
            <Progress
              :radius="60"
              :stroke-color="prog1.color"
              :strokeWidth="15"
              :transitionDuration="2000"
              :value="prog1.value"
            />
            <h4 :style="{ color: prog1.color }">{{ prog1.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from "easy-circular-progress/src/index.vue";

export default {
  name: "SoftSkills",
  components: {
    Progress,
  },
  data() {
    return {
      softSkills: [
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
.background-color {
  background-image: linear-gradient(to top, snow, snow, #2c3e50);
  color: #1f3038;
}

h4 {
  font-size: 1.5em;
  text-transform: lowercase;
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
