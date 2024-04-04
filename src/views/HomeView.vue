<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
    <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
      <div
        class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
      >
        <header class="mb-4 lg:mb-6 not-format">
          <h1
            class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white"
          >
            Welcome to the best competion of the world
          </h1>
        </header>
        <p class="lead">
          Welcome to the ultimate destination for football enthusiasts! Dive into the electrifying
          world of the beautiful game with us, where passion meets competition in one of the most
          prestigious tournaments in the world. Prepare to be captivated by the skill, strategy, and
          sheer excitement of top-tier football action. Join us as we celebrate the spirit of the
          game and showcase the talents of the world's finest athletes. Get ready to experience the
          thrill of victory and the agony of defeat as we embark on a journey filled with
          unforgettable moments. This is more than just a competition; this is where dreams are
          made, legends are born, and football reigns supreme. Welcome to our premier football
          extravaganza!
        </p>
        <figure>
          <img
            class="w-full rounded-sm"
            src="https://lh3.googleusercontent.com/proxy/e4I_zlXcf94oBtEkQnimcmhRz7ismJdKdg6xV4Ibsc2Py4LdUzAO_ZbPihZlxNxfQ4qrTDueKAQfVH9QZ1kb0BroEkF3_dkdw0Dfzt-8ba2j8uBy81NiWXe8ZwU-4TaJoBws4KV4a_9JLJTcAt8f0DLBmHU3OPId-ft0AFwkYko"
            alt=""
          />
        </figure>
        <br />
        <h2 class="font-semibold text-white">Getting started with Badr Cup</h2>
        <p>
          First of all you need to apply with your team in the apply zone of this website. Then we
          will contact you for further steps.
        </p>
        <p>When you have signed the papers you are raedy to play and show how good your team is.</p>
        <h2 class="text-center text-white mt-5">
          If you have any questions you <a @click="router.push({ name: 'contact' })">contact</a> us
          so we can help you.
        </h2>
      </div>
    </div>
    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <ul
            class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
          >
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All
          Rights Reserved.</span
        >
      </div>
    </footer>
  </main>
</template>
