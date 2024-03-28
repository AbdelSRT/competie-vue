<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <nav>
    <a @click="router.push({ name: 'home' })" class="cursor-pointer">Dashboard</a>
    <a @click="router.push({ name: 'add-team' })" class="cursor-pointer">Add Team</a>
  </nav>
  <RouterView />
</template>

<style>
nav {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}
body {
  background-color: black !important;
}
</style>
