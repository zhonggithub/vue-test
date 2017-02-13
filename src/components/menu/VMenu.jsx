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
    },
    style: {
      type: String,

    },
  },
  data: function() {
    return {};
  },
  methods: {
    _onClick(menuItemName, e) {
      console.log(menuItemName, e);
    },
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
        <VMenuItem name='aa' click={this._onClick}>aaaaaaa</VMenuItem>
        <VMenuItem name='yu8' click={this._onClick} style={{background: '#293542'}}>bbba</VMenuItem> 
        <VMenuItem name='ty77' click={this._onClick}><a href='www.baidu.com'>uuuuu</a></VMenuItem>
      </ul>
    );
  }
}