<script setup>

</script>

<template>
  <main>
    <img class="succes" src="../assets/img/succes.png" alt="">
    <h2>You are Already Subscribed</h2>
    <svg  xmlns="http://www.w3.org/2000/svg" width="862" height="8" viewBox="0 0 862 8" fill="none">
      <path d="M4 4H858" stroke="#FFD255" stroke-width="8" stroke-linecap="round"/>
    </svg>
    <h3>Subscribe to UNILIFE Magazine to read our full digital issues and
      access our entire archive.</h3>
    <img class="threeCircles" src="../assets/img/threecircles.png" alt="">
    <img class="threeAnyCircles" src="../assets/img/threeaanycolors.png" alt="">
    <div class="read">
      <img src="../assets/img/sparkle.png" alt="" class="up-left">
      <h5 class="second"><router-link :to="{name:'Home'}">Back to Home</router-link></h5>
      <img src="../assets/img/sparkle.png" alt="" class="down-right">
    </div>
    <div class="preview">
      <p><span>⚠ Notice:
</span> Online access is currently unavailable. After subscribing, you can pick up your copy offline</p>
    </div>
  </main>
</template>

<style scoped type="scss">
h1, h2, h3, h4, h5, h6, p,ul, li {
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  position: relative;
  width: 100%;
  .read{
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    h5{
      border-radius: 100px;
      background: #78CCFF;
      filter: drop-shadow(5px 5px black);
      text-align: center;
      color: #000;
      font-family: "TT Commons";
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 128%; /* 38.4px */
      width: 33%;
      padding: 5px 0;
      border: 2px solid #000;
    }
    .second{
      border-radius: 1000px;
      border: 2px solid #000;
      background: #D9D9D9;
    }
    .up-left{
      width: 70px;
      height:  auto;
      position: absolute;
      top: -36px;
      left: 427px;
    }
    .down-right{
      width: 70px;
      height:  auto;
      position: absolute;
      bottom: -37px;
      right: 420px;
      transform: rotate(180deg);
    }
  }
  h2{
    color: #000;
    font-family: Phonk;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 131%; /* 78.6px */
    margin-bottom: 16px;
    text-align: center;
  }
  svg{
    width: 50%;
  }
  h3{
    color: #000;
    text-align: center;
    font-family: Syne;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 128%; /* 38.4px */
    margin-top: 40px;
    width: 45%;
  }
  .threeCircles{
    position: absolute;
    left: 200px;
    top: 250px;
    width: 130px;
  }
  .threeAnyCircles{
    position: absolute;
    right: 150px;
    top:  250px;
    width: 150px;
  }
  .preview{
    margin-top:50px;
    padding: 25px 30px;
    border: 2px solid #000;
    background: #FFD255;
    border-radius: 25px;
    p{
      color: #000;
      font-family: Syne;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 131%;
      text-align: center;
      span{
        color: #000;
        text-align: center;
        font-family: Syne;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: 131%; /* 32.75px */
      }
    }
  }
}
.succes{
  width: 170px;
  margin-bottom: 0;
}
</style>