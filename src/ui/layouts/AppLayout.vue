<template>
  <section class="hero is-light is-fullheight">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <slot name="header" />
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <slot />
    </div>
  </section>
</template>

<script>
export default {};
</script>
