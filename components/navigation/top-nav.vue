<script setup lang="ts">
const links = [
  {
    icon: "i-heroicons-chart-pie",
    label: "Situation Reports",
    to: "/situation-reports",
  },
  {
    label: "Analysis",
    children: [
      {
        label: "Assesments",
        to: "/analysis/assesments",
        icon: "i-heroicons-chart-bar",
      },
      {
        label: "Snapshots",
        to: "/analysis/snapshots",
        icon: "i-heroicons-backspace",
      },
    ],
  },
  {
    label: "Forecasts",
    icon: "i-heroicons-academic-cap",
    children: [
      {
        label: "All Forecasts",
        to: "/forecasts/all",
        icon: "i-heroicons-credit-card",
        description:
          "Amazing forecasts that everyone will love. dive into these forecasts to know more.",
      },
      {
        label: "Quaterly Forecasts",
        to: "/forecasts/quaterly",
        icon: "i-heroicons-adjustments-horizontal",
        description:
          "Amazing forecasts that everyone will love. dive into these forecasts to know more.",
      },
      {
        label: "Annual Forecasts",
        to: "/forecasts/annual",
        icon: "i-heroicons-battery-100",
        description:
          "Amazing forecasts that everyone will love. dive into these forecasts to know more.",
      },
      {
        label: "Decade Forecasts",
        to: "/forecasts/decade",
        icon: "i-heroicons-rocket-launch",
        description:
          "Amazing forecasts that everyone will love. dive into these forecasts to know more.",
      },
    ],
  },
  {
    label: "Explore",
    icon: "i-heroicons-magnifying-glass-plus",
    children: [
      {
        label: "Regions",
        to: "/explore/regions",
        icon: "i-heroicons-map",
        description: "Explore these regions and find out more about them.",
      },
      {
        label: "Topics",
        to: "/explore/topics",
        icon: "i-heroicons-banknotes-solid",
        description: "Explore different topics to get more info.",
      },
    ],
  },
  {
    label: "Media",
    icon: "i-heroicons-viewfinder-circle",
    children: [
      {
        label: "Graphics",
        to: "/media/graphics",
        icon: "i-heroicons-paint-brush",
        description: "Get to know about media graphics.",
      },
      {
        label: "Podcasts",
        to: "/media/podcasts",
        icon: "i-heroicons-microphone",
        description: "Podcasts we think you'll enjoy.",
      },
    ],
  },
];

const isSignedIn = ref(false);

const accountDropdownItems = [
  [
    {
      label: "Profile",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
    },
  ],
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      shortcuts: ["E"],
      click: () => {
        console.log("Edit");
      },
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
      shortcuts: ["D"],
      disabled: true,
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Logout",
      icon: "i-heroicons-arrow-right-start-on-rectangle",
      click() {
        isSignedIn.value = false;
      },
    },
  ],
];
</script>

<template>
  <div class="w-full flex items-center gap-4">
    <!-- logo -->
    <NuxtLink to="/"
      ><Icon name="uil:github" size="36" class="shrink-0"
    /></NuxtLink>
    <UHeaderLinks
      :links="links"
      class="border-b grow py-4 border-gray-200 dark:border-gray-800"
    />
    <div class="shrink-0 flex items-center gap-4">
      <UDropdown
        v-if="isSignedIn"
        :items="accountDropdownItems"
        :popper="{ placement: 'bottom-start' }"
      >
        <UButton variant="ghost" size="2xs">
          <UAvatar
            icon="i-heroicons-user"
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar"
            size="xs"
          />
        </UButton>
      </UDropdown>
      <UButton v-else variant="link" type="button" @click="isSignedIn = true"
        >Sign In</UButton
      >
    </div>
  </div>
</template>
