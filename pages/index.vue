<script setup lang="ts">
const isOpen = ref(false);

const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Navigation",
    icon: "i-heroicons-square-3-stack-3d",
  },
  {
    label: "Breadcrumb",
    icon: "i-heroicons-link",
  },
];
</script>

<template>
  <div>
    <UButton @click="isOpen = true" block icon=""
      ><Icon name="uil:airplay" size="24" /> Ohh it works</UButton
    >

    <USlideover v-model="isOpen">
      <div class="px-4 py-8 flex-1 flex flex-col gap-12">
        <UBreadcrumb :links="links" />

        <UAlert
          icon="i-heroicons-command-line"
          color="primary"
          variant="solid"
          title="Heads up!"
          description="You can add components to your app using the cli."
        />

        <div class="flex items-center space-x-4">
          <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
          <div class="space-y-2">
            <USkeleton class="h-4 w-[250px]" />
            <USkeleton class="h-4 w-[200px]" />
          </div>
        </div>

        <UProgress animation="carousel" />

        <UInput
          icon="i-heroicons-magnifying-glass-20-solid"
          size="sm"
          color="white"
          :trailing="false"
          placeholder="Search..."
        />

        <URange name="range" />

        <div class="flex items-center gap-4">
          <UButton class="grow justify-center" loading>Button</UButton>
          <UButton
            icon="i-heroicons-pencil-square"
            class="grow justify-center"
            color="teal"
            >Button</UButton
          >
          <UButton class="grow justify-center" color="red" variant="outline"
            >Button</UButton
          >
        </div>
      </div>
    </USlideover>
  </div>
</template>
