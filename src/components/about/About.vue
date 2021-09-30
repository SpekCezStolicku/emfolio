<template>
  <div class="flex-container section-color">
    <div class="inner-container">
      <div class="full-width">
        <h3 id="fromLeft" class="title underline-dots">
          keep it simple, life is fast
        </h3>
        <vue-typer
          :key="reload"
          :repeat="0"
          :typeDelay="20"
          class="vueTyper"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse"
        ></vue-typer>
        <div class="section1 intro space-between">
          <div v-for="card in personalCard" :key="card.id">
            <mdicon :name="card.icon" size="4em" />
            <h3>{{ card.title }}</h3>
            <p>{{ card.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      reload: 0,
      personalCard: [
        {
          id: "1",
          icon: "brain",
          title: "mindset",
          text: "#curious #creative #openness"
        },
        {
          id: "2",
          icon: "alert-circle-outline",
          title: "stress",
          text: "#avoider #supportive #analytical"
        },
        {
          id: "3",
          icon: "heart-outline",
          title: "nature",
          text: "#extrovert #optimist #tolerant"
        }
      ]
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    }
  }
};
</script>

<style scoped>
.section-color {
  background-color: #2c3e50;
  color: snow;
}

.section1 {
  display: flex;
  margin-top: 10%;
}
</style>
