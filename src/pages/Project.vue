<script setup>
import projectList from "@/utils/projectList";
</script>

<template>
  <div>
    <VCol cols="12" class="padd" id="project">
      <div class="first" id="project">
        <VRow>
          <VCol cols="12">
            <div class="child">
              <VBtn icon="mdi-laptop" color="#FBDF7E" class="text-white"></VBtn>
              <h3 class="ml-3 mt-4">Projects</h3>
            </div>
          </VCol>
        </VRow>
        <VRow>
          <!-- <template > -->
          <v-col cols="12" md="3" v-for="(item, i) in projectList" :key="i">
            <v-hover v-slot="{ isHovering, props }">
              <v-card-title class="text-h6 text-black d-flex flex-column">
                <p class="mt-4">
                  {{ item.name }}
                </p>
              </v-card-title>
              <v-card
                class="ma-4"
                :class="{ 'on-hover': isHovering }"
                :elevation="isHovering ? 12 : 2"
                v-bind="props"
              >
                <v-img :src="item.img" height="225px" cover> </v-img>
              </v-card>
            </v-hover>
          </v-col>
          <!-- </template> -->
        </VRow>
        <VDivider></VDivider>
      </div>
    </VCol>
  </div>
</template>

<style lang="scss" scoped>
.first {
  width: 100%;
  height: auto;
  text-align: center;
  padding: 2rem 2rem;
}
.child {
  display: inline-block;
  // padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}

.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
