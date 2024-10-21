<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import Home from "./Home.vue";
import gunduImage from "../assets/Myself.jpg";
import About from "./About.vue";
import Contact from "./Contact.vue";
// import Blog from "./Blog.vue";
import Project from "./Project.vue";
import Skills from "./Skills.vue";

const scroll = (refName: string) => {
  const element = document.getElementById(refName);
  element?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <VApp id="home">
    <NavBar />

    <VContainer fluid class="VContainer">
      <Home />
      <div class="head">
        <VRow class="d-inline-block d-md-flex">
          <VCol cols="12" md="5">
            <div
              style="z-index: 9999; width: 300px; height: 300px"
              class="mx-auto mt-10 d-flex justify-center"
            >
              <VImg style="z-index: 9999" :src="gunduImage" rounded="circle" />
            </div>
          </VCol>
          <VCol cols="2" class="d-none d-md-flex">
            <div
              class="doubleDownArrow position-absolute bottom-0 left-0 right-0 text-center"
            >
              <VIcon size="50" icon="mdi-chevron-double-down" />
            </div>
          </VCol>
          <VCol cols="12" md="5">
            <div class="Header mt-16 text-center">
              <h1 class="text-grey">Hello,</h1>
              <h1 class="text-white">I'M Gundu Patil</h1>
              <span class="text-grey">Frontend Developer</span><br />
              <VBtn
                title
                dark
                class="text-yellow mt-8"
                variant="outlined"
                @click="scroll('contact')"
                >Contact me</VBtn
              >
            </div>
          </VCol>
        </VRow>
      </div>

      <div>
        <About />
        <Project />
        <Skills />
        <Contact />
      </div>
    </VContainer>
  </VApp>
</template>

<style scoped>
.VContainer {
  padding: 16px 0;
}

.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}
.Header {
  position: relative;
  animation: mymove 3s 1;
  animation-delay: 0.5s;
  z-index: 9999;
}
@keyframes mymove {
  from {
    top: 100px;
  }
  to {
    top: 0px;
  }
}
.head:before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 51%;
  background: black;
  transform: skew(0deg, 6deg);
}
.head:after {
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 51%;
  background: black;
  transform: skew(0deg, -6deg);
}
.doubleDownArrow {
  z-index: 9999;
}

.first {
  width: 100%;
  height: 280px;
  text-align: center;
  padding: 2rem 2rem;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}
.imgHover {
  padding: 0 200px;
}
.pre {
  width: 100%;
  height: 380px;
  text-align: center;
  padding: 0 200px;
  background-color: #f5f5f5;
}
@media only screen and (max-width: 800px) {
  .head {
    height: 1000px;
  }
}
</style>
