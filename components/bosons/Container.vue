<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
$breakpoints: (
  smaller: (
    max-width: 600px
  ),
  medium: (
    min-width: 600px
  )
  and
  (
    max-width: 992px
  ),
  large: (
    min-width: 992px
  )
  and
  (
    max-width: 1200px
  ),
  infinity: (
    min-width: 1200px
  )
) !default;

@mixin screen($sizes...) {
  @each $value in $sizes {
    @if map-has-key($breakpoints, $value) {
      @media #{inspect(map-get($breakpoints, $value))} {
        @content;
      }
    } @else {
      @warn "Unfortunately, no value could be retrieved from `#{$value}`. "
            + "Available breakpoints are: #{map-keys($breakpoints)}.";
    }
  }
}
.container {
  margin: 0 auto;
  max-width: 1100px;
  @include screen('smaller') {
    width: 90%;
  }
  @include screen('medium') {
    width: 90%;
  }
  @include screen('large', 'infinity') {
    width: 95%;
  }
}
</style>
