/*
 * @Author: Zz
 * @Date: 2017-02-09 15:47:30
 * @Last Modified by: Zz
 * @Last Modified time: 2017-03-02 17:40:58
 */
export default {
  props: {
    theme: {
      type: String,
      default: 'light', // light, dark
      validator: function(value) {
        switch(value) {
          case 'light': case 'dark':
            return true;
          default:
            return false;
        }
      }
    },
    model: {
      type: String,
      default: 'horizontal', // horizontal , vertical, inline
      validator: function(value) {
        switch(value) {
          case 'horizontal': case 'vertical': case 'inline':
            return true;
          default: 
            return false;
        }
      }
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
    return {
      prefixCls: 'vui-menu',
      activeKey: null,
      classes: [
        'vui-menu',
        `vui-menu-${this.theme}`,
        `vui-menu-${this.model}`,
      ]
    };
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
      this.activeKey = keyId;
      if (this.click) {
        this.click(keyId);
      }
    },

    updateActiveKey() {
      this.$children.forEach((item, index) => {
        if (item.$options.name === 'VMenuItem') {
          item.active = item.id === this.activeKey;
        }
      });
    },
  },
  watch: {
    activeKey() {
      this.updateActiveKey();
    },
  },
  created: function() {
    this.$eventHub.$on('menu-item-click', this.onMenuItemClick); 
  },
  render: function(h) {
    return (
      <ul class={this.classes} style={this.style}>
        { this.items }
      </ul>
    );
  }
}