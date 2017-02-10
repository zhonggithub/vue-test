/*
 * @Author: Zz
 * @Date: 2017-02-09 14:28:18
 * @Last Modified by: Zz
 * @Last Modified time: 2017-02-10 09:34:16
 */
import "./style/iconfont.css";

export default {
  props: {
    iconfont: {
      type: String,
      required: true,
    },
    style: {
      type: Object,
    }
  },
  data: function() {
    return {}
  },
  render: function(h) {
    return <i class='icon-20151209tubiaolianxizhuanhuan091'></i>
    // return <i class="iconfont" style={this.style || {}}>{ this.iconfont }</i>
  }
}