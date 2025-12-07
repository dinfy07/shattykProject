<script setup>
import { ref } from "vue";

const expiry = ref("");

const formatExpiry = () => {
  let value = expiry.value.replace(/\D/g, ""); // убрать всё кроме цифр

  if (value.length >= 3) {
    value = value.slice(0, 2) + "/" + value.slice(2, 4);
  }

  expiry.value = value;
};

const paymentMethod = ref("card")
function changeMethodToPaypal() {
  paymentMethod.value = "paypal";
}
function changeMethodToCard() {
  paymentMethod.value = "card";
}

</script>

<template>
  <main>
    <img class="stars" src="../assets/img/threeaanycolors.png" alt="">
    <img class="arrow" src="../assets/img/vecctorOrange.png" alt="">
    <h1>Subscribe to unilife </h1>
    <h2>Get unlimited access to all magazine issues, past and present.</h2>
    <div class="tariffs">
      <ul>
        <li>
          <img class="select" src="../assets/img/select.png" alt="">
          <h3>Monthly</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="271" height="6" viewBox="0 0 271 6" fill="none">
            <path d="M2.62207 2.62219H267.463" stroke="#FFD255" stroke-width="5.24438" stroke-linecap="round"/>
          </svg>
          <h4>2 500 ₸/ month</h4>
          <h5>Billed monthly · Cancel anytime</h5>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
              <path d="M1.02271 7.6709L7.15941 13.2962L17.8987 1.0228" stroke="#12B42C" stroke-width="2.04557" stroke-linecap="round"/>
              </svg>
              <h6>Access to all current issues</h6>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
              <path d="M1.02271 7.6709L7.15941 13.2962L17.8987 1.0228" stroke="#12B42C" stroke-width="2.04557" stroke-linecap="round"/>
              </svg>
              <h6>Access to all current issues</h6>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
              <path d="M1.02271 7.6709L7.15941 13.2962L17.8987 1.0228" stroke="#12B42C" stroke-width="2.04557" stroke-linecap="round"/>
              </svg>
              <h6>Access to all current issues</h6>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
              <path d="M1.02271 7.6709L7.15941 13.2962L17.8987 1.0228" stroke="#12B42C" stroke-width="2.04557" stroke-linecap="round"/>
              </svg>
              <h6>Access to all current issues</h6>
            </li>
          </ul>

        </li>
        <li class="orange">
          <img class="select" src="../assets/img/ellipse.png" alt="">
          <h3>Annual</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="271" height="6" viewBox="0 0 271 6" fill="none">
            <path d="M2.62207 2.62219H267.463" stroke="#F3844D" stroke-width="5.24438" stroke-linecap="round"/>
          </svg>
          <h4>18 000 ₸/ month</h4>
          <h5><span><s>30 000 ₸</s> → Save</span> 25 000 ₸</h5>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
              <path d="M1.02271 7.6709L7.15941 13.2962L17.8987 1.0228" stroke="#12B42C" stroke-width="2.04557" stroke-linecap="round"/>
              </svg>
              <h6>Access to all current issues</h6>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
              <path d="M1.02271 7.6709L7.15941 13.2962L17.8987 1.0228" stroke="#12B42C" stroke-width="2.04557" stroke-linecap="round"/>
              </svg>
              <h6>Access to all current issues</h6>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
              <path d="M1.02271 7.6709L7.15941 13.2962L17.8987 1.0228" stroke="#12B42C" stroke-width="2.04557" stroke-linecap="round"/>
              </svg>
              <h6>Access to all current issues</h6>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
              <path d="M1.02271 7.6709L7.15941 13.2962L17.8987 1.0228" stroke="#12B42C" stroke-width="2.04557" stroke-linecap="round"/>
              </svg>
              <h6>Access to all current issues</h6>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="info">
      <h2>Payment Information</h2>
      <div class="method">
        <h5>Payment Method</h5>
        <ul>
          <li :class="paymentMethod == 'card' ? 'active' : ''">
            <label @click="changeMethodToCard" >
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                <mask id="mask0_255_2186" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="2" y="5" width="28" height="22">
                  <path d="M18.8719 5.39218H13.4797C8.39628 5.39218 5.85387 5.39218 4.27531 6.97209C3.13756 8.10849 2.81943 9.74501 2.73045 12.4694H29.6212C29.5322 9.74501 29.2141 8.10849 28.0764 6.97209C26.4978 5.39218 23.9554 5.39218 18.8719 5.39218ZM13.4797 26.9609H18.8719C23.9554 26.9609 26.4978 26.9609 28.0764 25.381C29.6549 23.8011 29.6563 21.26 29.6563 16.1765C29.6563 15.5816 29.6554 15.0199 29.6536 14.4915H2.6981C2.69541 15.0199 2.69451 15.5816 2.69541 16.1765C2.69541 21.26 2.69541 23.8024 4.27531 25.381C5.85522 26.9595 8.39628 26.9609 13.4797 26.9609Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.07666 21.5686C7.07666 21.3005 7.18318 21.0433 7.37278 20.8537C7.56239 20.6641 7.81955 20.5576 8.08769 20.5576H13.4799C13.748 20.5576 14.0052 20.6641 14.1948 20.8537C14.3844 21.0433 14.4909 21.3005 14.4909 21.5686C14.4909 21.8368 14.3844 22.0939 14.1948 22.2835C14.0052 22.4731 13.748 22.5797 13.4799 22.5797H8.08769C7.81955 22.5797 7.56239 22.4731 7.37278 22.2835C7.18318 22.0939 7.07666 21.8368 7.07666 21.5686ZM15.8389 21.5686C15.8389 21.3005 15.9455 21.0433 16.1351 20.8537C16.3247 20.6641 16.5818 20.5576 16.85 20.5576H18.872C19.1402 20.5576 19.3973 20.6641 19.5869 20.8537C19.7765 21.0433 19.8831 21.3005 19.8831 21.5686C19.8831 21.8368 19.7765 22.0939 19.5869 22.2835C19.3973 22.4731 19.1402 22.5797 18.872 22.5797H16.85C16.5818 22.5797 16.3247 22.4731 16.1351 22.2835C15.9455 22.0939 15.8389 21.8368 15.8389 21.5686Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_255_2186)">
                  <path class="main" d="M-0.000244141 -3.05176e-05H32.3528V32.353H-0.000244141V-3.05176e-05Z" fill="black"/>
                </g>
              </svg>
              <h6>Credit Card </h6>
            </label>
          </li >
          <li :class="paymentMethod == 'paypal' ? 'active' : ''">
            <label @click="changeMethodToPaypal" >
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                <path class="main" fill-rule="evenodd" clip-rule="evenodd" d="M7.90909 2C6.60712 2 5.35847 2.51721 4.43784 3.43784C3.51721 4.35847 3 5.60712 3 6.90909V24.0909C3 25.3929 3.51721 26.6415 4.43784 27.5622C5.35847 28.4828 6.60712 29 7.90909 29H25.0909C26.3929 29 27.6415 28.4828 28.5622 27.5622C29.4828 26.6415 30 25.3929 30 24.0909V6.90909C30 5.60712 29.4828 4.35847 28.5622 3.43784C27.6415 2.51721 26.3929 2 25.0909 2H7.90909ZM10.7257 6.65136C10.7404 6.55227 10.7903 6.46179 10.8662 6.39644C10.9422 6.33109 11.0391 6.29525 11.1393 6.29545H16.9762C17.8923 6.29517 18.7877 6.56832 19.5477 7.07993C20.3077 7.59155 20.8977 8.31835 21.2422 9.16727C20.9845 9.08995 20.7181 9.04455 20.4457 9.04455H13.1986C13.0985 9.04434 13.0015 9.08018 12.9256 9.14553C12.8497 9.21088 12.7998 9.30136 12.785 9.40045L11.0362 20.9393H9.048C8.98781 20.9393 8.92833 20.9263 8.87364 20.9011C8.81895 20.8759 8.77036 20.8393 8.73118 20.7936C8.69201 20.7479 8.66319 20.6942 8.6467 20.6363C8.6302 20.5784 8.62643 20.5177 8.63564 20.4582L10.7257 6.65136ZM11.4252 24.2235C11.416 24.2831 11.4198 24.3441 11.4365 24.4022C11.4531 24.4603 11.4821 24.514 11.5216 24.5598C11.561 24.6055 11.6099 24.6421 11.6649 24.6671C11.7199 24.6921 11.7796 24.7049 11.84 24.7045H15.1868C15.287 24.7048 15.3839 24.6689 15.4598 24.6036C15.5358 24.5382 15.5857 24.4477 15.6004 24.3486L16.3822 19.2653H19.7682C20.751 19.2654 21.708 18.951 22.4991 18.3681C23.2903 17.7851 23.874 16.9642 24.165 16.0255C24.4559 15.0869 24.4388 14.0797 24.116 13.1515C23.7932 12.2232 23.1818 11.4227 22.3713 10.867C22.2741 12.0161 21.7491 13.0867 20.9003 13.8672C20.0514 14.6476 18.9405 15.081 17.7874 15.0815H12.7691L11.4265 24.2235H11.4252ZM21.5478 10.354L21.5245 10.1871C21.1563 9.99323 20.7918 9.88032 20.4457 9.88032H13.557L12.8955 14.2445H17.7874C18.7328 14.2433 19.6431 13.8868 20.3379 13.2457C21.0326 12.6046 21.461 11.7258 21.538 10.7836C21.5454 10.6405 21.5487 10.4973 21.5478 10.354Z" fill="white"/>
              </svg>
              <h6>Paypal </h6>
            </label>
          </li>
        </ul>
      </div>
      <h6 v-if="paymentMethod == 'card'">Card Number</h6>
      <input v-if="paymentMethod == 'card'" type="text" maxlength="16" minlength="16" placeholder="1234 5678 9012 3456">
      <div v-if="paymentMethod == 'card'" class="two">
        <div class="input">
          <h6>Expiry Date</h6>
          <input
              v-model="expiry"
              @input="formatExpiry"
              placeholder="MM/YY"
              maxlength="5"
          />
        </div>
        <div class="input">
          <h6>CVC</h6>
          <input
              placeholder="123"
              maxlength="3"
          />
        </div>
      </div>
      <h6 v-if="paymentMethod == 'card'">Cardholder Name</h6>
      <input v-if="paymentMethod == 'card'" type="text" placeholder="Emma Davis">
      <div class="summary">
        <h5>Order Summary</h5>
        <div class="cost">
          <h6>Monthly Subscription</h6>
          <h6>2 500 ₸</h6>
        </div>
        <hr>
        <div class="cost">
          <h6>Total Today</h6>
          <h6>2 500 ₸</h6>
        </div>
        <div class="btn">Subscribe Now</div>
        <p>By subscribing, you agree to our Terms of Service and Privacy Policy. Cancel anytime from your profile.</p>
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
  </main>
