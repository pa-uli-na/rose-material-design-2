<script setup lang="ts">
import { onMounted } from "vue";
import { MDCRipple } from "@material/ripple";

onMounted(() => {
  new MDCRipple(document.querySelector(".mdc-button") as Element);
});

const props = defineProps({
  label: { type: String },
  value: { type: String },
});
</script>

<template>
  <button class="mdc-button foo-button">
    <div class="mdc-button__ripple"></div>
    <span class="mdc-button__label">{{ props.label }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "r-button",
});
</script>

<style lang="scss">
@import "@material/button/mdc-button";
</style>
