<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :data="swipterData"></home-swiper>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import HomeSwiper from "@/views/home/swipter";
  import HomeRequest from "@/network/home"

  export default {
    name: "Home",
    data() {
      return {
        swipterData: {}
      }
    },

    components: {
      HomeSwiper,
      NavBar,
    },

    created() {
      HomeRequest.getHomeMultiData().then(data => {
        this.swipterData = data
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