</template>

<style scoped type="scss">
h1,h2,h3,h4,h5,h6,p,ul,li{
  margin: 0;
  padding: 0;
}
.stars{
  position: absolute;
  left: 117px;
  top: 55px;
  width: 153px;
}
.arrow{
  position: absolute;
  right: 146px;
  top: 117px;
  width: 56px;
}
main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  position: relative;
  h1{
    color: #000;
    text-align: center;
    font-family: Phonk;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 131%; /* 78.6px */
  }
  h2{
    color: #000;
    text-align: center;
    font-family: Syne;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 128%; /* 38.4px */
  }
  .tariffs{
    ul{
      display: flex;
      list-style: none;
      gap: 40px;
      margin-top: 60px;
      li{
        padding: 16px 150px 16px 30px;
        border: 2px solid black;
        border-radius: 16px;
        background: white;
        filter: drop-shadow(15px 15px #FFD255);
        position: relative;
        .select{
          position: absolute;
          right: 30px;
          top: 16px;
        }
        h3{
          color: #000;
          font-family: Phonk;
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
          line-height: 131%; /* 51.526px */
        }
        h4{
          color: #000;
          font-family: Syne;
          font-size: 32px;
          font-style: normal;
          font-weight: 500;
          line-height: 128%; /* 52.367px */
        }
        h5{
          color: #000;
          font-family: Syne;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 128%; /* 26.183px */
        }
        ul{
          display: flex;
          list-style: none;
          flex-direction: column;
          gap: 2px;
          margin-top: 16px;
          li{
            border: none;
            padding: 0;
            display: flex;
            align-items: center;
            gap: 8px;
            filter: drop-shadow(0 0 white);
            svg{
              width: 12px;
            }
            h6{
              color: #000;
              font-family: Syne;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 174%; /* 35.593px */
            }
          }
        }
      }
      .orange{
        filter: drop-shadow(15px 15px #F3844D);
        h5 span{
          color: rgba(0, 0, 0, 0.40);
          font-family: Syne;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 128%; /* 26.183px */
        }
      }
    }
  }
  .info{
    padding: 40px 60px;
    margin-top: 50px;
    border-radius: 50px;
    border: 4px solid #000;
    background: #FFF;
    display: flex;
    flex-direction: column;
    gap: 8px;
    filter: drop-shadow(10px 10px black);
    h6{
      color: #000;
      font-family: Syne;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 128%; /* 25.6px */
    }
    input{
      padding: 14px 20px;
      border-radius: 20px;
      &::placeholder {
        color: rgba(0, 0, 0, 0.50);
        font-family: Syne;
        font-size: 19.62px;
        font-style: normal;
        font-weight: 400;
        line-height: 131%; /* 25.703px */
      }
    }
    .two{
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    h2{
      color: #000;
      font-family: Phonk;
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      line-height: 131%; /* 45.85px */
    }
    .method{
      display: flex;
      flex-direction: column;
      gap: 8px;
      h5{
        color: #000;
        font-family: Syne;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 128%; /* 28.16px */
      }
      ul{
        display: grid;
        list-style: none;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        li{
          background: #5F01D1;
          border-radius: 16px;
          padding: 16px 30px;
          .main{
            fill: white;
          }
          h6{
            color: white;
            font-family: Syne;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 128%; /* 25.6px */
          }
          input{
            display: none;
          }
          label{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
    .summary{
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      h5{
        color: #000;
        font-family: Syne;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 128%; /* 25.6px */
        margin-bottom: 10px;
      }
      h6{
        color: #000;
        font-family: Syne;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 128%; /* 20.48px */
      }
      .cost{
        display: flex;
        justify-content: space-between;
      }
      hr{
        border: 1px solid rgba(0, 0, 0, 0.50);
        width: 100%;
      }
      .btn{
        border-radius: 20px;
        border: 3px solid #FFF;
        background: #F83B7F;
        color: #FFF;
        font-family: "TT Commons";
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 128%; /* 38.4px */
        text-align: center;
        padding: 16px 30px;
        margin-top: 40px;
      }
      p{
        color: rgba(0, 0, 0, 0.50);
        text-align: center;
        font-family: Syne;
        font-size: 16.667px;
        font-style: normal;
        font-weight: 500;
        line-height: 128%; /* 21.333px */
        margin-top: 16px;
        
      }
    }
  }
}
.active{
  border: 2px solid black !important;
  background: #FFD255 !important;
  filter: drop-shadow(0 4px black);
  h6{
    color: black !important;
  }
  .main{
    fill: black !important;
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
  margin-top: 80px;
  h3{
    color: #000;
    font-family: Phonk;
    font-size: 55px;
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
</style>