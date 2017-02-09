<style type="text/css">
.ant-layout-aside {
  position: relative;
  min-height: 100%;
}

.ant-layout-aside .ant-layout-logo {
  width: 150px;
  height: 32px;
  border-radius: 6px;
  margin: 10px 24px 11px 28px;
  transition: all 0.3s ease;
  text-align: center;
}

.ant-layout-aside-collapse .ant-layout-logo {
  width: 32px;
  margin: 10px 16px 11px 16px;
  transition: all 0.3s ease;
}

.ant-layout-aside .ant-layout-sider {
  width: 224px;
  background: #293542;
  position: absolute;
  overflow: visible;
  padding-bottom: 24px;
  height: 100%;
  transition: all 0.3s ease;
}

.ant-layout-aside-collapse .ant-layout-sider {
  width: 64px;
  transition: all 0.3s ease;
}

.ant-menu-submenu-vertical > .ant-menu-submenu-title:after {
    content: ""!important;
}

.ant-menu-inline .ant-menu-item, .ant-menu-vertical .ant-menu-item {
    border-right: 0px solid #e9e9e9!important;
    margin-left: -1px;
    left: 1px;
    position: relative;
    z-index: 1;
}

/* 实际使用中需要改成 position: fixed */
.ant-layout-aside .ant-aside-action {
  height: 42px;
  width: 224px;
  position: fixed;
  bottom: 0;
  background: #656565;
  color: #fff;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ant-layout-aside-collapse .ant-aside-action {
  width: 64px;
  transition: all 0.3s ease;
}

.ant-layout-aside .hms-layout-nav-header {
  background: #fff;
  height: 52px;
  border-bottom: 1px solid #e9e9e9;
  min-width: 1000px;
}

.ant-layout-aside .ant-layout-header {
  background: #fff;
  height: 52px;
  border-bottom: 1px solid #e9e9e9;
}

.ant-layout-aside .ant-layout-main {
  margin-left: 224px;
  transition: all 0.3s ease;
}

.ant-layout-aside-collapse .ant-layout-main {
  margin-left: 64px;
  transition: all 0.3s ease;
}

.ant-layout-aside .ant-layout-footer {
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  text-align: center;
  font-size: 12px;
  color: #999;
  background: #fff;
  border-top: 1px solid #e9e9e9;
  width: 100%;
}

.ant-layout-aside-collapse .ant-layout-sider .ant-menu-submenu-title {
    padding: 0px 16px 0 20px!important;
    font-size: 12px;
    line-height: 42px;
    height: 42px;
}

.ant-logo {
  margin-left: -28px;
}
</style>

<template>
  <div :class="[collapse ? 'ant-layout-aside ant-layout-aside-collapse' : 'ant-layout-aside']">
    <aside class="ant-layout-sider">
      <div class="ant-layout-logo">
        <img :class="[collapse ? 'ant-logo' : '']" src="../images/logo.png">
      </div>
      <page-side-nav></page-side-nav>
      <div class="ant-aside-action" @click="onCollapseChange">

      </div>
    </aside>
    <div class="ant-layout-main">
      <div class="hms-layout-nav-header">
        <page-nav></page-nav>
      </div>
      <page-main></page-main>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
  const Bar = { template: '<div>bar</div>' };
  export default {
    props: {
      collapse : {
        type: Boolean,
        default: false,
      }
    },
    data: function() {
      return {
        
      };
    },
    components: {
      'page-nav': Bar,
    },
    methods: {
      onCollapseChange: function() {
        this.collapse = !this.collapse;
      },
    },
  }

</script>