/*
 * @Author: Zz
 * @Date: 2017-03-02 18:11:09
 * @Last Modified by: Zz
 * @Last Modified time: 2017-03-02 18:33:40
 */
import { VIcon } from '../components';

export default {
  props: {
  },
  data: function() {
    return {}
  },
  render: function(h) {
    return (
      <div>
        <tr>方向类</tr>
        <VIcon type='arrow-down'/>arrow-down
        <VIcon type='arrow-left'/>arrow-left
        <VIcon type='arrow-right'/>arrow-right
      </div>
    );
  }
}