<template>
  <div>
    <VCol cols="12" class="mt-16" id="about">
      <div>
        <VRow>
          <VCol cols="12" sm="6">
            <div class="egg">
              <VImg :src="aboutMe" contain max-height="300"> </VImg>
            </div>
          </VCol>
          <VCol cols="12" sm="6">
            <h5 class="mt-16">About Me</h5>
            <div style="width: 120px">
              <VSlider
                v-model="slider2"
                color="yellow"
                tick-label="track-color"
              >
              </VSlider>
            </div>
            <h4 class="mt-n4">I Am a Creative Web Designer</h4>
            <h4>And Developer</h4>
            <p class="text-grey">
              Hello! I'm Gundappa Patil, a frontend developer with 4 years of
              experience in building interactive and responsive web
              applications. Over the years, I've had the privilege of working on
              multiple projects where I leveraged my expertise in HTML, CSS, and
              JavaScript to create seamless user experiences. I'm well-versed in
              modern JavaScript frameworks like React and Vue, and I use state
              management libraries such as Redux and Pinia to ensure smooth,
              scalable front-end architectures.
            </p>
            <br />
            <p class="text-grey">
              I am passionate about crafting clean, efficient, and maintainable
              code that brings designs to life. My focus lies in delivering
              applications that are not only visually appealing but also highly
              functional across various devices and platforms.
            </p>
            <br />
            <p>
              In addition to my technical skills, I stay up-to-date with the
              latest frontend trends and best practices, constantly refining my
              knowledge to deliver high-quality web solutions. I'm also
              experienced in collaborating with cross-functional teams to ensure
              the best possible user experiences.
            </p>
            <VBtn title dark color="yellow" class="mt-4" @click="downloadResume"
              >Download Resume
            </VBtn>
          </VCol>
        </VRow>
      </div>
    </VCol>
    <div class="text-center mt-4">
      <h2>What we Do</h2>
      <div style="width: 120px; margin: 0 auto">
        <VSlider
          v-model="slider2"
          color="yellow"
          tick-label="track-color"
        ></VSlider>
      </div>
    </div>
  </div>
</template>

<script setup>
import aboutMe from "../assets/aboutMe.png";
import resume from "../assets/Resume (1) (1).pdf";

const slider2 = 50;

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = resume; // Path to your PDF file
  link.download = "Gundappa_Patil_Resume.pdf"; // Set the download file name
  link.click();
};
</script>

<style lang="scss" scoped>
.egg {
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  background-color: #fbdf7e;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

@media only screen and (max-width: 800px) {
  .egg {
    width: 200px;
  }
}
</style>
