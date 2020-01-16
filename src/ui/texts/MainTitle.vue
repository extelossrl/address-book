<template>
  <h1 class="title">{{ text }}</h1>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>
