<script setup lang="ts">
import type { Meta, Todo } from 'components/models'

const todos = ref<Todo[]>([
    {
        id: 1,
        content: 'ct1',
    },
    {
        id: 2,
        content: 'ct2',
    },
    {
        id: 3,
        content: 'ct3',
    },
    {
        id: 4,
        content: 'ct4',
    },
    {
        id: 5,
        content: 'ct5',
    },
])
const meta = ref<Meta>({ totalCount: 1200 })
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <a
        href="https://tauri.app/"
        target="_blank"
      >
        <img
          src="icons/tauri-128x128.png"
          alt="Tauri Logo"
          class="logo"
        >
      </a>
      <a
        href="https://quasar.dev/"
        target="_blank"
      >
        <img
          src="icons/favicon-128x128.png"
          alt="Quasar logo"
          class="logo"
        >
      </a>
    </div>
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    />
  </q-page>
</template>

<style scoped>
.logo {
  height: 10em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
