<template>
  <li @click="$emit('click')">{{ primaryText }} - {{ secondaryText }}</li>
</template>

<script>
export default {
  props: {
    primaryText: {
      type: String,
      required: true
    },
    secondaryText: {
      type: String,
      required: true
    }
  }
};
</script>
