<template>
  <div class="flex-container background-color">
    <div class="inner-container full-width">
      <h3 class="title">Experience</h3>
      <Graphic></Graphic>
    </div>
  </div>
</template>

<script>
import Graphic from "@/components/experience/Graphic";

export default {
  name: "Experience",
  components: {
    Graphic,
  },
};
</script>

<style scoped>
.background-color {
  background: #3d3d3d;
  background-image: url("../../assets/noise.png");
  color: white;
}

div.fp-controlArrow.fp-next {
  border: 3px solid burlywood;
}
</style>
