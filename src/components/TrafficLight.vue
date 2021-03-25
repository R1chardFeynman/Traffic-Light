<template>
  <div :class="['colorContainer', color, { isBlinking, isActive }]"></div>
</template>

<script>
export default {
  name: "TrafficLight",
  props: ["color", "isActive", "counter"],
  computed: {
    isBlinking() {
      return this.counter <= 3 ? true : false;
    },
  },
};
</script>

<style>
/* Styles are not scoped because keyframes animations do not work otherwise (couldn't find solution, therefore leaving it unscoped) */
.colorContainer {
  width: 40px;
  height: 40px;
  border-radius: 100px;
}

.red {
  background-color: rgb(241, 6, 6);
  opacity: 0.2;
  transition: opacity 0.2s;
}

.green {
  background-color: rgb(0, 255, 0);
  opacity: 0.2;
  transition: opacity 0.2s;
}

.yellow {
  background-color: rgb(239 255 0);
  opacity: 0.2;
  transition: opacity 0.2s;
}

.isActive {
  opacity: 1;
}

.isActive.isBlinking {
  animation: isBlinking 0.5s infinite alternate ease-in;
}

@keyframes isBlinking {
  from {
    opacity: 1;
  }

  to {
    opacity: 0.2;
  }
}
</style>
