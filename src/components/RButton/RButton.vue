<template>
  <button class="mdc-button foo-button">
    <div class="mdc-button__ripple"></div>
    <span class="mdc-button__label">{{ label }}</span>
  </button>
</template>

<script lang="ts" setup>
const label = "Button";
</script>
