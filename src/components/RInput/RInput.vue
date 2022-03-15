<script setup lang="ts">
import { onMounted } from "vue";
import { MDCTextField } from "@material/textfield";

onMounted(() => {
  new MDCTextField(document.querySelector(".mdc-text-field") as Element);
});

const props = defineProps({
  label: { type: String },
  value: { type: String },
});
</script>

<template>
  <label class="mdc-text-field mdc-text-field--filled">
    <span class="mdc-text-field__ripple"></span>
    <input
      type="text"
      class="mdc-text-field__input"
      aria-labelledby="my-label"
    />
    <span class="mdc-floating-label" id="my-label">{{ props.label }}</span>
    <span class="mdc-line-ripple">{{ props.value }}</span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "r-input",
});
</script>

<style lang="scss">
@import "@material/textfield/mdc-text-field";
</style>
