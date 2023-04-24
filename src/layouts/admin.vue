<script setup lang="ts">
import { test } from '@/apis/user'
const res = await test()
console.log(res)
</script>

<template>
  <h2>admin.vue</h2>
  <RouterView></RouterView>
</template>

<style scoped></style>
