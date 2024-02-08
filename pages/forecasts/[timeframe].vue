<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <h1 class="text-2xl font-bold">Forecasts</h1>
  <p>
    This is a
    <span class="capitalize">{{ route.params.timeframe }}</span>
    Forecasts page
  </p>
</template>
