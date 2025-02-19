<script setup>
import { onMounted } from "vue";
import { useRouter, RouterLink, RouterView } from "vue-router";
import Navbar from "./layout/Navbar.vue";

const router = useRouter();

onMounted(async () => {
  try {
    await router.isReady();
  } catch (e) {
    console.error("Error fetching data", e);
  }
});
</script>

<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>
