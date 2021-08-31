<template>
  <div class="flex-container background-color">
    <div class="inner-container full-width">
      <h3 class="title">Experiences</h3>
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
  background: #6b4422;
  color: white;
}
</style>
