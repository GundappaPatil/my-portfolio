<template>
    <div>
        <VCol cols="12" class="padd" id="portfolio">
        <div class="first" id="project">
          <VRow>
            <VCol cols="12">
              <div class="child">
                <VBtn
                  icon="mdi-laptop"
                  color="#FBDF7E"
                  class="text-white"
                ></VBtn>
                <h3 class="ml-3 mt-4">Web Design</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Lorem ipsum dolor sit. <br />Lorem ipsum dolor sit.<br />Lorem
                  ipsum dolor sit.
                </p>
              </div>
            </VCol>
          </VRow>
          <VDivider></VDivider>
        </div>
      </VCol>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

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

</style>