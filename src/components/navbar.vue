<script setup >
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.path)
</script>

<template>
  <header class="navbar">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="">
    </div>
    <div class="menu">
      <ul>
        <li :class="{ active: route.path === '/' }"><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li :class="{ active: route.path === '/read' }"><router-link :to="{ name: 'Read' }">Read magazine</router-link></li>
        <li :class="{ active: route.name === '/' }"><router-link :to="{ name: 'Write' }">Write story</router-link></li>
        <li :class="{ active: route.path === '/subscribe' }"><router-link :to="{ name: 'Subscribe' }">Subscribe</router-link></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </div>
  </header>
</template>

<style>
a{
  text-decoration: none;
  color: white;

}

.active, .router-link-active{
  color: #78CCFF;
  font-family: "TT Commons";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
@font-face {
  font-family: 'TT Commons';
  src: url(../assets/fonts/TTCommons-Bold.woff2) format('woff2');
  font-weight: 600;
  font-style: normal;
}
.navbar {
  margin: 20px 40px;
  padding: 10px 0;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  font-family: "TT Commons",serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.logo img{
  height: 40px;
  width: auto;
}
.menu {
  border: 1px solid #FFF;
  border-radius: 1000px;
  padding: 12px 50px;

}
.menu ul {
  display: flex;
  justify-content: space-between;
  gap:  35px;
  list-style: none;
  padding: 0;
  margin: 0;
  
}
</style>