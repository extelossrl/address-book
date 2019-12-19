<template>
  <label
    >{{ label }}
    <input
      type="number"
      :value="value"
      @input="$emit('input', parseInt($event.target.value))"
    />
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ""
    }
  }
};
</script>
