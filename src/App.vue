<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Default",
  setup() {
    const version = "1.0.0";
    const topbarsHeight = "56px";
    return { version, topbarsHeight };
  },
});
</script>
