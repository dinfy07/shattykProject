<script setup>
import Navbar from "./components/navbar.vue";

</script>

<template>
  <Navbar />
  <router-view></router-view>
</template>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;

}
</style>
