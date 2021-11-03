<template>
  <div class="flex-container section-color">
    <div class="inner-container">
      <h3 class="title burlywood">Some facts from third-party</h3>
      <hooper
        :autoPlay="true"
        :centerMode="true"
        :itemsToShow="1"
        :playSpeed="7000"
        :wheelControl="false"
        :infiniteScroll="true"
        :hoverPause="false"
      >
        <slide v-for="(motto, index) in mottos" :key="index">
          <div>
            <p>
              {{ motto.expression }}
            </p>
            <h3 class="right">- {{ motto.fromWho }} -</h3>
          </div>
        </slide>
      </hooper>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "References",
  data() {
    return {
      mottos: [
        {
          expression:
            "It is scary to think that people like you are allowed to vote.",
          fromWho: "Anonymous anti-vaxxer",
        },
        {
          expression: "Your face makes onions cry.",
          fromWho: "Ex-girlfriend",
        },
        {
          expression:
            "You are the best thing that ever happen to me. Right after family, friends and dog.",
          fromWho: "Girlfriend",
        },
        {
          expression:
            "You are pure disappointment, just like your father. But I love you anyway... someone has to.",
          fromWho: "Mom",
        },
        {
          expression:
            "When you were born, I was hoping you would make me a rich man. I'm modest now. Now all I want from you is to become independent.",
          fromWho: "Dad",
        },
        {
          expression:
            "You are fat, ugly and lazy man. Luckily, none of this interferes with our friendship.",
          fromWho: "Friends",
        },
        {
          expression: "The worst waiter I've ever hired.",
          fromWho: "Boss",
        },
      ],
    };
  },
  components: {
    Hooper,
    Slide,
  },
};
</script>

<style scoped>
.section-color {
  background: black;
  background-image: url("../../assets/noise.png");
}

.right {
  text-align: right;
  margin-right: 17vw;
  margin-top: 1em;
  margin-bottom: 5vh;
  color: burlywood;
  font-size: 1.9em;
}

p {
  padding-top: 3em;
  color: snow;
  margin: 0 10em;
}
@media screen and (max-width: 1930px) {
  .right {
    font-size: 1.5em;
  }
}
</style>
