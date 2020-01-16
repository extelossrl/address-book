<template>
  <main-form>
    <text-input v-model="value.name" :label="$t('addressBook.fields.name')" />
    <text-input
      v-model="value.surname"
      :label="$t('addressBook.fields.surname')"
    />
    <text-input v-model="value.phone" :label="$t('addressBook.fields.phone')" />
    <number-input v-model="value.age" :label="$t('addressBook.fields.age')" />
    <main-button
      :text="$t('addressBook.save')"
      @click="$emit('saveData', value)"
    />
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
    }
  }
};
</script>
