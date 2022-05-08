<!-- this page is for your understanding of my knowledge about API and how to deal with it -->

<!--<template>
  <div>
    <h1>hi</h1>
    <div v-for="post in posts" v-bind:key="post.id">{{post}}</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      posts: [],
    };
  },
   async created() {

       this.getData()
     },

  methods: {
    
     async getData() {
      try {
        const response = await axios.get(
          "https://tarkhineh.yasna.live/api/modular/v1/tagging-labels?slug=blog-category&including[]=image&including[]=title&including[]=slug"
        );
        // JSON responses are automatically parsed.
        this.posts = response.data;
        console.log(this.posts)
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script> 


