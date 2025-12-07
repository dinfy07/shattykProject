<script setup>
import { ref, computed } from "vue";

const incognito = ref(false);
const story = ref("");

const wordCount = computed(() => {
  return story.value
      .trim()
      .split(/\s+/)
      .filter(word => word.length > 0)
      .length;
});
const isDragging = ref(false);
const fileName = ref("");

const handleFiles = (files) => {
  if (!files || !files.length) return;

  const file = files[0];


  fileName.value = file.name;
  console.log("Выбран файл:", file);

};

const onFileChange = (e) => {
  handleFiles(e.target.files);
};

const onDrop = (e) => {
  isDragging.value = false;
  handleFiles(e.dataTransfer.files);
};

const onDragLeave = (e) => {
  if (!e.currentTarget.contains(e.relatedTarget)) {
    isDragging.value = false;
  }
};
</script>

<template>
<main>
  <h1>Write Your Story</h1>
  <h2>Share your experiences, advice, or creativity with thousands of students</h2>
  <div class="alert">
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
      <path d="M16.5 2.75002L4.125 7.56252V16.5C4.125 21.3125 8.9375 28.875 15.125 30.25C21.3125 28.875 26.125 21.3125 26.125 16.5V7.56252L15.125 2.75002H16.5Z" fill="#FEFEFE" stroke="black" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div class="text">
      <h3>Your Privacy, Your Choice</h3>
      <h4>Choose to publish anonymously or publicly. We respect your privacy and <br> give you full control over your identity.</h4>
    </div>
  </div>
  <div class="form">
    <div class="incognita">
      <div class="left">
        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="20" viewBox="0 0 31 20" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9.84585C2.85248 4.00585 8.70935 0 15.472 0C22.2347 0 28.0916 4.00585 30.9441 9.84585C28.0916 15.6858 22.2347 19.6917 15.472 19.6917C8.70935 19.6917 2.85248 15.6858 0 9.84585ZM15.472 14.7688C16.1185 14.7688 16.7587 14.6414 17.356 14.394C17.9532 14.1466 18.4959 13.784 18.9531 13.3269C19.4102 12.8697 19.7728 12.327 20.0202 11.7298C20.2676 11.1325 20.395 10.4923 20.395 9.84585C20.395 9.19936 20.2676 8.5592 20.0202 7.96193C19.7728 7.36465 19.4102 6.82195 18.9531 6.36481C18.4959 5.90768 17.9532 5.54506 17.356 5.29766C16.7587 5.05026 16.1185 4.92292 15.472 4.92292C14.1664 4.92292 12.9142 5.44159 11.991 6.36481C11.0678 7.28804 10.5491 8.54021 10.5491 9.84585C10.5491 11.1515 11.0678 12.4037 11.991 13.3269C12.9142 14.2501 14.1664 14.7688 15.472 14.7688Z" fill="black"/>
        </svg>
        <div class="text">
          <h3>Publishing Publicly</h3>
          <h4>Your name will be credited in the magazine</h4>
        </div>
      </div>
      <div class="right">
        <label class="checkbox_label" for="slider">
          <input v-model="incognito" class="checkbox_input" type="checkbox" id="slider">
          <span class="checkbox_slider"></span>
        </label>
      </div>
    </div>
    <div class="input">
      <h6>Story Title <span>*</span></h6>
      <input type="text" placeholder="Give your story a catchy title">
    </div>
    <div class="twoInput">
      <div v-if="incognito" class="input">
        <h6>Your Name <span>*</span></h6>
        <input type="text" placeholder="Your full name">
      </div>
      <div class="input">
        <h6>Email <label v-if="!incognito">(for notifications only, not published) </label><span>*</span></h6>
        <input type="text" placeholder="your.email@university.edu">
      </div>
    </div>
    <div class="input">
      <h6>Category <span>*</span></h6>
      <select>
        <option value="">Fantastic</option>
        <option value="">Drama</option>
        <option value="">Romantica</option>
        <option value="">Literature</option>
      </select>
    </div>
    <div class="input">
      <h6>Your Story <span>*</span></h6>
      <textarea v-model="story" placeholder="Share your story, advice, or experiences here…"></textarea>
      <div class="counter">
        <h6>Words: {{ wordCount }}</h6>
        <h6>Recommended: 500–3000 words</h6>
      </div>
    </div>
    <div class="input">
      <h6>Upload Document (Optional)</h6>
      <label class="dropzone"
             :class="{ dragging: isDragging }"
             @dragover.prevent
             @dragenter.prevent="isDragging = true"
             @dragleave="onDragLeave"
             @drop.prevent="onDrop"
             from="file">
        <input
            type="file"
            accept=".doc,.docx,.pdf"
            class="file-input"
            @change="onFileChange"
            id="file"
        />
        <div class="dropzone-content">
          <img src="../assets/img/dragAndDrop.png" alt="">
          <p v-if="fileName">Selected: <strong>{{ fileName }}</strong></p>
          <p >Click to upload or drag and drop</p>
          <p class="type-file">DOC, DOCX, PDF (max 5MB)</p>
        </div>
      </label>
    </div>
    <div class="buttons">
      <router-link :to="{name: 'Submit'}"><h4 class="submit">Subscribe now</h4></router-link>
      <h4>Cancel</h4>
    </div>
  </div>
</main>
</template>

