<template>
  <h1 class="subtitle">{{ text }}</h1>
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
