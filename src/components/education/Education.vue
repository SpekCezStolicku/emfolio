<template>
  <div class="flex-container background-color">
    <div>
      <h1 class="title">Education</h1>
      <Motto class="motto" />
      <div class="flex-card">
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
          title: "University, (2017 --> 2020)",
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
.background-color {
  background: #1f3828;
  background-image: url("../../assets/noise.png");
  color: snow;
}
.flex-card {
  display: flex;
  margin: 6%;
  padding: 0;
  justify-content: center;
}
.timeline {
  width: 30%;
  padding: 3%;
}
.numbers {
  color: burlywood;
  width: 1.4em;
  border: burlywood solid 2px;
  border-radius: 50%;
  margin: 1% 5%;
}
.border-bottom {
  border-bottom: dotted 10px burlywood;
}
.border-center {
  border-top: dotted 10px burlywood;
  border-left: dotted 10px burlywood;
  border-right: dotted 10px burlywood;
}
.title {
  margin: 1em;
}
h3 {
  font-size: 1.8em;
}
p {
  font-size: 1.3em;
}
@media screen and (max-width: 1930px) {
  .motto {
    width: 70%;
    margin: auto;
  }
  p {
    font-size: 1.1em;
  }
  .numbers {
    font-size: 1.2em;
  }
  h3 {
    font-size: 1.3em;
  }
  .border-bottom {
    border-bottom: dotted 8px burlywood;
  }
  .border-center {
    border-top: dotted 8px burlywood;
    border-left: dotted 8px burlywood;
    border-right: dotted 8px burlywood;
  }
}
@media screen and (max-width: 1400px) {
  .motto {
    width: auto;
    margin: auto;
  }
  p {
    font-size: 0.8em;
  }
  .numbers {
    font-size: 0.8em;
  }
  .border-bottom {
    border-bottom: dotted 5px burlywood;
  }
  .border-center {
    border-top: dotted 5px burlywood;
    border-left: dotted 5px burlywood;
    border-right: dotted 5px burlywood;
  }
  h3 {
    font-size: 1.2em;
  }
}
</style>
