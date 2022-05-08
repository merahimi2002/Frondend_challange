<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style>
@import "@/assets/App.css";
</style>

<!-- navbar section -->
<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/"> <button>Main</button> </RouterLink>
        <RouterLink to="/sidePage"> <button>SidePage</button> </RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>


<script>
export default{
  
}
</script>



