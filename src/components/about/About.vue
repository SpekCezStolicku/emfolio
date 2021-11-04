<template>
  <div class="flex-container section-color">
    <div class="inner-container">
      <div class="full-width">
        <h3 class="title underline-dots bottom-about">
          experiment called my life
        </h3>
        <div>
          <vue-typer
            v-if="typerStatus"
            id="item"
            :repeat="0"
            :typeDelay="50"
            :pre-erase-delay="2000"
            :erase-delay="250"
            erase-style="select-all"
            :erase-on-complete="true"
            class="vueTyper"
            :text="[
              `Do you like the stories?`,
              `It doesn't matter, I'll tell you one anyway.`,
            ]"
          ></vue-typer>
          <p class="white-text bottom-about">
            My childhood was quite happy. My parents kept me right after birth,
            which was a good precondition for a quality background. Thanks to
            that, I was able to successfully finish primary school. Why do I
            even mention it? Because elementary school gave me the best
            practical experience. For example, never go to the office alone with
            the janitor or how to properly hide lunch. Oh... those nineties. But
            let's go to the present. I'll tell you the rest of the story one
            day. Now make yourself comfortable and enjoy this presentation.
          </p>
        </div>
        <div class="section1 intro space-between bottom-about-after">
          <div
            v-for="(card, index) in personalCard"
            :key="index"
            class="icon-container"
          >
            <mdicon class="icon" :name="card.icon" size="4em" />
            <h3 class="icon-title">{{ card.title }}</h3>
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
      typerStatus: false,
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
  watch: {
    $route(from) {
      if (from.hash === "#slide2") {
        return (this.typerStatus = true);
      }
      return (this.typerStatus = false);
    },
  },
};
</script>

<style scoped>
div {
  transition: all 0.9s ease;
}

.section-color {
  background-color: #2c3e50;
  background-image: url("../../assets/noise.png");
  color: snow;
}

.section1 {
  display: flex;
  margin-top: 10%;
}
.white-text {
  margin-top: 0.5em;
}

@media screen and (max-width: 1930px) {
  .vueTyper,
  p {
    font-size: 1.1em;
  }
  .title {
    font-size: 2.3em;
  }
  .icon-title {
    font-size: 1.5em;
  }
  .icon {
    font-size: 0.8em;
  }
  .inner-container {
    width: 75%;
  }
}
@media screen and (max-width: 1450px) {
  .inner-container {
    width: 85%;
  }
  .icon-container {
    margin: 0 1em;
  }
}
</style>
