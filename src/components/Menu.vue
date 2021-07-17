<template>
  <div class="menu-icon" :class="{ open: displayMenu }">
    <transition name="rotation" mode="out-in">
    <font-awesome-icon
      v-if="!displayMenu"
      key="open"
      class="button"
      :icon="['fas', 'bars']"
      @click="changeDisplayMenu(true)"
    />
    <font-awesome-icon
      v-else
      key="close"
      class="button"
      :icon="['fas', 'times']"
      @click="changeDisplayMenu(false)"
    />
    </transition>
  </div>
  <div class="menu" :class="{ open: displayMenu }">
    <ul>
      <li v-for="item in menuList" :key="item.name" @mouseover="changeRoute(item.name)" @click="pickMenu(item.name)">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Menu',
  data() {
    return {
      menuList: [
        {
          name: 'Home',
          label: 'Accueil',
        },
        {
          name: 'Competences',
          label: 'Compétences',
        },
        {
          name: 'Services',
          label: 'Services',
        },
        {
          name: 'Portfolio',
          label: 'Portfolio',
        },
        {
          name: 'Contact',
          label: 'Contact',
        },
      ],
    }
  },
  computed: {
    ...mapState(['displayMenu']),
  },
  methods: {
    ...mapActions(['changeDisplayMenu']),
    changeRoute(routeName) {
      this.$router.push({ name: routeName })
    },
    pickMenu(routeName) {
      this.changeRoute(routeName)
      this.changeDisplayMenu(false)
    },
  },
}
</script>

<style lang="scss">
  .menu-icon {
    position: absolute;
    right: 1em;
    top: 1em;
    cursor: pointer;
    z-index: 1;
    transition: color .3s ease-out;
    &.open {
      color: $color-secondary;
    }
    .button {
      width: 2em;
      height: 2em;
    }
  }
  .menu {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(100%, -50%);
    color: $color-secondary;
    transition: transform .3s ease-in-out;
    &.open {
      transform: translate(-2em, -50%);
    }
    ul {
      @include respond-to('medium-up') {
        font-size: 2.8rem;
      }
      font-size: 1.6rem;
      list-style: none;
      text-align: right;
      display: flex;
      flex-direction: column;
      gap: 0.8em;
      li {
        padding: 0.8rem 0;
        font-weight: 600;
        cursor: pointer;

        font-family: "Poppins";
        transition: color .2s ease-out, padding .3s ease-out;
        &:hover {
          color: $color-font-highlight;
          padding: 0.8rem 1rem 0.8rem 0;
        }
      }
    }
  }
</style>