<style scoped>
h1,h2,h3,h4,h5,h6,p,ul,li{
  margin: 0;
  padding: 0;
}
 main{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 16px;
   h1{
     color: #171717;
     text-align: center;
     font-family: "Bowlby One SC";
     font-size: 50px;
     font-style: normal;
     font-weight: 400;
     line-height: 131%; /* 91.7px */
     margin-top: 50px;
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
   .alert{
     display: flex;
     padding: 30px 60px;
     gap: 16px;
     border-radius: 35px;
     border: 2px solid #000;
     background: #78D2FF;
     margin-top: 16px;
     svg{
       height: 30px;
     }
     .text{
       display: flex;
       flex-direction: column;
       justify-content: center;
       gap: 16px;
       h3{
         color: #000;
         font-family: Syne;
         font-size: 20px;
         font-style: normal;
         font-weight: 700;
         line-height: 128%; /* 38.4px */
       }
       h4{
         color: #000;
         font-family: Syne;
         font-size: 20px;
         font-style: normal;
         font-weight: 500;
         line-height: 128%; /* 38.4px */
       }
     }
   }
   .form {
     display: flex;
     flex-direction: column;
     padding: 50px;
     border-radius: 25px;
     border: 1px solid #000;
     gap: 18px;
     .incognita{
       display: flex;
       gap: 100px;
       border-radius: 35px;
       border: 2px solid #000;
       padding: 35px 40px;
       margin-bottom: 10px;
       .left{
         display: flex;
         gap: 8px;
         h3{
           color: #000;
           font-family: Syne;
           font-size: 20px;
           font-style: normal;
           font-weight: 700;
           line-height: 128%; /* 38.4px */
         }
         h4{
           color: #000;
           font-family: Syne;
           font-size: 20px;
           font-style: normal;
           font-weight: 500;
           line-height: 128%; /* 38.4px */
         }
         svg{
           width: 25px;
           padding: 5px;
         }
       }
       .right{
         .checkbox_label{
           display: inline-block;
         }
         .checkbox_input{
           position: absolute;
           top: 0;
           left: 0;
           opacity: 0;
           appearance: none;
         }
         .checkbox_slider{
           display: inline-block;
           position: relative;
           width: 100px;
           &:before{
             content: "";
             position: absolute;
             top: 0;
             left: 0;
             width: 80px;
             height: 40px;
             background: rgba(0, 0, 0, 0.40);
             border-radius: 86px;
             border: 1px solid #000;
             transition: .3s;
           }
           &:after{
             content: "";
             position: absolute;
             top: 4px;
             left: 4px;
             width: 35px;
             height: 35px;
             border-radius: 50%;
             background: #000;
             transition: left .3s ease-in-out;
           }
         }
         .checkbox_input:checked + .checkbox_slider:after{
           left: 43px;
         }
         .checkbox_input:checked + .checkbox_slider:before{
            background: #F3844D;
          }
       }
     }
     .input{
       display: flex;
       flex-direction: column;
       gap: 8px;
       width: 100%;
       h6{
         color: #000;
         font-family: Syne;
         font-size: 16px;
         font-style: normal;
         font-weight: 500;
         line-height: 128%; /* 25.6px */
       }
       span{
         color: #F41313;
         font-family: Syne;
         font-size: 16px;
         font-style: normal;
         font-weight: 500;
         line-height: 128%;
       }
       input, select{
         padding: 16px;
         border-radius: 20px;
         border: 1px solid #000;
         background: rgba(0, 0, 0, 0.00);
         &::placeholder, option{
           color: rgba(0, 0, 0, 0.50);
           font-family: Syne;
           font-size: 16px;
           font-style: normal;
           font-weight: 400;
           line-height: 131%; /* 25.703px */
         }
       }
       select{
         appearance: none;
         color: rgba(0, 0, 0, 0.50);
         font-family: Syne;
         font-size: 16px;
         font-style: normal;
         font-weight: 400;
         line-height: 131%;
       }
       textarea{
         padding: 16px;
         border-radius: 20px;
         border: 1px solid #000;
         background: rgba(0, 0, 0, 0.00);
         height: 200px;
         appearance: none;
       }
       .counter{
         display: flex;
         justify-content: space-between;
         h6{
           color: rgba(0, 0, 0, 0.50);
           font-family: Syne;
           font-size: 12px;
           font-style: normal;
           font-weight: 400;
           line-height: 131%; /* 26.2px */
         }
       }
     }
     .twoInput{
       display: flex;
       gap: 16px;
     }
     .file-input{
       position: absolute;
       inset: 0;       /* растягиваем по лейблу */
       opacity: 0;     /* невидимый */
       width: 0;
       height: 0;
       cursor: pointer;
       display: none;
     }
     .dropzone{
       padding: 16px;
       border-radius: 20px;
       border: 1px solid #000;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       cursor: pointer;
       .dropzone-content{
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         img{
           width: 150px;
         }
         p{
           color: #000;
           text-align: center;
           font-family: Syne;
           font-size: 20px;
           font-style: normal;
           font-weight: 400;
           line-height: 131%; /* 32.75px */
         }
         .type-file{
           color: rgba(0, 0, 0, 0.50);
           font-family: Syne;
           font-size: 16px;
           font-style: normal;
           font-weight: 400;
           line-height: 131%;
         }
       }
     }
     .buttons{
       display: grid;
       gap: 16px;
       grid-template-columns: 3fr 1fr;
       width: 100%;
       h4{
         color: #000;
         font-family: "TT Commons";
         font-size: 20px;
         font-style: normal;
         font-weight: 700;
         line-height: 128%; /* 38.4px */
         border-radius: 20px;
         border: 3px solid #000;
         background: rgba(0, 0, 0, 0.00);
         padding: 10px;
         text-align: center;
       }
       .submit{
         color: #fff;
         border-radius: 20px;
         border: 3px solid #FFF;
         background: #5F01D1;
       }
     }
   }
 }
</style>