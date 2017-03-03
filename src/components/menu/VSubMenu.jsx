/*
 * @Author: Zz
 * @Date: 2017-03-02 16:55:31
 * @Last Modified by: Zz
 * @Last Modified time: 2017-03-02 17:41:31
 */
export default {
  name: 'VMenuItem',
  props: {
    title: {
      type: [Object, String],
    },
    style: {
      type: String,
    },
    click: {
      type: Function,
    },
    id: {
      type: String,
      required: true,
    },
    children: {
      type: Array,
      default: function() {
        return new Array();
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: function() {
    return {
      active: false,
      prefixCls: 'vui-menu-item',
    };
  },
  computed: {
    text: {
      get: function() {
        return this.$slots.default;
      }
    },
    classes: {
      get: function() {
        return [
          this.prefixCls,
          {
            [`${this.prefixCls}-active`]: this.active,
            [`${this.prefixCls}-selected`]: this.active,
            [`${this.prefixCls}-disabled`]: this.disabled,
          }
        ];
      }
    },
  },
  methods: {
    _onClick: function(e) {
      if (this.disabled) {
        return;
      }
      this.$eventHub.$emit('menu-item-click', this.id);
    },
  },
  render: function(h) {
    if (this.class) {
      this.clesses.push(classTmp);
    }
    return (<li class={this.classes} onClick={this._onClick} style={this.style || {}}>{this.text}</li>);
  }
}