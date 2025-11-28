<script setup >

</script>

<template>
  <header class="navbar">
    <div class="logo">
      <h4>LOGOTYPE</h4>
    </div>
    <div class="menu">
      <ul>
        <li>Home</li>
        <li>Read magazine</li>
        <li>Write story</li>
        <li>Subscribe</li>
        <li>Contact Us</li>
        <li>FAQ</li>
      </ul>
    </div>
    <div class="account">
      <h4 class="login">Log in</h4>
      <h4 class="sign in">Sign in</h4>
    </div>
  </header>
</template>

<style>
@font-face {
  font-family: 'TT Commons';
  src: url(../assets/fonts/TTCommons-Bold.woff2) format('woff2');
  font-weight: 600;
  font-style: normal;
}
.navbar {
  margin: 20px 40px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;
  font-family: "TT Commons",serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.menu {
  border: 1px solid #FFF;
  border-radius: 1000px;
  padding: 12px 36px;
}
.menu ul {
  display: flex;
  justify-content: space-between;
  gap:  35px;
  list-style: none;
  padding: 0;
  margin: 0;
  
}
.account {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.login {
  border-radius: 100px;
  border: 1px solid #FFF;
  padding: 12px 24px;
  margin: 0;
  align-self: center;
}
.sign {
  border-radius: 100px;
  background: #78CCFF;
  padding: 12px 24px;
  margin: 0;
  align-self: center;
}
</style>