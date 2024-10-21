<template>
  <div>
    <VRow class="text-center">
      <VCol cols="12">
        <div class="child">
          <VBtn icon="mdi-laptop" color="#FBDF7E" class="text-white"></VBtn>
          <h3 class="mt-4">Skills</h3>
        </div>
      </VCol>
    </VRow>
    <VRow>
      <VCol
        cols="12"
        class="d-flex flex-column flex-sm-row ga-1 justify-center mb-6"
        id="skills"
      >
        <!-- <div class="d-flex justify-center mb-6"> -->
        <div
          class="text-black px-4 py-2 bg-grey-lighten-1 cursor-pointer rounded"
        >
          <VIcon color="orange" icon="mdi-language-html5" class="mr-2"></VIcon>
          <span>HTML</span>
        </div>
        <div
          class="text-black px-4 py-2 bg-grey-lighten-1 cursor-pointer rounded"
        >
          <VIcon color="blue" icon="mdi-language-html5" class="mr-2"></VIcon>
          <span>CSS</span>
        </div>
        <div
          class="text-black px-4 py-2 bg-grey-lighten-1 cursor-pointer rounded"
        >
          <VIcon
            color="yellow"
            icon="mdi-language-javascript"
            class="mr-2"
          ></VIcon>
          <span>JavaScript</span>
        </div>
        <div
          class="text-black px-4 py-2 bg-grey-lighten-1 cursor-pointer rounded"
        >
          <VIcon color="green" icon="mdi-vuejs" class="mr-2"></VIcon>
          <span>Vue JS</span>
        </div>
        <div
          class="text-black px-4 py-2 bg-grey-lighten-1 cursor-pointer rounded"
        >
          <VIcon color="blue" icon="mdi-react" class="mr-2"></VIcon>
          <span>React JS</span>
        </div>

        <!-- </div> -->
      </VCol>
    </VRow>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
