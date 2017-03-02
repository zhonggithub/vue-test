import "./style.less";
import VIcon from './icon';
import Navigation from './Navigation';

export default {
  props: {
    collapse : {
      type: Boolean,
      default: false,
    }
  },
  data: function() {
    return {
      
    };
  },
  components: {
  },
  methods: {
    onCollapseChange: function() {
      this.collapse = !this.collapse;
    },
    renderSiderNav: function() {

    },
  },
  render: function(h) {
    const logo = require('../images/logo.png');
    const collapse = this.collapse;
    return (
      <div class={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
        <aside class="ant-layout-sider">
          <div class="ant-layout-logo">
            {collapse ? <img style={{marginLeft: '-28px'}} src={logo}/> : <img src={logo}/>}
          </div>
          {/*{this.renderSideNav()}*/}
          <div class="ant-aside-action" onClick={this.onCollapseChange}>
            {collapse ? <VIcon type='right' /> : <VIcon type='left' />}
          </div>
        </aside>
        <div class="ant-layout-main">
          <div class="hms-layout-nav-header">
            <Navigation/>
          </div>
          <router-view></router-view>
        </div>
        {/*<Footer/>*/}
      </div>
    );
  }
};