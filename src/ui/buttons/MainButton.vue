<template>
  <b-field>
    <b-button @click="$emit('click')" type="is-primary">{{ text }}</b-button>
  </b-field>
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
