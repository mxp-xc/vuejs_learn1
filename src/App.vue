<template>
  <div id="app">
    <tab-bar></tab-bar>
    <router-view/>
  </div>
</template>

<script>
  import TabBar from "@/components/content/TabBar";

  export default {
    mode: 'history',
    components: {
      TabBar,
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
