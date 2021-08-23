<template>
  <div class="viewContainer about">
    <div class="cont">
      <div class="fullWidth">
        <h3 id="fromLeft" class="title underline-dots">keep it simple, life is fast</h3>
        <vue-typer
          class="vueTyper"
          :typeDelay="40"
          :repeat="0"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse"
        ></vue-typer>
        <div class="section1 intro space-between">
          <div v-for="card in personalCard" :key="card.id">
            <mdicon size="4em" :name="card.icon" />
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
      personalCard: [
        {
          id: "1",
          icon: "brain",
          title: "mindset",
          text: "#curious #creative #openness",
        },
        {
          id: "2",
          icon: "alert-circle-outline",
          title: "stress",
          text: "#avoider #supportive #analytical",
        },
        {
          id: "3",
          icon: "heart-outline",
          title: "nature",
          text: "#extrovert #optimist #tolerant",
        },
      ],
    };
  },
};
</script>

<style scoped>
.about {
  background-color: #2c3e50;
  color: snow;
}
.section1 {
  display: flex;
  margin-top: 10vh;
}
#fromLeft {
  left: -130%;
}
.fullWidth {
  width: 100%;
}
</style>
