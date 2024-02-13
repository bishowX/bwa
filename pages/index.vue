<script setup lang="ts">
const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://worldview.stratfor.com/sites/default/files/styles/2x1_large/public/GettyImages-1978581441.jpg?itok=nKwPXUC_",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];
</script>

<template>
  <div>
    <div>
      <UCarousel
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full', wrapper: 'h-[650px]', container: 'scroll-smooth' }"
        indicators
        class="rounded-lg overflow-hidden"
      >
        <NuxtLink to="/articles/abcd"><img :src="item" class="w-full" draggable="false" /></NuxtLink>
      </UCarousel>
    </div>
  </div>
</template>
