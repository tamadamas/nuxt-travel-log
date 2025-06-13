<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get: () => colorMode.value === "forest",
  set: value => (colorMode.preference = value ? "forest" : "nord"),
});
</script>

<template>
  <label class="swap swap-rotate mx-4">
    <!-- this hidden checkbox controls the state -->
    <input v-model="isDark" type="checkbox">

    <Icon name="tabler:sun" class="swap-on" size="24" />
    <Icon name="tabler:moon-filled" class="swap-off" size="24" />
  </label>
</template>
