<template>
<header>
    <el-menu theme="dark" mode="horizontal">
        <span class="header-title">{{title}}</span>
        </el-menu>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['openSidebar', 'title']
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
header {
    z-index: 6;
    background: #fff;
    border-bottom: 1px solid $grey;
    box-shadow: inset 0 0 0 0 $grey,0 2px 1px 0 rgba(47,61,73,.05);
    color: #2e3d49;
    position: fixed;
    transform-style: preserve-3d;
    will-change: transform;
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-property: transform;
    width: 100%;
    height: $header-height;
      .el-menu {
        border-radius: 0;
        background: #0033cc;

    }

    &.no_sidebar {
        transform: translate3d(0, 0, 0)!important;
        width: 100%;
    }

    .header-navicon {
        display: flex;
        align-items: center;
        align-content: center;
        @include respond-to('lg') {
            display: none;
        }
        i {
            color: $white!important;
            font-size: 2rem!important;
        }
    }
    .header-menu {
        float: right!important;
    }

    .header-title {
        font-size: 24px;
        color: $white;
        margin-left: 15px;
        line-height: 60px;
        @include respond-to('lg') {
            margin-left: 24px;
        }
    }
}
</style>
