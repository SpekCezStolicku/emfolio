<template>
  <div class="viewContainer color">
    <div class="d-block">
      <h1 class="title">Education</h1>
      <Motto></Motto>
      <div class="flex">
        <div
          v-for="(time, index) in timelineItems.slice().reverse()"
          :key="index"
          class="timeline"
          :class="time.style"
        >
          <h1 class="numbers">{{ time.from }}</h1>
          <h3>{{ time.title }}</h3>
          <p>{{ time.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Motto from "@/components/education/Motto";

export default {
  name: "Education",
  components: {
    Motto,
  },
  data() {
    return {
      timelineItems: [
        {
          from: "3",
          title: "University, (2017 --> present)",
          description:
            "Private University of information technology in Bratislava. Field of study is Cyber security. ",
          style: "border-bottom",
        },
        {
          from: "2",
          title: "High school, (2010 - 2014)",
          description:
            "High school of Civil Engineering, Velka Okruzna in Zilina. Specialization in Construction Management.  ",
          style: "border-center",
        },
        {
          from: "1",
          title: "Primary school, (2000 - 2009)",
          description: "Primary school Gastanova in Zilina.",
          style: "border-bottom",
        },
      ],
    };
  },
};
</script>

<style scoped>
.color {
  background: #1f3828;
  color: snow;
  font-weight: normal;
}
.flex {
  display: flex;
  margin: 6%;
  padding: 0;
  justify-content: center;
}
p {
  font-size: 1.4em;
}
.timeline {
  width: 30%;
  padding: 3%;
}
.numbers {
  color: burlywood;
  width: 1.5em;
  border: burlywood solid 2px;
  border-radius: 50%;
  margin: 1% 5%;
}
.border-bottom {
  border-bottom: dotted 8px burlywood;
}
.border-center {
  border-top: dotted 8px burlywood;
  border-left: dotted 8px burlywood;
  border-right: dotted 8px burlywood;
}
.title {
  margin: 1em;
}
</style>
