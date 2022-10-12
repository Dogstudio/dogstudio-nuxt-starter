<template>
  <section class="site-grid">
    <div ref="grid" class="site-grid__layout" />

    <div
      ref="toolbar"
      :class="[
        'site-grid__toolbar',
        {
          'site-grid__toolbar--hidden': !showToolbar,
        },
      ]"
    >
      <div class="site-grid__toolbar-inner">
        <div class="site-grid__toolbar-item">
          <input id="toggle-columns" type="checkbox" />
          <label for="toggle-columns">Show Columns</label>
        </div>

        <div class="site-grid__toolbar-item">
          <input id="toggle-gutters" type="checkbox" />
          <label for="toggle-gutters">Show Gutters</label>
        </div>

        <div class="site-grid__toolbar-item">
          <input id="toggle-edges" type="checkbox" />
          <label for="toggle-edges">Show Edges</label>
        </div>
      </div>

      <button
        type="button"
        class="site-grid__toolbar-toggle"
        @click="handleToolbarToggle"
      >
        <span class="u-visually-hidden">Toggle Toolbar</span>
      </button>
    </div>
  </section>
</template>

<script>
// Utils
import Grid from '~/utils/helpers/grid'

export default {
  name: 'SiteGrid',
  data() {
    return {
      showToolbar: true,
    }
  },
  mounted() {
    const Helper = new Grid(this.$refs.grid, this.$refs.toolbar)

    // Grid Observer
    Helper.observe(document.documentElement, [
      '--grid-columns',
      '--grid-gutters',
    ])
  },
  methods: {
    handleToolbarToggle() {
      this.showToolbar = !this.showToolbar
    },
  },
}
</script>

<style lang="scss">
// Variables
$grid-color-edge: #90caf9;
$grid-color-column: #ef9a9a;
$grid-color-gutter: #80cbc4;

$toolbar-color: #fff;
$toolbar-background: #37474f;

.site-grid {
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 99999;
  width: 100%;
  height: 100%;
  max-width: var(--grid-size-max);
  transform: translateX(-50%);
  pointer-events: none;

  &__layout {
    display: flex;
    width: 100%;
    height: 100%;
  }

  &__edge {
    height: 100%;
    flex-basis: var(--grid-edge);
    flex-shrink: 0;
    background-color: rgba($grid-color-edge, 0.2);

    &--0 {
      border-left: 1px solid rgba($grid-color-edge, 0.4);
    }

    &--1 {
      border-right: 1px solid rgba($grid-color-edge, 0.4);
    }
  }

  &__column {
    flex: 1;
    height: 100%;
    border-right: 1px solid rgba($grid-color-column, 0.4);
    border-left: 1px solid rgba($grid-color-column, 0.4);
    background-color: rgba($grid-color-column, 0.2);
  }

  &__gutter {
    height: 100%;
    flex-basis: var(--grid-gutter);
    flex-shrink: 0;
    border-right: 1px solid rgba($grid-color-gutter, 0.4);
    border-left: 1px solid rgba($grid-color-gutter, 0.4);
    background-color: rgba($grid-color-gutter, 0.2);
  }

  &__toolbar {
    position: fixed;
    top: 0;
    left: 50%;
    width: 100vw;
    margin-left: -50vw;
    user-select: none;
    white-space: nowrap;
    pointer-events: auto;

    &-inner {
      display: flex;
      padding: 0 15px;
      overflow-x: scroll;
      overflow-y: hidden;
      background-color: $toolbar-background;

      [dir='rtl'] & {
        flex-direction: row-reverse;
      }
    }

    &-item {
      color: $toolbar-color;
      font-family: 'Helvetica', 'Arial', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 1;

      input[type='checkbox'] {
        position: absolute;
        top: auto;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow-x: hidden;
        overflow-y: hidden;
      }

      input[type='checkbox'] ~ label {
        position: relative;
        padding: 15px;
        display: flex;
        align-items: center;
        cursor: pointer;

        [dir='rtl'] & {
          flex-direction: row-reverse;
        }

        &::before {
          content: '';
          display: block;
          width: 15px;
          height: 15px;
          margin-right: 10px;
          border: 1px solid rgba($toolbar-color, 0.5);
          border-radius: 2px;
        }

        &::after {
          position: absolute;
          top: 19px;
          left: 19px;
          width: 7px;
          height: 7px;
          border-radius: 1px;
          background-color: $toolbar-color;
        }

        .no-touchevents &:hover,
        .no-touchevents &:focus {
          &::before {
            border-color: rgba($toolbar-color, 0.75);
          }
        }
      }

      input[type='checkbox']:checked ~ label {
        &::after {
          content: '';
        }

        &::before {
          border-color: $toolbar-color;
        }
      }

      + .site-grid__toolbar-item {
        input[type='checkbox'] ~ label {
          border-left: 1px solid rgba($toolbar-color, 0.15);
        }
      }
    }

    &-toggle {
      position: absolute;
      top: 100%;
      right: 5px;
      width: 30px;
      height: 20px;
      cursor: pointer;
      background-color: $toolbar-background;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;

      &::after,
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: rotate(180deg);
      }

      &::before {
        margin-top: -4px;
        margin-left: -5px;
        border-top: 5px solid $toolbar-color;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
      }

      &::after {
        margin-top: -2px;
        margin-left: -3px;
        border-top: 3px solid $toolbar-background;
        border-right: 3px solid transparent;
        border-left: 3px solid transparent;
      }
    }

    &--hidden {
      transform: translateY(-100%);

      .site-grid__toolbar-toggle {
        &::after,
        &::before {
          transform: rotate(0deg);
        }

        &::after {
          margin-top: -4px;
        }
      }
    }
  }

  // Modifiers
  &--no-edges {
    .site-grid__edge {
      opacity: 0;
    }
  }

  &--no-columns {
    .site-grid__column {
      opacity: 0;
    }
  }

  &--no-gutters {
    .site-grid__gutter {
      opacity: 0;
    }
  }
}
</style>
