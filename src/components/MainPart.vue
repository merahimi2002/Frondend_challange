<!-- B in Challange Frontend   or    Step two in Project -->
<template>
    <div v-for="obj in objs.results" v-bind:key="obj.i" class="MainItem"> 

        <div  class="MainItem__SectionOne"  style="position: relative;">

            <img :src= "obj.image.link " alt="food pic">
            <div class="MainItem__label MainItem__label--action">{{obj.type.title}}</div>
        </div>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با ...  .</p>
        <div class="MainItem__SectionTwo">

            <div class="MainItem__PartOne">
                 <div><p>5 دیدگاه</p></div>
                 <div class="MainItem__Image" ><img src="@/assets/img/comment.png" alt="food pic" ></div>
            </div>
            <div class="MainItem__PartTwo">
                <div><p>{{obj.publisher.name_full}} </p></div>
                <!-- your picture link about avatar didnt work so i replaced it -->
                <div><img src= "@/assets/img/avatar.jpg" alt="food pic"></div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data(){

        return{
            
            objs : { results: [] }
        }
    },
    async mounted(){

        // if you want to use api you have to uncomment the line below but it is possible to recive cors error
        // const res = await fetch ('https://tarkhineh.yasna.live/api/modular/v1/content-post-lists?')
        const res = await fetch ('./public/Json/response.json')
        const data = await res.json()
        this.objs = data 
    }
}
</script>

