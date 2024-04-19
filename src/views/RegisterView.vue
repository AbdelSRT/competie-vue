<script setup lang="ts">
import type { Account } from '@/components/models'
import { useRouter } from 'vue-router'
import { useAuth } from '@/services/auth.service'

const router = useRouter()
const { addAccount } = useAuth()

let newFirstname: string
let newLastname: string
let newEmail: string
let newPassword: string

const handleCreate = () => {
  const NewAccount: Account = {
    firstname: newFirstname,
    lastname: newLastname,
    email: newEmail,
    password: newPassword
  }
  addAccount(NewAccount)
}
</script>

<template class="bg-gray-50 dark:bg-gray-900">
  <div
    class="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-28 mb-14 md:h-screen lg:py-0"
  >
    <div
      class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1
          class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
        >
          Create a account
        </h1>

        <form class="space-y-4 md:space-y-6" @submit.prevent="handleCreate">
          <div>
            <label
              for="firstname"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >First name</label
            >
            <input
              type="firstname"
              name="firstname"
              id="firstname"
              v-model="newFirstname"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label
              for="lastname"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Last name</label
            >
            <input
              type="lastname"
              name="lastname"
              v-model="newLastname"
              id="lastname"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Smith"
              required
            />
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Your email</label
            >
            <input
              type="email"
              name="email"
              id="email"
              v-model="newEmail"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
          </div>

          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              v-model="newPassword"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="flex items-start"></div>
          <button
            type="submit"
            class="w-full bg-slate-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Create an account
          </button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?
            <a
              @click="router.push({ name: 'login' })"
              class="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >Login here</a
            >
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
