<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <nav
    class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-4 bg-black shadow sm:items-baseline w-full"
  >
    <div class="sm:mb-0">
      <a
        @click="router.push({ name: 'home' })"
        class="text-sm no-underline text-grey-darkest hover:text-blue-dark"
        >Home</a
      >
    </div>
    <div>
      <a
        @click="router.push({ name: 'leaderboard' })"
        class="text-xs no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >Leaderboard</a
      >
      <a
        @click="router.push({ name: 'add-team' })"
        class="text-xs no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >Add Team</a
      >
      <a
        @click="router.push({ name: 'contact' })"
        class="text-xs no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >Contact</a
      >
    </div>
  </nav>

  <RouterView />
</template>

<style></style>
