<template>
  <Menu />
  <article class="wrapper" :class="menuClass">
    <router-view/>
  </article>
</template>

<script>
import { mapState } from 'vuex'

import Menu from './components/Menu.vue'

export default {
  components: {
    Menu,
  },
  computed: {
    ...mapState(['displayMenu']),
    menuClass() {
      return this.displayMenu ? 'menu-open' : ''
    },
  },
}
</script>

<style lang="scss">
.wrapper {
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $color-background-primary;
  position: absolute;
  z-index: 0;
  border-radius: 0;
  transition: height .3s ease-in-out, width .3s ease-in-out, border-radius .3s ease-in-out, transform .3s ease-in-out, top .3s ease-in-out, right .3s ease-in-out, box-shadow .3s ease-in-out;
  &.menu-open {
    right: calc(12em + 10%);
    top: 50%;
    transform: translate(0, -50%) skew(0, -5deg) scale(0.8);
    border-radius: 0.5em;
    box-shadow: 0 1em 2em 0 $color-background-primary;
  }
}
</style>
