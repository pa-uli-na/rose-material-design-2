<script setup lang="ts">
import RButton from "./components/RButton/RButton.vue";
import RInput from "./components/RInput/RInput.vue";
import { RTable } from "./components/RTable";
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <r-input :label="'Imię nazwisko'"></r-input>
    <r-button :label="'Button'"></r-button>
    <r-table></r-table>
  </div>
</template>
