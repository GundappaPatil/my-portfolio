<script setup lang="ts">
const scroll = (refName: string) => {
  const element = document.getElementById(refName);
  element?.scrollIntoView({ behavior: "smooth" });
};

// Reusable menu items
const menuItems = [
  { name: "Home", ref: "home", class: "text-yellow" },
  { name: "About", ref: "about" },
  { name: "Portfolio", ref: "portfolio" },
  { name: "Services", ref: "services" },
  { name: "Page", ref: "page" },
  { name: "Blog", ref: "blog" },
  { name: "Contact", ref: "contact" },
];
</script>

<template>
  <VAppBar app color="black" dark flat class="px-12 ">
    <VBtn>
      <VIcon
        color="yellow"
        left
        class="mr-2"
        size="50"
        icon="mdi-alpha-g-circle"
      />Gundu
    </VBtn>
    <VSpacer />
    <v-app-bar-nav-icon id="menu-activator" class="d-md-none" />

    <!-- Buttons for larger screens -->
    <div class="d-none d-md-flex">
      <VBtn
        v-for="item in menuItems"
        :key="item.name"
        variant="text"
        @click="scroll(item.ref)"
        :class="item.class"
      >
        {{ item.name }}
      </VBtn>
    </div>

    <!-- Dropdown for small screens -->
    <VMenu
      activator="#menu-activator"
      width="200"
      z-index="9999"
      transition="slide-x-transition"
      bottom
      scroll-strategy="close"
    >
      <VList>
        <VListItem
          v-for="item in menuItems"
          :key="item.name"
          @click="scroll(item.ref)"
        >
          <VBtn class="w-100" color="primary"> {{ item.name }} </VBtn>
        </VListItem>
      </VList>
    </VMenu>
  </VAppBar>
</template>

<style scoped></style>
