<template>
  <b-field :label="label" expanded>
    <b-input
      v-bind="$attrs"
      type="text"
      :value="value"
      @input="$emit('input', $event)"
    />
  </b-field>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    }
  }
};
</script>
