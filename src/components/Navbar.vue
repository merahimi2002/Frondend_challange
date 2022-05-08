<!-- A in Challange Frontend   or    Step one in Project -->
<template>
    <div v-for="item in items.results" v-bind:key="item.x" class="NavBarItem">
        <!-- this  action is for link to the side page but it was not in project  -->
        <div @click="move" class="NavBarItem__Section NavBarItem__Section--action"> 
            <div class="NavBarItem__image">
                <img v-if=" item.image != null " :src= "item.image[0].link " alt="food pic" >
                <!-- I add this part to complete design and it wasn't on project -->
                <img v-else src= "@/assets/img/foood.jpg" alt="food pic" > 
            </div>
            <div class="NavBarItem__text ">{{item.title}} </div>
        </div>
    </div>
</template>

<script>
export default {

    data(){

        return{
            
            items:[],
        }
    },
    methods:{

        move(){

            this.$router.push('./SidePage'); 
        }
    },
    async mounted(){

        // if you want to use api , you have to uncomment the line below but it is possible to recive cors error
        // const res = await fetch ('https://tarkhineh.yasna.live/api/modular/v1/tagging-labels?slug=blog-category&including[]=image&including[]=title&including[]=slug')
        const res = await fetch ('./public/Json/tagging-labels.json')
        const data = await res.json()
        this.items = data
        
    }
}
</script>

