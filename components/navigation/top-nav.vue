<script setup lang="ts">
import { ref } from "vue";
import { HoverCardArrow, HoverCardContent, HoverCardPortal, HoverCardRoot, HoverCardTrigger } from "radix-vue";

const analysisHoverState = ref(false);
const forecastsHoverState = ref(false);
const exploreHoverState = ref(false);
const mediaHoverState = ref(false);

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
        description: "Amazing forecasts that everyone will love. dive into these forecasts to know more.",
      },
      {
        label: "Quaterly Forecasts",
        to: "/forecasts/quaterly",
        icon: "i-heroicons-adjustments-horizontal",
        description: "Amazing forecasts that everyone will love. dive into these forecasts to know more.",
      },
      {
        label: "Annual Forecasts",
        to: "/forecasts/annual",
        icon: "i-heroicons-battery-100",
        description: "Amazing forecasts that everyone will love. dive into these forecasts to know more.",
      },
      {
        label: "Decade Forecasts",
        to: "/forecasts/decade",
        icon: "i-heroicons-rocket-launch",
        description: "Amazing forecasts that everyone will love. dive into these forecasts to know more.",
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
  <div
    class="sticky py-2 top-0 z-10 bg-background w-full flex items-center gap-4 border-b border-gray-200 dark:border-gray-800"
  >
    <!-- logo -->
    <NuxtLink to="/"><Icon name="uil:github" size="36" class="shrink-0" /></NuxtLink>
    <!-- <UHeaderLinks :links="links" class="grow py-4" /> -->
    <div class="flex items-center gap-4 grow">
      <NuxtLink class="hover:text-primary-400" to="/situation-reports">Situation Reports</NuxtLink>
      <HoverCardRoot v-model:open="analysisHoverState" :open-delay="100" :close-delay="100">
        <HoverCardTrigger class="group cursor-pointer hover:text-primary-400">
          Analysis
          <Icon
            name="radix-icons:caret-down"
            class="relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
            aria-hidden
          />
        </HoverCardTrigger>
        <HoverCardPortal>
          <HoverCardContent
            @click="analysisHoverState = false"
            class="z-10 w-44 data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade rounded-md data-[state=open]:transition-all"
            :side-offset="5"
          >
            <ul class="list-none flex flex-col bg-background shadow-2xl rounded">
              <li class="hover:bg-primary-500 dark:text-white hover:text-white rounded">
                <NuxtLink class="w-full px-4 py-2 h-full inline-block" to="/analysis/assesments">Assesments</NuxtLink>
              </li>
              <li class="hover:bg-primary-500 dark:text-white hover:text-white rounded">
                <NuxtLink class="w-full px-4 py-2 h-full inline-block" to="/analysis/snapshots">Snapshots</NuxtLink>
              </li>
            </ul>

            <HoverCardArrow class="fill-slate-900 dark:fill-white" size="8" />
          </HoverCardContent>
        </HoverCardPortal>
      </HoverCardRoot>

      <HoverCardRoot v-model:open="forecastsHoverState" :open-delay="100" :close-delay="100">
        <HoverCardTrigger class="group cursor-pointer hover:text-primary-400">
          Forecasts<Icon
            name="radix-icons:caret-down"
            class="relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
            aria-hidden
          />
        </HoverCardTrigger>
        <HoverCardPortal>
          <HoverCardContent
            @click="forecastsHoverState = false"
            class="z-10 w-44 data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade rounded-md data-[state=open]:transition-all"
            :side-offset="5"
          >
            <ul class="list-none flex flex-col bg-background shadow-2xl rounded">
              <li class="hover:bg-primary-500 dark:text-white hover:text-white rounded">
                <NuxtLink class="w-full py-2 px-4 h-full inline-block" to="/forecasts/all">All Forecasts</NuxtLink>
              </li>
              <li class="hover:bg-primary-500 dark:text-white hover:text-white rounded">
                <NuxtLink class="w-full py-2 px-4 h-full inline-block" to="/forecasts/quarterly"
                  >Quaterly Forecasts</NuxtLink
                >
              </li>
              <li class="hover:bg-primary-500 dark:text-white hover:text-white rounded">
                <NuxtLink class="w-full py-2 px-4 h-full inline-block" to="/forecasts/annual"
                  >Annual Forecasts</NuxtLink
                >
              </li>
              <li class="hover:bg-primary-500 dark:text-white hover:text-white rounded">
                <NuxtLink class="w-full py-2 px-4 h-full inline-block" to="/forecasts/decade"
                  >Decade Forecasts</NuxtLink
                >
              </li>
            </ul>

            <HoverCardArrow class="fill-slate-900 dark:fill-white" size="8" />
          </HoverCardContent>
        </HoverCardPortal>
      </HoverCardRoot>

      <HoverCardRoot v-model:open="exploreHoverState" :open-delay="100" :close-delay="100">
        <HoverCardTrigger class="group cursor-pointer hover:text-primary-400">
          Explore<Icon
            name="radix-icons:caret-down"
            class="relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
            aria-hidden
          />
        </HoverCardTrigger>
        <HoverCardPortal>
          <HoverCardContent
            @click="exploreHoverState = false"
            class="z-10 w-44 data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade rounded-md data-[state=open]:transition-all"
            :side-offset="5"
          >
            <ul class="list-none flex flex-col bg-background shadow-2xl rounded">
              <li class="hover:bg-primary-500 dark:text-white hover:text-white rounded">
                <NuxtLink class="w-full px-4 py-2 h-full inline-block" to="/explore/regions">Regions</NuxtLink>
              </li>
              <li class="hover:bg-primary-500 dark:text-white hover:text-white rounded">
                <NuxtLink class="w-full px-4 py-2 h-full inline-block" to="/explore/topics">Topics</NuxtLink>
              </li>
            </ul>

            <HoverCardArrow class="fill-slate-900 dark:fill-white" size="8" />
          </HoverCardContent>
        </HoverCardPortal>
      </HoverCardRoot>

      <HoverCardRoot v-model:open="mediaHoverState" :open-delay="100" :close-delay="100">
        <HoverCardTrigger class="group cursor-pointer hover:text-primary-400">
          Media<Icon
            name="radix-icons:caret-down"
            class="relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
            aria-hidden
          />
        </HoverCardTrigger>
        <HoverCardPortal>
          <HoverCardContent
            @click="mediaHoverState = false"
            class="z-10 w-44 data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade rounded-md data-[state=open]:transition-all"
            :side-offset="5"
          >
            <ul class="list-none flex flex-col bg-background shadow-2xl rounded">
              <li class="hover:bg-primary-500 dark:text-white hover:text-white rounded">
                <NuxtLink class="w-full px-4 py-2 h-full inline-block" to="/media/graphics">Graphics</NuxtLink>
              </li>
              <li class="hover:bg-primary-500 dark:text-white hover:text-white rounded">
                <NuxtLink class="w-full px-4 py-2 h-full inline-block" to="/media/podcasts">Podcasts</NuxtLink>
              </li>
            </ul>

            <HoverCardArrow class="fill-slate-900 dark:fill-white" size="8" />
          </HoverCardContent>
        </HoverCardPortal>
      </HoverCardRoot>
    </div>
    <div class="flex items-center gap-4">
      <UInput placeholder="Search" icon="i-heroicons-magnifying-glass" />
      <UButton icon="i-heroicons-globe-asia-australia" variant="soft"></UButton>
      <ULink
        to="/shop"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-400"
        >Shop</ULink
      >
      <UButton>Subscribe</UButton>
    </div>
    <div class="w-4"></div>
    <div class="shrink-0 flex items-center gap-4">
      <ThemeToggle />
      <UDropdown v-if="isSignedIn" :items="accountDropdownItems" :popper="{ placement: 'bottom-start' }">
        <UButton variant="ghost" size="2xs">
          <UAvatar
            icon="i-heroicons-user"
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar"
            size="xs"
          />
        </UButton>
      </UDropdown>
      <UButton v-else variant="link" type="button" @click="isSignedIn = true">Sign In</UButton>
    </div>
  </div>
</template>
