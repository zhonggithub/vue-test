import "./style.less";
import { VMenu, VMenuItem } from './menu';
import VIcon from './icon';

export default {
  props: {
  },
  data: function() {
   return {}; 
  },
  methods: {
    click(keyId) {
      console.log('nav', keyId);
    },
  },
  render: function(h) {
    return (
      <div>
        <VMenu model='vertical' theme='light' click={this.click}>
          <VMenuItem id='icon'><router-link to="/icon"/>Icon图标</VMenuItem>
          <VMenuItem id='yu8'><VIcon type='message'/>侧边菜单二</VMenuItem> 
          <VMenuItem id='ty77'><a href="https://ant.design" target="_blank" rel="noopener noreferrer">uuuuu</a></VMenuItem>
        </VMenu>
      </div>
    ); 
  },
};