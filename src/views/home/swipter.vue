<template>
  <div class="swipter">
    <swiper>
      <swiper-item v-for="item in data.data.banner.list">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from "@/components/common/swiper/index"

  export default {
    name: "HomeSwiper",
    props: {
      data: Object
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
