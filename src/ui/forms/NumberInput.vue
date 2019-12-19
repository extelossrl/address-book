<template>
  <label
    >{{ label }}
    <input
      v-bind="$attrs"
      type="number"
      :value="value"
      @input="$emit('input', parseInt($event.target.value))"
    />
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
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
