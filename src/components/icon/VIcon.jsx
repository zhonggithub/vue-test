/*
 * @Author: Zz
 * @Date: 2017-02-09 14:28:18
 * @Last Modified by: Zz
 * @Last Modified time: 2017-02-14 14:25:52
 */
import "./style/iconfont.css";

export default {
  props: {
   type: {
      type: String,
      required: true,
    },
    size: {
      type: [Number, String],
    },
    color: {
      type: String,
    },
  },
  data: function() {
    return {}
  },
  render: function(h) {
    const style = {};
    if (this.size) {
        style['font-size'] = `${this.size}px`;
    }
    if (this.color) {
        style.color = this.color;
    }
    return <i class={`icon-${this.type}`} style={style}></i>
  }
}