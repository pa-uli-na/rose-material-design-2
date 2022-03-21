<template>
  <!-- MATERIAL DESIGN 2 -->
  <label
    class="mdc-login mdc-text-field mdc-text-field--filled"
    style="width: 100%; margin-top: 10px; margin-bottom: 10px"
  >
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

  <label
    class="mdc-password mdc-text-field mdc-text-field--filled"
    style="width: 100%; margin-top: 10px; margin-bottom: 10px"
  >
    <span class="mdc-text-field__ripple"></span>
    <span class="mdc-floating-label" id="my-label-id">Hasło</span>
    <input
      class="mdc-text-field__input"
      type="password"
      aria-labelledby="my-label-id"
    />
    <span class="mdc-line-ripple"></span>
  </label>
  <br />

  <div
    class="mdc-touch-target-wrapper"
    style="width: 100%; margin-top: 10px; margin-bottom: 10px"
  >
    <button
      class="mdc-button mdc-button--touch mdc-button--raised"
      style="width: 100%"
    >
      <span class="mdc-button__ripple"></span>
      <span class="mdc-button__touch"></span>
      <span class="mdc-button__label">Zaloguj</span>
    </button>
  </div>
  <br />

  <template v-for="role in roles" :key="role.value">
    <div class="mdc-form-field">
      <div class="mdc-radio">
        <input
          class="mdc-radio__native-control"
          type="radio"
          :id="`radio-{role.value}`"
          name="radios"
          checked
        />
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        <div class="mdc-radio__ripple"></div>
      </div>
      <label for="radio-1">{{ role.label }}</label>
    </div>
    <br />
  </template>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted } from "vue";
import { MDCTextField } from "@material/textfield";

onMounted(() => {
  new MDCTextField(document.querySelector(".mdc-login") as HTMLInputElement);
  new MDCTextField(document.querySelector(".mdc-password") as HTMLInputElement);
});

const roles = [
  { label: "Pracownik sklepu", value: "store_employee" },
  { label: "Pracownik ochrony", value: "security_employee" },
  { label: "Pracownik uczący się", value: "newbee_employee" },
  { label: "Pracownik centrala", value: "central_employee" },
  { label: "Pracownik zewnętrzny", value: "external_employee" },
];
</script>

<script lang="ts">
defineComponent({
  name: "login",
});
</script>
