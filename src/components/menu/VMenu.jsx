/*
 * @Author: Zz
 * @Date: 2017-02-09 15:47:30
 * @Last Modified by: Zz
 * @Last Modified time: 2017-02-14 16:38:12
 */
import Vue from 'vue';
import './style/index.less';
import VMenuItem from './VMenuItem';

export default {
  props: {
    theme: {
      type: String,
      default: 'light', // light, dark
    },
    model: {
      type: String,
      default: 'horizontal', // horizontal , vertical, inline
    },
    style: {
      type: String,
    },
    click: {
      type: Function,
    },
    selectedKeys: {
      type: Array,
      default: function() {
        return new Array();
      },
    },
    defaultSelectedKeys: {
      type: Array,
    },
    openKeys: {
      type: Array,
      default: function() {
        return new Array();
      },
    },
    defaultOpenKeys: {
      type: Array,
    },
  },
  data: function() {
    return {};
  },
  computed: {
    items: {
      get: function() {
        return this.$slots.default;
      }
    },
  },
  methods: {
    onMenuItemClick(keyId) {
      if (this.selectedKeys.length === 0) {
        this.selectedKeys.push(keyId);
      } else {
        this.selectedKeys[0] = keyId;
      }
      if (this.click) {
        this.click(keyId);
      }
    }
  },
  created: function() {
    this.$eventHub.$on('menu-item-click', this.onMenuItemClick); 
  },
  render: function(h) {
    let classTmp = this.theme === "dark" ? 'menu-theme-dark' : 'menu-theme-light';
    switch(this.model) {
      case 'horizontal': {
        classTmp += ' menu-model-h';
      } break;
      case 'vertical': {
        classTmp += ' menu-model-v';
      } break;
      case 'inline': {
        classTmp += ' menu-model-i';
      } break;
    }
    classTmp += ' vui-menu';
    return (
      <ul class={classTmp} style={this.style}>
        { this.items }
      </ul>
    );
  }
}