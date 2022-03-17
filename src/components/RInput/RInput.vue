<template>
  <label class="mdc-text-field mdc-text-field--filled">
    <span class="mdc-text-field__ripple"></span>
    <span class="mdc-floating-label" id="my-label-id">Hint text</span>
    <input
      class="mdc-text-field__input"
      type="text"
      aria-labelledby="my-label-id"
    />
    <span class="mdc-line-ripple"></span>
  </label>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted } from "vue";
import { MDCTextField } from "@material/textfield";

onMounted(() => {
  new MDCTextField(
    document.querySelector(".mdc-text-field") as HTMLInputElement
  );
});
</script>

<script lang="ts">
export default defineComponent({
  name: "RInput",
});
</script>
