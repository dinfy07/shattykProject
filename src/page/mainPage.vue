<script setup >
import {ref} from 'vue'

const answer1 = ref(false)
const answer2 = ref(false)

function changeAnswer1 () {
  answer1.value = !answer1.value
}
function changeAnswer2 () {
  answer2.value = !answer2.value
}
</script>

<template>
  <main>
    <div class="description">
      <div class="up">
        <div class="head">Where Students Speak Out</div>
        <div class="main-text">
          <h3>Made by Students</h3>
          <h4>Brighter</h4>
          <div class="text">
            <svg class="star" xmlns="http://www.w3.org/2000/svg" width="120"
                 height="120" viewBox="0 0 120 120" fill="none">
              <g clip-path="url(#clip0_185_132)">
                <path d="M17.7844 74.583C17.3483 73.8363 17.1504 72.9743 17.2172 72.1121C17.284 71.25 17.6123 70.4288 18.1583 69.7582L30.0949 54.9995C30.3351 54.7015 30.5104 54.3566 30.6094 53.9869C30.7085 53.6172 30.7292 53.2309 30.6702 52.8527L27.714 34.096C27.5787 33.242 27.7055 32.367 28.0777 31.5865C28.45 30.8061 29.0501 30.1568 29.799 29.7245C30.5478 29.2921 31.4101 29.097 32.2721 29.1649C33.1342 29.2328 33.9553 29.5604 34.6273 30.1046L49.386 42.0412C49.684 42.2814 50.0289 42.4567 50.3986 42.5557C50.7683 42.6548 51.1546 42.6755 51.5328 42.6165L70.2895 39.6603C71.1435 39.525 72.0185 39.6518 72.799 40.024C73.5794 40.3963 74.2287 40.9964 74.661 41.7452C75.0934 42.4941 75.2885 43.3564 75.2206 44.2184C75.1527 45.0805 74.8251 45.9016 74.2809 46.5736L62.3443 61.3323C62.1041 61.6303 61.9288 61.9752 61.8298 62.3449C61.7307 62.7146 61.71 63.1009 61.769 63.4791L64.7069 82.122C64.8573 83.0052 64.7318 83.9134 64.3476 84.7228C63.9634 85.5323 63.3391 86.2036 62.5597 86.6455C61.8173 87.0591 60.968 87.2402 60.1215 87.1657C59.2751 87.0911 58.4705 86.7641 57.8119 86.2272L43.0533 74.2906C42.7552 74.0504 42.4103 73.8751 42.0406 73.7761C41.6709 73.677 41.2846 73.6563 40.9064 73.7153L22.1497 76.6715C21.296 76.8091 20.4206 76.6828 19.6406 76.3096C18.8606 75.9364 18.213 75.334 17.7844 74.583V74.583ZM57.2853 28.0811C57.0319 27.6421 56.9174 27.1365 56.9569 26.6311C56.9965 26.1257 57.1882 25.6442 57.5069 25.2499L62.558 19.0044C62.6687 18.8683 62.7495 18.7103 62.7949 18.5408C62.8403 18.3713 62.8494 18.1941 62.8215 18.0209L61.5699 10.0866C61.4911 9.5858 61.5659 9.07292 61.7844 8.6155C62.0029 8.15809 62.3548 7.77758 62.7938 7.52413C63.2328 7.27067 63.7383 7.15615 64.2437 7.19565C64.749 7.23515 65.2306 7.42682 65.6249 7.74541L71.8704 12.7965C72.0067 12.907 72.1646 12.9875 72.3341 13.0329C72.5035 13.0783 72.6806 13.0876 72.8539 13.06L80.7176 11.8195C81.177 11.7404 81.6493 11.7879 82.0837 11.957C82.5182 12.1262 82.8983 12.4105 83.1833 12.7794C83.519 13.2261 83.696 13.772 83.6862 14.3307C83.6765 14.8893 83.4805 15.4288 83.1293 15.8634L78.0783 22.1089C77.9678 22.2452 77.8872 22.4032 77.8418 22.5726C77.7964 22.7421 77.7872 22.9192 77.8147 23.0924L79.0663 31.0267C79.1451 31.5275 79.0703 32.0404 78.8518 32.4978C78.6334 32.9552 78.2814 33.3357 77.8424 33.5891C77.4034 33.8426 76.898 33.9571 76.3926 33.9176C75.8872 33.8781 75.4056 33.6865 75.0114 33.3679L68.7658 28.3168C68.6297 28.206 68.4718 28.1253 68.3023 28.0799C68.1328 28.0345 67.9556 28.0254 67.7824 28.0533L59.848 29.3049C59.3472 29.3837 58.8343 29.309 58.3769 29.0905C57.9194 28.8721 57.5388 28.5201 57.2853 28.0811V28.0811ZM72.1151 81.1287C71.8387 80.6497 71.714 80.0982 71.7573 79.5468C71.8007 78.9955 72.0101 78.4702 72.358 78.0403L79.1977 69.5812C79.3183 69.4323 79.4062 69.2597 79.4558 69.0745C79.5054 68.8894 79.5156 68.696 79.4856 68.5067L77.7918 57.761C77.706 57.2149 77.7876 56.6557 78.0259 56.1569C78.2642 55.6581 78.648 55.2432 79.1267 54.9668C79.6054 54.6904 80.1567 54.5655 80.7078 54.6085C81.2589 54.6516 81.784 54.8605 82.214 55.2078L90.6731 62.0476C90.8221 62.1682 90.9947 62.2561 91.1798 62.3057C91.3649 62.3553 91.5584 62.3655 91.7477 62.3355L102.417 60.6524C102.918 60.5673 103.433 60.6197 103.907 60.804C104.381 60.9883 104.796 61.2976 105.108 61.6991C105.474 62.1866 105.667 62.7825 105.656 63.3921C105.645 64.0017 105.43 64.5901 105.047 65.0639L98.2068 73.523C98.0862 73.6719 97.9983 73.8446 97.9487 74.0297C97.899 74.2148 97.8889 74.4083 97.9188 74.5976L99.6127 85.3432C99.6985 85.8893 99.6169 86.4485 99.3786 86.9473C99.1403 87.4461 98.7565 87.861 98.2778 88.1374C97.799 88.4138 97.2478 88.5387 96.6967 88.4957C96.1456 88.4527 95.6205 88.2437 95.1904 87.8964L86.7314 81.0566C86.5824 80.9361 86.4098 80.8481 86.2247 80.7985C86.0396 80.7489 85.8461 80.7388 85.6568 80.7687L74.9112 82.4626C74.3649 82.5489 73.8053 82.4676 73.3061 82.2295C72.807 81.9914 72.3917 81.6076 72.1151 81.1287Z" fill="#FFD255"/>
              </g>
              <defs>
                <clipPath id="clip0_185_132">
                  <rect width="87.5576" height="87.5576" fill="white" transform="translate(75.8271) rotate(60)"/>
                </clipPath>
              </defs>
            </svg>
            <h5><span>With </span>UniLife</h5>
            <svg class="lines" xmlns="http://www.w3.org/2000/svg" width="244"
                 height="41" viewBox="0 0 244 41" fill="none">
              <path d="M191.755 11.31C190.979 11.4253 190.203 11.5405 189.514 11.6558C179.258 13.5004 169.003 15.3066 158.747 17.1512C134.012 21.5705 109.278 26.0282 84.5435 30.4091C75.3219 32.0615 66.0142 33.5987 56.4479 34.8284C52.3112 35.3664 48.0882 35.8276 43.8653 36.0966C39.039 36.404 34.299 35.9044 29.9898 34.8668C26.5425 34.0214 25.2498 32.5995 26.4564 30.9087C27.4044 29.5252 29.128 28.3724 31.8859 27.6038C34.6437 26.8736 37.4016 26.1435 40.2456 25.5671C47.5711 24.1068 54.9828 22.7233 62.3945 21.3399C73.943 19.2263 85.5777 17.1512 97.2123 15.0376C105.4 13.5388 113.501 11.8864 121.171 9.92653C124.446 9.0811 127.549 8.12038 130.651 7.19809C131.858 6.8138 132.978 6.31422 134.185 5.81465C133.409 5.58408 132.72 5.69936 132.203 5.77622C129.1 6.16051 125.911 6.50637 122.809 6.92909C113.07 8.35095 103.676 10.0802 94.3683 11.9633C68.9444 17.0743 43.6067 22.2622 18.269 27.4116C15.9421 27.8728 13.7013 28.3724 11.2882 28.7951C9.73689 29.0641 8.09942 29.2562 6.54813 29.3331C3.79029 29.4484 1.29098 28.8719 0.429155 27.9881C-0.605038 26.8736 0.342967 25.9129 2.06662 25.1059C3.44554 24.4526 5.1692 24.0299 6.89286 23.684C20.8545 20.8019 34.7299 17.9197 48.7777 15.076C66.7898 11.4253 84.7159 7.65923 103.073 4.35435C111.088 2.89406 119.103 1.51062 127.462 0.588332C130.479 0.242472 133.581 -0.0649582 136.77 0.0118995C138.321 0.0503283 139.873 0.127184 141.252 0.357756C145.819 1.04948 148.491 2.93249 148.06 5.0845C147.888 6.16051 147.026 7.12123 145.733 8.04352C144.354 9.04267 142.631 9.8881 140.648 10.6567C137.373 12.0017 133.668 13.0777 129.789 14.0768C119.878 16.6516 109.45 18.7652 98.8498 20.6866C84.0264 23.3766 69.203 26.0666 54.3795 28.7567C52.8283 29.0257 51.1908 29.3715 49.6395 29.6789C49.2948 29.7558 48.95 29.8327 48.6915 30.0632C49.4671 29.9864 50.2428 29.9095 51.0184 29.7942C60.5847 28.5645 69.9786 27.0274 79.2863 25.3749C102.9 21.1862 126.428 16.959 150.042 12.7318C161.849 10.6183 173.57 8.46624 185.377 6.42951C190.031 5.62251 194.857 5.00764 199.684 4.35435C201.924 4.04692 204.165 3.93164 206.492 4.04693C213.387 4.39278 216.575 7.50552 212.525 10.0418C211.749 10.503 210.801 10.9257 209.853 11.31C205.803 13.0008 201.407 14.4996 196.753 15.883C188.997 18.1887 180.896 20.2639 172.536 22.1085C157.885 25.3365 143.148 28.5261 128.41 31.7157C125.653 32.3305 122.981 32.9454 120.223 33.5987C119.706 33.714 119.275 33.8677 118.758 33.983C118.844 34.0214 118.844 34.0983 118.93 34.1367C119.706 34.0598 120.482 33.9445 121.257 33.8677C132.892 32.3305 144.096 30.2938 155.299 28.2186C177.448 24.1068 198.822 19.4569 220.023 14.6148C223.815 13.731 227.779 12.924 231.657 12.117C232.864 11.848 234.157 11.6558 235.449 11.5021C236.914 11.31 238.466 11.31 240.017 11.579C242.258 11.9633 243.723 12.7318 243.981 13.8078C244.154 14.8838 243.12 15.7293 241.051 16.3057C240.707 16.421 240.362 16.4979 239.931 16.5747C233.726 17.5739 227.951 18.9957 222.177 20.3023C199.511 25.4902 176.5 30.3707 152.973 34.6747C141.941 36.7114 130.737 38.556 119.189 39.901C114.707 40.439 110.226 40.8617 105.572 40.977C103.59 41.0154 101.521 41.0154 99.5393 40.9002C98.2465 40.8233 96.8676 40.6312 95.661 40.3622C91.6966 39.4014 90.4039 37.3263 92.9032 35.6354C93.765 35.0206 94.9716 34.4441 96.2643 34.0214C99.2807 33.0223 102.297 31.9847 105.572 31.1392C113.415 29.1794 121.257 27.2195 129.272 25.4518C143.492 22.2622 157.799 19.2647 172.105 16.1136C178.138 14.7686 183.998 13.3083 189.945 11.9248C190.548 11.7711 191.151 11.6174 191.755 11.4253C191.755 11.3868 191.755 11.3484 191.755 11.31Z" fill="#FFD255"/>
            </svg>
          </div>
          <div class="read">
            <img src="../assets/img/sparkle.png" alt="" class="up-left">
            <router-link :to="{name:'Read'}"><h5>Read now</h5></router-link>
            <router-link :to="{name:'Write'}"><h5 class="second">Share your story</h5></router-link>
            <img src="../assets/img/sparkle.png" alt="" class="down-right">
          </div>
        </div>
        <div class="blocks">
          <div class="first">
            <img src="../assets/img/down.png" alt="">
          </div>
          <div class="second">
            <img src="../assets/img/middle.png" alt="">
          </div>
          <div class="third">
            <img src="../assets/img/up.png" alt="">
          </div>
        </div>
      </div>
      <div class="down">
        <div class="left">
          <img src="../assets/img/circles.png" alt="">
          <h2>150+</h2>
          <h4>Writers & <br> Storytellers</h4>
        </div>
        <div class="right">
          <h6>Experience inspiring student stories and get notified about
            <br> every new issue</h6>
        </div>
      </div>
    </div>
    <div class="mission">
      <div class="head">
        <h2>Igniting
          <span>Student Inspiration
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="102" viewBox="0 0 100 102" fill="none">
            <g filter="url(#filter0_d_185_361)">
              <path d="M39.9892 4.05705C46.1811 -2.9466 57.649 -0.493956 60.4345 8.42967L63.7868 19.1692C64.8259 22.4983 67.2619 25.2106 70.4607 26.6001L80.7797 31.0825C89.354 34.807 90.5652 46.4716 82.9391 51.8783L73.7611 58.3852C70.916 60.4023 69.0892 63.5572 68.7562 67.0287L67.6819 78.2279C66.7893 87.5334 56.0699 92.2899 48.5712 86.7078L39.5466 79.9898C36.7492 77.9073 33.1841 77.1448 29.7796 77.9009L18.7966 80.3399C9.67063 82.3665 1.83448 73.6416 4.82617 64.7849L8.42666 54.1261C9.54275 50.822 9.16624 47.1958 7.39513 44.1915L1.68155 34.4998C-3.06595 26.4468 2.81046 16.298 12.1581 16.4064L23.4079 16.5369C26.8952 16.5773 30.2275 15.0987 32.5374 12.4859L39.9892 4.05705Z" fill="#FFD255"/>
              <path d="M42.2365 6.04359C46.8803 0.791012 55.4822 2.63069 57.5713 9.32326L60.9227 20.0634C62.2216 24.2246 65.267 27.6146 69.2652 29.3515L79.5842 33.8343C86.0149 36.6277 86.9234 45.376 81.2038 49.4311L72.0258 55.9377C68.4695 58.459 66.1866 62.4029 65.7703 66.7424L64.6955 77.941C64.026 84.9201 55.9867 88.4881 50.3627 84.3019L41.3378 77.5832C37.841 74.9803 33.385 74.0273 29.1295 74.9722L18.1459 77.4117C11.3016 78.9313 5.42499 72.387 7.66872 65.7447L11.2685 55.086C12.6636 50.956 12.1936 46.4232 9.97972 42.6679L4.26599 32.9764C0.705371 26.9366 5.11275 19.3252 12.1235 19.4065L23.3734 19.5366C27.7323 19.5871 31.8979 17.7393 34.7852 14.4734L42.2365 6.04359Z" stroke="black" stroke-width="6"/>
            </g>
            <defs>
              <filter id="filter0_d_185_361" x="0" y="0" width="100" height="101.098" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="12" dy="12"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_185_361"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_185_361" result="shape"/>
              </filter>
            </defs>
          </svg>
          </span>
          through stories.</h2>
        <img src=../assets/img/fourcircles.png alt="">
      </div>
      <div class="main-content">
        <div class="left">
          <h3>Our Vision</h3>
          <img  class="graphics" src="../assets/img/graphicUp.png" alt="">
          <svg xmlns="http://www.w3.org/2000/svg" width="350" height="6"
               viewBox="0 0 350 6" fill="none">
            <path d="M4 4H408" stroke="#FFD255" stroke-width="6"
                  stroke-linecap="round"/>
          </svg>
          <p>Our vision is to empower students through stories that inspire, inform, and motivate.
            Our editorial team combines creativity, research, and passion to craft monthly issues that truly connect with young minds.Our vision is to empower students through stories that inspire, inform, and motivate.
            Our editorial team combines creativity, research, and passion to craft monthly issues that truly connect with young minds.Our vision is to empower students through stories that inspire, inform, and motivate.
            Our editorial team combines creativity, research, and passion to craft monthly issues that truly connect with young minds.</p>
          <img class="rectangle" src="../assets/img/twoRectangle.png" alt="">
          <div class="btn">
            <img src="../assets/img/sparkle.png" alt="" >
            <h4>Read Our Misson</h4>
          </div>
        </div>
        <div class="right">
          <img src="../assets/img/money.png">
        </div>
      </div>
    </div>
    <div class="cut">
      <div class="ads">
        <h3>Inspiration</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="
    M50 26.3102 L0 23.6898
    M26.3102 0 L23.6898 50
    M9.6525 38.8189 L40.3475 11.1808
    M38.8189 40.3475 L11.1808 9.6525
  "
                stroke="black"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
          />
        </svg>

        <h3>Student Life</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="
    M50 26.3102 L0 23.6898
    M26.3102 0 L23.6898 50
    M9.6525 38.8189 L40.3475 11.1808
    M38.8189 40.3475 L11.1808 9.6525
  "
                stroke="black"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
          />
        </svg>
        <h3>Creativity</h3>
      </div>
    </div>
    <div class="issue">
        <div class="header">
          <img class="circle" src="../assets/img/threecircles.png" alt="">
          <h2>We provide world class <br><span class="badge">MAGAZINES</span> for
            you</h2>
          <img class="stars" src="../assets/img/stars.png" alt="">
        </div>
      <div class="main-issue">
        <h3>From campus insights to creative minds, we publish monthly editions that inspire students and celebrate university life.</h3>
        <ul class="issue-list">
          <li class="yellow">
            <img src="../assets/img/card1.png" alt="">
            <h4>August Issue</h4>
            <h5>Discover inspiring interviews, study hacks, and career tips in our August edition.</h5>
          </li>
          <li class="blue">
            <img src="../assets/img/card2.png" alt="">
            <h4>August Issue</h4>
            <h5>Discover inspiring interviews, study hacks, and career tips in our August edition.</h5>
          </li>
          <li class="yellow">
            <img src="../assets/img/card3.png" alt="">
            <h4>August Issue</h4>
            <h5>Discover inspiring interviews, study hacks, and career tips in our August edition.</h5>
          </li>
        </ul>
      </div>
      <div class="circles">
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
          <circle cx="20.5" cy="20.5" r="18.5" fill="#78CCFF" stroke="black" stroke-width="4"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
          <circle cx="20.5" cy="20.5" r="18.5" fill="#78CCFF" stroke="black" stroke-width="4"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
          <circle cx="20.5" cy="20.5" r="18.5" fill="#78CCFF" stroke="black" stroke-width="4"/>
        </svg>
      </div>
    </div>
    <div class="feedbacks">
      <div class="header">
        <h2>Hear What Our <br> <span>READERS</span> Have to say</h2>
        <img class="person" src="../assets/img/person.png" alt="">
        <img class="vector" src="../assets/img/Vector.png" alt="">
        <img class="vector1" src="../assets/img/vectorBlue.png" alt="">
        <p>At Winfluence our clients' success stories speak volumes. Don't just take our word for it – read what our clients have to say about their experience partnering with us."</p>
      </div>
      <div class="feedback">
        <div class="person">
          <img src="../assets/img/ava.png" alt=""></img>
          <div class="info">
            <div class="name">
              <h3>Aigerim</h3>
              <img src="../assets/img/yellowStar.png" alt=""></img>
              <img src="../assets/img/yellowStar.png" alt=""></img>
              <img src="../assets/img/yellowStar.png" alt=""></img>
              <img src="../assets/img/yellowStar.png" alt=""></img>
              <img src="../assets/img/yellowStar.png" alt=""></img>
            </div>
            <h4>3 YEAR Student, KazNU</h4>
          </div>
        </div>
        <div class="text">
          <p>UNILIFE keeps me motivated every month. There’s always something new to learn!”</p>
        </div>

      </div>

    </div>
    <div id="faq" class="faq">
      <div class="questions">
        <img class="main" src="../assets/img/oneCircle.png" alt="">
        <img class="circles" src="../assets/img/threeYellowCircles.png" alt="">
        <img class="znak" src="../assets/img/question.png" alt="">
        <h3>FAQs</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="482" height="20" viewBox="0 0 482 20" fill="none">
          <path d="M10 10L471.486 10" stroke="#78CCFF" stroke-width="20" stroke-linecap="round"/>
        </svg>
        <ul>
          <li>
            <div @click="changeAnswer1" class="questio">
              <div class="question">
                <h6>01</h6>
                <h5>How does UNILIFE work?</h5>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="49" height="30" viewBox="0 0 49 30" fill="none">
                <path d="M24.4855 29.3521C25.7022 29.3521 26.9189 28.7437 27.5272 28.1354L47.6022 8.06039C49.4272 6.23539 49.4272 3.19372 47.6022 1.36872C45.7772 -0.456283 42.7355 -0.456283 40.9105 1.36872L24.4855 17.7937L8.06053 1.36872C6.23553 -0.456283 3.19386 -0.456283 1.36886 1.36872C-0.456139 3.19372 -0.456139 6.23539 1.36886 8.06039L20.8355 27.527C22.0522 28.7437 23.2689 29.3521 24.4855 29.3521Z" fill="black"/>
              </svg>
            </div>
            <p v-if="answer1">Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. At
              blanditiis consequuntur, cum delectus deserunt dolore exercitationem laborum minus molestiae officiis pariatur possimus quo repellat reprehenderit repudiandae similique, ut veritatis voluptas!</p>
          </li>
          <li>
            <div @click="changeAnswer2" class="questio">
              <div class="question">
                <h6>02</h6>
                <h5>How does UNILIFE work?</h5>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="49" height="30" viewBox="0 0 49 30" fill="none">
                <path d="M24.4855 29.3521C25.7022 29.3521 26.9189 28.7437 27.5272 28.1354L47.6022 8.06039C49.4272 6.23539 49.4272 3.19372 47.6022 1.36872C45.7772 -0.456283 42.7355 -0.456283 40.9105 1.36872L24.4855 17.7937L8.06053 1.36872C6.23553 -0.456283 3.19386 -0.456283 1.36886 1.36872C-0.456139 3.19372 -0.456139 6.23539 1.36886 8.06039L20.8355 27.527C22.0522 28.7437 23.2689 29.3521 24.4855 29.3521Z" fill="black"/>
              </svg>
            </div>
            <p v-if="answer2">Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. At
              blanditiis consequuntur, cum delectus deserunt dolore exercitationem laborum minus molestiae officiis pariatur possimus quo repellat reprehenderit repudiandae similique, ut veritatis voluptas!</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer" id="contact">
      <h4>© 2025 UNILIFE. All rights reserved</h4>
      <img class="logo" src="../assets/img/logo.png" alt="">
      <div class="icons">
        <a href="https://wa.me/77764240306">
          <img src="../assets/img/whatsapp.png" alt="">
        </a>
        <a href="https://t.me/+77764240306">
          <img src="../assets/img/telegram.png" alt="">
        </a>
        <a href="https://www.instagram.com/uni_lifeeeee?igsh=MWpibGJrdmp1YWtpeA==">
          <img src="../assets/img/instagram.png" alt="">
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped type="scss">
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #171717;
  padding: 40px 0;
  h4{
    color: #FFF;
    font-family: Syne;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .logo{
    width: 130px;
    height: auto;
  }
  .icons{
    display: flex;
    gap: 16px;
    img{
      width: 50px;
    }
  }
}
@font-face {
  font-family: "Phonk";
  font-weight: 600;
  src: url("../assets/fonts/Phonk Regular DEMO.otf");
}
@font-face {
  font-family: "Bowlby One SC";
  font-weight: 600;
  src: url("../assets/fonts/BowlbyOneSC-Regular.ttf");
}
@font-face {
  font-family: "Syne";
  src: url("../assets/fonts/Syne-Regular.otf");
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-family: "Montserrat";
  src: url("../assets/fonts/Montserrat-Regular.ttf");
  font-style: normal;
  font-weight: 400;
}
h1, h2, h3, h4, h5, h6, p,ul, li {
  margin: 0;
  padding: 0;
}
.up-left{
  width: 70px;
  height:  auto;
  position: absolute;
  top: -40px;
  left: -40px;
}
.down-right{
  width: 70px;
  height:  auto;
  position: absolute;
  bottom: -37px;
  left: 250px;
  transform: rotate(180deg);
}
.description{
  margin-top: 50px;
  padding: 0 40px;
  font-family: "Phonk", sans-serif;
  .up{
    display: flex;
    flex-direction: column;
    position: relative;
    .head{
      color: #FFD255;
      font-family: Phonk,serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 16px;
    }
    .main-text{
      h3{
        position: relative;
        color: #000;
        font-family: Phonk;
        font-size: 60px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin: 0;
        z-index: 1;
      }
      h4{
        position: relative;
        color: #000;
        font-family: "Bowlby One SC";
        font-size: 65px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0 0 16px 0;
        transform: rotate(-3.603deg);
        width: fit-content;
        z-index: -1;
        border-radius: 30px;
        background: #FFD255;
      }
      .text{
        position: relative;
        .star{
          position: absolute;
          top: -16px;
        }
        .lines{
          position: absolute;
          left: 340px;
          bottom: -30px;
        }
        h5 {
          color: #000;
          font-family: Phonk;
          font-size: 60px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin: 0 0 0 130px;

          span {
            color: #78CCFF;
          }
        }
      }
    }
    .read{
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin: 80px 0 0 70px;
      position: relative;
      h5{
        border-radius: 100px;
        background: #78CCFF;
        filter: drop-shadow(5px 5px black);
        width: 20%;
        text-align: center;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding: 12px 18px;
      }
      .second{
        background: #FFD255;
        color: white;
      }
    }
    .blocks{
      position: absolute;
      width: fit-content;
      right: 0;
      .first{
        position: absolute;
        left: -65px;
        top: -23px;
        z-index: 3;
        img{
          width: 300px;
          height: auto;
        }
      }
      .second{
        position: relative;
        padding-top: 135px;
        z-index: 2;
        img{
          width: 450px;
          height: auto;
        }
      }
      .third{
        z-index: 3;
        position: absolute;
        left: -155px;
        bottom: -77px;
        img{
          width: 300px;
          height: auto;
        }
      }
      .star{
        position: absolute;
        top: -20px;
        right: 20px;
        img{
          width: 150px;
          height: auto;
        }
      }
    }
  }
  .down{
    margin-top: 150px;
    display:  flex;
    justify-content: space-between;
    .left{
      display: flex;
      align-items: center;
      gap: 15px;
      img{
        width: 120px;
        height: auto;
      }
      h2{
        font-family: "Phonk",serif;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      h4{
        font-family: "Bowlby One SC",serif;
        font-size:20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
    .right{
      h6{
        text-align: right;
        font-family: Syne;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 39.2px */
      }
    }
  }
}
.mission{
  margin-top: 80px;
  padding: 75px 40px;
  border-radius: 70px 70px 0 0;
  background: #78CCFF;
  .head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h2{
      color: #FFF;
      font-family: Phonk;
      font-size: 50px;
      font-style: normal;
      font-weight: 600;
      line-height: 131%;
      span{
        display: inline-block;
        position: relative;
        color: #171717;
        font-family: "Bowlby One SC";
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 131%; /* 91.7px */
        transform: rotate(5.153deg);
        border-radius: 15px;
        border: 4px solid #000;
        background: #FFD255;
        padding: 8px 16px;
        svg{
          position: absolute;
          right: 45px;
          top: -65px;
        }
      }
    }
    img{
      width: 150px;
      margin: 0 50px;
    }
  }
  .main-content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 160px;
    .left{
      margin-top: 24px;
      padding: 30px 50px;
      border-radius: 30px;
      border: 4px solid #000;
      background: #FFF;
      position: relative;
      filter: drop-shadow(25px 25px #FFD255);
      h3{
        color: #000;
        font-family: Phonk;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: 131%; /* 78.6px */
      }
      p{
        color: #000;
        font-family: Syne;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 128%;
        margin: 15px 0 80px 0;/* 38.4px */
      }
      h4{
        color: #000;
        font-family: "TT Commons";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 128%; /* 38.4px */
        border-radius: 1000px;
        border: 3px solid #000;
        background: #FFD255;
        filter: drop-shadow(5px 5px black);
        width: fit-content;
        float: right;
        padding: 8px 16px;
      }
      .graphics{
        position: absolute;
        top: 5px;
        right: 50px;
        width: 120px;
      }
      .rectangle{
        position:  absolute;
        bottom: 30px;
        left: 50px;
      }
      .btn{
        position: relative;
        img{
          width: 70px;
          height: auto;
          position: absolute;
          top: -36px;
          right: 146px;
        }
      }
    }
    .right{
      img{
        width: 550px;
      }
    }
  }
}
.ads{
  display: flex;
  gap: 24px;
  align-items: center;
  padding:  16px 24px;
  background: #FFD255;
  transform: rotate(-5deg);
  width: 100vw;
  overflow-x: hidden;
  margin-left: -10px;
  h3{
    color: #000;
    font-family: Phonk;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 131%;
    text-wrap: nowrap/* 104.8px */
  }
  svg{
    width: 30px;
    height: 30px;
  }
}
.cut{
  background: linear-gradient(135deg, #78CCFF 50%, white 50%);
}
.issue{
  margin-top: 70px;
  display:  flex;
  flex-direction: column;
  gap: 24px;
  .header{
    position: relative;
    h2{
      color: #000;
      text-align: center;
      font-family: Phonk;
      font-size: 55px;
      font-style: normal;
      font-weight: 700;
      line-height: 131%; /* 104.8px */
      .badge{
        position: relative;
        display: inline-block;
        transform: rotate(-3.4deg);
        padding: 15px 40px;
        z-index: 1;
        &:after{
          content: "";
          display: block;
          z-index: -99;
          position: absolute;
          inset: 0;
          border-radius: 100px;
          border: 4px solid #000;
          background: #78CCFF;
          transform: skew(8deg) rotate(0.32deg);
        }
        &:before{
          content: "";
          display: block;
          z-index: -98;
          position: absolute;
          inset: 0;
          border-radius: 100px;
          border: 4px dashed white;
          transform: skew(8deg) rotate(0.32deg);
          margin: 12px 20px;
        }
      }
    }
    .stars{
      position: absolute;
      top: 0;
      right: 25px;
      width: 150px;
    }
    .circle{
      position: absolute;
      top: 0;
      left: 10px;
      width: 190px;
    }
    .badge{
      color: white;
    }
  }
  .main-issue{
    h3{
      color: #000;
      text-align: center;
      font-family: Syne;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 131%; /* 52.4px */
    }
    .issue-list{
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      padding: 0;
      gap: 70px;
      margin: 16px 70px;
      li{
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        background: #646cff;
        padding: 20px 40px 70px 40px;
        border-radius: 28px;
        filter: drop-shadow(15px 15px black);
        h4{
          color: #000;
          text-align: center;
          font-family: Syne;
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
          line-height: 131%; /* 52.4px */
          margin-bottom: 20px;
        }
        h5{
          color: #000;
          text-align: center;
          font-family: Syne;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 131%; /* 36.68px */
        }
        img{
          width: 250px;
        }
      }
      .yellow{
        background: url("../assets/img/yellowBackground.png");
      }
      .blue{
        background: url("../assets/img/blueBackground.png");
      }
    }
  }
}
.circles{
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.feedbacks {
   margin: 0 40px;
   .header{
     position: relative;
     display: flex;
     flex-direction: column;
     gap: 50px;
     h2 {
       color: #000;
       font-family: Phonk;
       font-size: 60px;
       font-style: normal;
       font-weight: 600;
       line-height: 131%; /* 104.8px */
       span{
         border-radius: 100px;
         background: #000;
         padding: 0 30px;
         color: #FFD255;
         font-family: "Bowlby One SC";
         font-size: 70px;
         font-style: normal;
         font-weight: 400;
         line-height: 131%; /* 131px */
       }
     }
     .person{
       position: absolute;
       width: 350px;
       right: 0;
       top: -120px;
     }
     .vector{
       position: absolute;
       width: 150px;
       right: 360px;
       top: 160px;
     }
     .vector1 {
       position: absolute;
       width: 120px;
       bottom: 10px;
       left: 10px;
       z-index: 5;
     }
     p{
       position: relative;
       color: #000;
       font-family: Syne;
       font-size: 40px;
       font-style: normal;
       font-weight: 400;
       line-height: 131%; /* 65.5px */
       left: 120px;
       width: calc(100% - 120px);
       margin-bottom: 50px;
     }
   }
   .feedback{
     display: flex;
     flex-direction: column;
     gap: 20px;
     padding: 20px 50px;
     border-radius: 50px;
     border: 4px solid #000;
     background: #78CCFF;
     filter: drop-shadow(15px 15px #000000);
     .person{
       display: flex;
       align-items: center;
       gap: 20px;
       img{
         width: 120px;
         height: 120px;
       }
       .info{
         display: flex;
         flex-direction: column;
         .name{
           display: flex;
           align-items: center;
           justify-content: center;
           gap: 10px;
           color: #FFF;
           font-family: Phonk;
           font-size: 30px;
           font-style: normal;
           font-weight: 600;
           line-height: 166.5%; /* 83.25px */
           img{
             width: auto;
             height: 25px;
           }
         }
         h4{
           color: #FFF;
           font-family: Syne;
           font-size: 25px;
           font-style: normal;
           font-weight: 700;
           line-height: 166.5%; /* 58.275px */
         }
       }
     }
     .text{
       padding: 15px 40px 25px 40px;
       border-radius: 50px;
       border: 4px solid #000;
       background: #FFD255;
       p{
         color: #000;
         text-align: center;
         font-family: Syne;
         font-size: 30px;
         font-style: normal;
         font-weight: 400;
         line-height: 131%; /* 52.4px */
       }
     }
   }
 }
.faq{
  margin-top: 75px;
  background: #78CCFF;
  padding: 150px 75px;
  position: relative;
  .questions{
    border-radius: 40px;
    border: 2px solid #000;
    background: #FFF;
    padding: 50px 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    ul{
      list-style: none;
      width: 100%;
      margin-top: 50px;
      p{
        color: #000;
        font-family: Syne;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 39.2px */
        margin-bottom: 20px;
      }
      .questio{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        margin-bottom: 30px;
        .question{
          display: flex;
          align-items: center;
          gap: 16px;
          h6{
            color: #000;
            font-family: Phonk;
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 131%; /* 65.5px */
          }
          h5{
            color: #000;
            font-family: Syne;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: 131%; /* 52.4px */
          }
        }
        svg {
          width: 40px;
          height: auto;
        }
        &:before{
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background: #000;
          bottom: -20px;
        }
      }
    }
    h3{
      color: #000;
      text-align: center;
      font-family: Phonk;
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: 131%; /* 104.8px */
    }
    .main{
      position: absolute;
      top:-55px;
      left: -3px;
      width: 100px;
    }
    .circles{
      position: absolute;
      bottom: -150px;
      right: -40px;
      width: 150px;
      height: auto;
    }
    .znak{
      position: absolute;
      right: 50px;
      top: 30px;
      height: 150px;
      width: auto;
    }
  }
}
</style>