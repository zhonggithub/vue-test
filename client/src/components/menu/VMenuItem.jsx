/*
 * @Author: Zz
 * @Date: 2017-02-09 18:03:18
 * @Last Modified by: Zz
 * @Last Modified time: 2017-02-09 22:16:18
 */
import './style/index.less';

export default {
  props: {

  },
  data: function() {
    return {};
  },
  computed: {
    text: {
      get: function() {
        return this.$slots.default.length >= 1 ? this.$slots.default[0] : '';
      }
    },
  },
  render: function(h) {
    return (<li class='ant-menu-item'>{this.text}</li>);
  }
}