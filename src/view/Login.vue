<template>
  <label class="mdc-login mdc-text-field mdc-text-field--filled">
    <span class="mdc-text-field__ripple"></span>
    <span class="mdc-floating-label" id="my-label-id">Login</span>
    <input
      class="mdc-text-field__input"
      type="text"
      aria-labelledby="my-label-id"
    />
    <span class="mdc-line-ripple"></span>
  </label>
  <br />

  <label class="mdc-password mdc-text-field mdc-text-field--filled">
    <span class="mdc-text-field__ripple"></span>
    <span class="mdc-floating-label" id="my-label-id">Password</span>
    <input
      class="mdc-text-field__input"
      type="password"
      aria-labelledby="my-label-id"
    />
    <span class="mdc-line-ripple"></span>
  </label>
  <br />

  <div class="mdc-touch-target-wrapper">
    <button class="mdc-button mdc-button--touch">
      <span class="mdc-button__ripple"></span>
      <span class="mdc-button__touch"></span>
      <span class="mdc-button__label">Zaloguj</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted } from "vue";
import { MDCTextField } from "@material/textfield";

onMounted(() => {
  new MDCTextField(document.querySelector(".mdc-login") as HTMLInputElement);
  new MDCTextField(document.querySelector(".mdc-password") as HTMLInputElement);
});

const log = (arg: unknown) => console.log(arg);
onMounted(() => {
  log("login");
});
</script>

<script lang="ts">
defineComponent({
  name: "login",
});
</script>
