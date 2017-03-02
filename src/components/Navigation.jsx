/*
 * @Author: Zz
 * @Date: 2017-02-09 15:00:42
 * @Last Modified by: Zz
 * @Last Modified time: 2017-03-02 11:24:48
 */
import "./style.less";
import { VMenu, VMenuItem } from './menu';

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
        <VMenu style={{background: '#293542'}} click={this.click}>
          <VMenuItem keyId='aa' >aaaaaaa</VMenuItem>
          <VMenuItem keyId='yu8' style={{background: '#293542'}}>bbba</VMenuItem> 
          <VMenuItem keyId='ty77'><a href='www.baidu.com'>uuuuu</a></VMenuItem>
        </VMenu>
      </div>
    ); 
  },
};