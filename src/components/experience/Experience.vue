<template>
  <div class="viewContainer color">
    <div class="d-block full-width">
      <h1 class="title">Experiences</h1>
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
  }
};
</script>

<style scoped>
.color {
  background-image: linear-gradient(to top, burlywood, #1f3828);
  color: white;
}
</style>
