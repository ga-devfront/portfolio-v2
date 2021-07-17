<template>
  <div class="home">
    <h1>
      <span class="background">
        <font-awesome-icon :icon="['fab', 'vuejs']"/>
      </span>
      <span class="pre-title">Bonjour, je suis</span>
      <span class="title">Alexis</span>
      <span class="sub-title"><font-awesome-icon :icon="['fas', 'code']"/> Développeur d'applications frontend</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss">
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    position: relative;
    @include respond-to('medium') {
      font-size: 0.9rem;
    }
    display: flex;
    flex-direction: column;
    .pre-title {
      font-weight: 400;
      color: darken($color-light, 15%);
    }
    .title {
      font-size: 5em;
    }
    .sub-title {
      color: $color-font-highlight;
    }
    .background {
      color: $color-dark;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 15em;
      opacity: 0.5;
      z-index: -1;
    }
  }
}
</style>
