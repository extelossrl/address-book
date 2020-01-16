<template>
  <b-field :label="label">
    <b-numberinput
      v-bind="$attrs"
      type="number"
      :value="value"
      @input="$emit('input', parseInt($event))"
    />
  </b-field>
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
