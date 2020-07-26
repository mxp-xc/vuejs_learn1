<template>
  <div class="tab-bar">
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </div>
</template>

<script>
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "TabBar",
    components: {
      TabBarItem
    }
  }
</script>

<style scoped>
  .tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 3px rgba(100, 100, 100, .3);

  }
</style>
