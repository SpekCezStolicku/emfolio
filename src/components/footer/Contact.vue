<template>
  <div class="flex-container section-color">
    <div class="inner-container">
      <h3 class="title color-burlywood">Game over</h3>
      <vue-typer
        v-if="typerStatus"
        id="item"
        :erase-delay="250"
        :erase-on-complete="false"
        :repeat="0"
        :text="[
          `It seems like we reached the darkest side of this web.`,
          `And now is the time to say goodbye.`,
          `...no, wait! I know you just spent a lot of time for this. And now you feel the same emptiness as if your favorite series is ending.
           Let's pretend it's true. And I'll offer you one last thing. Deal with it wisely :-)`,
        ]"
        :typeDelay="45"
        caret-animation="smooth"
        class="vueTyper"
        erase-style="select-all"
      ></vue-typer>
      <div id="bottom" class="full-width d-flex margin-top">
        <div class="col t-a-right">
          <div
            v-for="(info, index) in contactData"
            :key="index"
            class="margin-top floating t-a-right"
          >
            <mdicon
              class="color-burlywood margin small-icons"
              :name="info.icon"
              size="2em"
            ></mdicon>
            <p>{{ info.text }}</p>
          </div>
          <div v-for="icon in icons" :key="icon.icon" class="div-icon">
            <a :href="icon.url" target="_blank">
              <mdicon :name="icon.icon" size="3em" class="md-icons"></mdicon>
            </a>
          </div>
        </div>
        <div class="col unique-border">
          <img
            src="../../assets/portrait.svg"
            alt="portrait"
            class="margin-image"
            width="450"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      typerStatus: false,
      contactData: [
        {
          icon: "card-account-details-outline",
          text: "Martin Možucha",
        },
        {
          icon: "cellphone",
          text: "0950 898 052",
        },
        {
          icon: "at",
          text: "mozucha@nucleit.sk",
        },
        {
          icon: "whatsapp",
          text: "0907 629 488",
        },
      ],
      icons: [
        {
          icon: "github",
          url: "https://github.com/SpekCezStolicku",
        },
        {
          icon: "linkedin",
          url: "",
        },
        {
          icon: "gmail",
          url: "mailto:martin.mozucha@gmail.com",
        },
      ],
    };
  },
  watch: {
    $route(from) {
      if (from.hash === "#slide8") {
        return (this.typerStatus = true);
      }
      return (this.typerStatus = false);
    },
  },
};
</script>

<style scoped>
.section-color {
  background: black;
}

.white-text {
  color: snow;
}
.col {
  width: 50%;
}
.unique-border {
  border-left: solid burlywood 3px;
}
.margin-top {
  margin-top: 4em;
}
.margin-image {
  margin: 4em 0;
}
h1 {
  font-size: 5em;
}
div {
  color: snow;
}
.margin {
  margin: 0 2em 0 20em;
}
.floating {
  display: flex;
  margin-right: 10em;
}
img {
  float: left;
  padding-left: 6em;
}
a,
a:visited {
  color: burlywood;
}
.div-icon {
  display: inline-flex !important;
  width: auto;
  margin: 4em 7em 1em 0em;
}
.t-a-right {
  justify-content: flex-end;
  text-align: right;
}
.vue-typer .custom.char.selected {
  background-color: burlywood;
}
.vue-typer .custom.caret {
  background-color: burlywood;
}
.d-flex {
  flex-wrap: nowrap;
}
@media screen and (max-width: 1930px) {
  img {
    width: 320px;
  }
  .d-flex {
    flex-wrap: nowrap;
  }
  .vueTyper {
    font-size: 1.1em;
  }
  .md-icons {
    font-size: 0.75em;
  }
}
@media screen and (max-width: 1500px) {
  img {
    width: 300px;
  }
  .md-icons {
    font-size: 0.7em;
  }
  .margin {
    margin: 0.5em;
    font-size: 0.5em;
  }
}
@media screen and (max-height: 730px) {
  .vueTyper,
  p {
    font-size: 1em;
  }
  .margin {
    margin: 0.5em;
    font-size: 0.5em;
  }
  .title {
    font-size: 2em;
  }
  .margin-top,
  .margin-image {
    margin-top: 2em;
  }
}
</style>
