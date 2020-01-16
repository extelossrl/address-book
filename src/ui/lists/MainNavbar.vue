<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <strong>{{ $t("app.title") }}</strong>
        </router-link>
        <span class="navbar-burger burger" data-target="navbarMenuHeroC">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroC" class="navbar-menu">
        <div class="navbar-end">
          <router-link
            active-class="is-active"
            class="navbar-item"
            v-for="item in items"
            :key="item.to"
            :to="item.to"
            >{{ item.label }}</router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [{ to: "/", label: "Home Page" }]
    }
  }
};
</script>
