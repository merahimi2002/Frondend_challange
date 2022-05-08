<template>
    <div class="Main_Body">

        <div class="Main__Text"><h1 >دسته بندی ها </h1></div>

        <!-- A in Challange Frontend   or    Step one in Project -->
        <div class="NavBarComponent">
            <Navbar/>
        </div>
        <!-- B in Challange Frontend   or    Step two in Project -->
        <div class="MainPartComponent">

            <MainPart/> 
        </div>

    </div>
</template>




<script>
import Navbar from '@/components/Navbar.vue';
import MainPart from '@/components/MainPart.vue';
export default {
    components : {
    Navbar,
    MainPart
  } 
}
</script>

<style>
@import "@/assets/StyleSheets/Main.css";
@import "@/assets/StyleSheetsComponent/importComponent.css";
</style>
