<template>
  <main-form>
    <text-input v-model="value.name" label="name" :disabled="!editEnabled" />
    <text-input
      v-model="value.surname"
      label="surname"
      :disabled="!editEnabled"
    />
    <number-input v-model="value.age" label="age" :disabled="!editEnabled" />
    <main-button v-if="!editEnabled" text="edit" @click="changeEnabled" />
    <main-button v-else text="save" @click="updateAction" />
  </main-form>
</template>

<script>
import MainForm from "@/ui/forms/MainForm.vue";
import TextInput from "@/ui/forms/TextInput.vue";
import NumberInput from "@/ui/forms/NumberInput.vue";
import MainButton from "@/ui/buttons/MainButton.vue";

export default {
  components: {
    MainForm,
    TextInput,
    NumberInput,
    MainButton
  },
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    successful: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editEnabled: false
    };
  },
  methods: {
    changeEnabled() {
      this.editEnabled = !this.editEnabled;
    },
    async updateAction() {
      this.$emit("updateContact", this.value);
    }
  },
  watch: {
    successful: {
      handler(newval, oldval) {
        console.log({ oldval, newval });
        if (oldval === false && newval === true) {
          this.changeEnabled();
        }
      }
    }
  }
};
</script>
