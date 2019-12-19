<template>
  <b-button @click="$emit('click')" type="is-primary">{{ text }}</b-button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>
