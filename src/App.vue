<template>
  <v-app >
    <v-content>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500;600&display=swap');

$titleBreakpoint:800px;
$textInputForm: 12px;

//define font size for text inside inputs
@mixin fontFamilySetter ($familyName){
  font-family: $familyName;
}

.input-font{
  @include fontFamilySetter('Comfortaa');
  font-size: $textInputForm !important;
  font-weight: 900 !important;
}

//define breakpoints to show/hide the title
@mixin hidden($breakpointType){
  @if($breakpointType){
    @media (max-width: $titleBreakpoint){
      @content
    }
  }
  @else{
    @media(min-width: $titleBreakpoint){
      @content
    }
  }
}

.title{
  &-desktop{
    @include hidden(true){
      display: none;
      visibility: hidden;
    }
  }
  &-mobile{
    @include hidden(false){
      display: none;
      visibility: hidden;
    }
  }
}
</style>

<script>
export default {
  name: 'App',
};
</script>
