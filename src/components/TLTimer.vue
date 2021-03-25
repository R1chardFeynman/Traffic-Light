<template>
  <div class="timer">{{ counter }}</div>
</template>

<script>
export default {
  name: "TLTimer",
  props: ["counter"],
};
</script>

<style scoped>
.timer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  border: 1px rgb(48, 158, 158) solid;
  background-color: rgb(113, 233, 233);
  opacity: 0.9;
  border-radius: 5px;
}
</style>
