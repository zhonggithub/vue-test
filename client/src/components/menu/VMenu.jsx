/*
 * @Author: Zz
 * @Date: 2017-02-09 15:47:30
 * @Last Modified by: Zz
 * @Last Modified time: 2017-02-09 22:17:56
 */
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
    }

  },
  data: function() {
    return {};
  },
  render: function(h) {
    let classTmp = this.theme === "dark" ? 'menu-theme-dark' : 'menu-theme-light';
    switch(this.model) {
      case 'horizontal': {
        classTmp += ',menu-model-h';
      } break;
      case 'vertical': {
        classTmp += ',menu-model-v';
      } break;
      case 'inline': {
        classTmp += ',menu-model-i';
      } break;
    }
    return (
      <ul class={classTmp}>
        <VMenuItem>aaaaaaa</VMenuItem>
      </ul>
    );
  }
}