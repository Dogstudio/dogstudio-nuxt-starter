<template>
  <section class="site-welcome">
    <div class="container">
      <div class="site-welcome__section">
        <h2 class="site-welcome__title">Languages</h2>

        <ul class="site-welcome__list">
          <li><nuxt-link :to="switchLocalePath('en')">English</nuxt-link></li>
          <li><nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link></li>
          <li><nuxt-link :to="switchLocalePath('ar')">Arabic</nuxt-link></li>
        </ul>

        <p class="site-welcome__text">{{ $t('welcome') }}</p>
      </div>

      <div class="site-welcome__section">
        <h2 class="site-welcome__title">Icons</h2>
        <ul class="site-welcome__list">
          <li><Icon name="sample" :width="24" :height="24" /></li>
        </ul>
      </div>

      <div class="site-welcome__section">
        <h2 class="site-welcome__title">Videos</h2>
        <video src="/assets/videos/sample.mp4" controls></video>
      </div>

      <div class="site-welcome__section">
        <h2 class="site-welcome__title">Audios</h2>
        <audio src="/assets/audios/sample.mp3" controls></audio>
      </div>

      <div class="site-welcome__section">
        <h2 class="site-welcome__title">Images</h2>
        <img src="~/assets/images/sample.jpg" alt="" />
        <img src="~/assets/images/sample.png" alt="" />
        <img src="~/assets/images/sample.gif" alt="" />
        <img src="~/assets/images/sample.webp" alt="" />
      </div>

      <div class="site-welcome__section">
        <h2 class="site-welcome__title">Backgrounds</h2>
        <div class="site-welcome__background site-welcome__background--jpg" />
        <div class="site-welcome__background site-welcome__background--png" />
        <div class="site-welcome__background site-welcome__background--gif" />
        <div class="site-welcome__background site-welcome__background--webp" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SiteWelcome',
}
</script>

<style lang="scss">
@use 'sass:math';

// Variables
$formats: ('jpg', 'png', 'gif', 'webp');

.site-welcome {
  font-family: 'Avenir', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: math.div(22, 16);
  padding-top: 100px;
  padding-bottom: 100px;

  &__section {
    margin-bottom: 50px;

    div,
    img,
    video,
    audio {
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }
  }

  &__list {
    display: flex;
    align-items: center;

    li {
      + li {
        margin-left: 10px;

        [dir='rtl'] & {
          margin-left: initial;
          margin-right: 10px;
        }
      }
    }

    + * {
      margin-top: 10px;
    }
  }

  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  &__background {
    width: 100%;
    height: 0;
    padding-top: math.div(9, 16) * 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;

    @each $format in $formats {
      &--#{$format} {
        background-image: url('~/assets/images/sample.#{$format}');
      }
    }
  }
}
</style>
