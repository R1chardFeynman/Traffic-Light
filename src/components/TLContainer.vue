<template>
  <div class="container">
    <TrafficLight
      v-for="color in colors"
      :counter="transitioning.counter"
      :key="color"
      :isActive="lights[color]"
      :color="color"
    />
    <TLTimer :counter="transitioning.counter" />
  </div>
</template>

<script>
import TrafficLight from "@/components/TrafficLight.vue";
import TLTimer from "@/components/TLTimer.vue";

const defaultLights = {
  red: false,
  yellow: false,
  green: false,
};

export default {
  name: "TLContainer",
  components: { TrafficLight, TLTimer },
  data() {
    return {
      lights: defaultLights,
      transitioning: {
        counter: 0,
        next: "",
        prev: "",
      },
      colors: ["red", "yellow", "green"],
    };
  },
  methods: {
    updateLights(color) {
      this.lights = { ...defaultLights, [color]: true };
    },
    updateTransitioning(color, prev) {
      const timerResolver = {
        red: 10,
        yellow: 3,
        green: 15,
      };
      const getNext = () => {
        if (color === "yellow") return prev === "green" ? "red" : "green";
        return "yellow";
      };

      this.transitioning = {
        ...this.transitioning,
        counter: timerResolver[color],
        next: getNext(),
        prev: prev,
      };
      console.log(this.transitioning);
    },
  },
  mounted() {
    const { currentColor, updateLights, updateTransitioning } = this;
    updateLights(currentColor);
    const prev = currentColor === "yellow" ? "red" : currentColor;
    updateTransitioning(currentColor, prev);
    // Since I'm not using Vuex in this project I'm forced to implement
    // state saving feature via the use of localStorage
    // otherwise I'd be using vuex-persistedstate
    if (localStorage.getItem("state")) {
      const { transitioning, lights, lastColor } = JSON.parse(
        localStorage.getItem("state")
      );
      this.$router.push(lastColor);
      this.transitioning = transitioning;
      this.lights = lights;
    }

    setInterval(() => {
      this.transitioning.counter--;
    }, 1000);
  },
  watch: {
    "transitioning.counter": function (val) {
      const localStorageState = {
        lights: this.lights,
        transitioning: this.transitioning,
        lastColor: this.currentColor,
      };
      localStorage.setItem("state", JSON.stringify(localStorageState));
      if (val === 0) {
        const {
          $router,
          transitioning: { next },
          currentColor,
        } = this;
        $router.push(`/${next}`);
        this.updateLights(next);
        this.updateTransitioning(next, currentColor);
      }
    },
  },
  computed: {
    currentColor() {
      const colorResolver = {
        "/red": "red",
        "/yellow": "yellow",
        "/green": "green",
      };
      const { path } = this.$route;
      return colorResolver[path];
    },
  },
};
</script>

<style scoped>
.container {
  box-sizing: border-box;
  margin: 0 auto;
  min-height: 220px;
  background-color: rgb(204, 200, 200);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  border-radius: 5px;
  flex-flow: column;
  border: 2px rgb(14, 6, 6) solid;
}
</style>
