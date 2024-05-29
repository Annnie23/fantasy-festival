<!-- Dette er et simpelt layout for en Vue-applikation med tre hovedkomponenter: 
  SiteNavigation, RouterView, og FooterView, 
  der er indlejret i en flex-container med en hvid baggrund. 
  Komponenten RouterView viser dynamisk indhold baseret på den aktuelle URL. -->

<template>
  <div class="flex flex-col min-h-screen bg-white">
    <SiteNavigation />
    <RouterView />
    <FooterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
import FooterView from "./components/FooterView.vue";
</script>

<style lang="scss" scoped></style>
