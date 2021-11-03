<template>
  <div>
    <p>
      "Education is what remains after one has forgotten everything he learned
      in school"
    </p>
    <h3 class="right">Albert Einstein</h3>
  </div>
</template>

<script>
export default {
  name: "Motto",
};
</script>

<style scoped>
.right {
  text-align: right;
  margin-right: 25vw;
  margin-top: 1em;
  margin-bottom: 5vh;
}

p {
  font-size: 1.4em;
}
@media screen and (max-width: 1400px) {
  .right {
    font-size: 1.2em;
    margin: 1em 10%;
  }
  p {
    font-size: 0.9em;
  }
}
@media screen and (max-width: 1930px) {
  .right {
    font-size: 1.2em;
    margin: 1em 20vw;
  }
  p {
    font-size: 0.9em;
  }
}
</style>
