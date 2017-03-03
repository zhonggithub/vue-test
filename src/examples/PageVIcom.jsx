/*
 * @Author: Zz
 * @Date: 2017-03-02 18:11:09
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-03-03 13:58:53
 */
import { VIcon } from '../components';
import './style';

export default {
  props: {
  },
  data: function() {
    return {
      directionIcons: [
        'rollback',
        'shrink',

        'up',
        'down',
        'left',
        'right',

        'arrow-up',
        'arrow-down',
        'arrow-left',
        'arrow-right',
        // 'arrow-salt',

        'double-right',
        'double-left',
        
        'caret-up',
        'caret-down',
        'caret-left',
        'caret-right',

        'step-backward',
        'step-forward',

        'forward',
        'fast-banckward',
        'fast-forward',
        'fast-backward',

        'up-square',
        'down-square',
        'left-square',
        'right-square',
        'up-square-o',
        'down-square-o',
        'left-square-o',
        'right-square-o',

        'up-circle',
        'down-circle',
        'left-circle',
        'right-circle',
        'up-circle-o',
        'down-circle-o',
        'left-circle-o',
        'right-circle-o',
        
        'swap-left',
        'swap-right',
        'swap',
        
        'totop',
        'upload',
        
        'verticle-left',
        'verticle-right',
      ],
      suggestIcons: [
        'check',
        'check-circle',
        'check-circle-o',
        'check-square-o',
        'check-square',
        'close',
        'close-circle',
        'close-circle-o',
        'close-square-o',
        'close-square',
        'cloud',
        'cloud-download',
        'cloud-download-o',
        'cloud-upload',
        'cloud-upload-o',
        'copy',
        'delete',
        'download',
        'edit',
        'enter',
        'exclamation',
        'exception',
        'exclamation-circle',
        'exclamation-circle-o',
        'export',
        'export1',
        'info',
        'info-circle',
        'info-circle-o',
        'menu-fold',
        'menu-unfold',
        'minus',
        'minus-circle',
        'minus-circle-o',
        'minus-square',
        'minus-square-o',
        'notification',
        'play',
        'play-circle-o',
        'pause',
        'pause-circle',
        'pause-circle-o',
        'plus',
        'plus-circle',
        'plus-circle-o',
        'plus-square',
        'plus-square-o',
        'power-off',
        'question',
        'question-circle',
        'question-circle-o',
        'reload',
        'save',
        'setting',
      ],
      otherIcons: [
        'weixin',
        'weixin-o',
        'appstore',
        'appstore-o',
        'apple',
        'apple-o', 
        'android',
        'aliwangwang',
        'aliwangwang-o',
        'area-chart',
        'bar-chart',
        'line-chart',
        'shopping-cart',
        'dot-chart',
        'pie-chart',
        'bars',
        'bars-chart',
        'book',
        'bulb',
        'calculator',
        'camera-o',
        'chrome',
        'clock-circle',
        'clock-circle-o',
        'code-square',
        'code-square-o',
        'credit-card',
        'dislike-o',
        'dislike',
        'like-o',
        'like',
        'customer-service',
        'ellipsis',
        'enviroment',
        'enviroment-o',
        'eye',
        'eye-o',
        
        'file',
        'file-ext',
        'excle-file',
        'jpg-file',
        'ppt-file',
        'word-file',
        'pdf-file',
        'unknow-file',
        'filter',
        'frown',
        'frown-o',
        'folder',
        'folder-open',
        'github',
        'hdd',
        'heart',
        'heart-o',
        'in-box',
        'home',
        'desktop',
        'ie',
        'laptop',
        'link',
        'lock',
        'unlock',
        'logout',
        'mail',
        'meh',
        'meh-o',
        'message',
        'mobile',
        'paperclip',
        'pay-circle',
        'pay-circle-o',
        'phone',
        'picture',
        'pushpin-o',
        'pushpin',
        'qrcode',
        'search',
        'select',
        'sharealt',
        'scan',
        'smile-circle',
        'smile-o',
        'star',
        'star-o',
        'solution',
        'tablet',
        'tag',
        'tag-o',
        'tags',
        'tags-o',
        'team',
        'video-camera',
        'windows',
        'windows-o',
        'fax',
      ],
    }
  },
  methods: {
    renderItem: function(h, icon) {
      return <li class='icon-list-li'><VIcon type={icon}/><span>{icon}</span></li>
    },
    renderIcon: function(h, type) {
      let icons = [];
      switch (type) {
        case 'direction':
          icons = this.directionIcons.map(item => {
            return this.renderItem(h, item);
          });
          break;
        case 'suggest':
          icons = this.suggestIcons.map(item => {
            return this.renderItem(h, item);
          });
          break;
         case 'other':
          icons = this.otherIcons.map(item => {
            return this.renderItem(h, item);
          });
          break;
      }
      return <ul>{icons}</ul>
    }
  },
  render: function(h) {
    return (
      <div class='layout-content'>
        <h1>Icon 图标</h1>
        <h3>方向类</h3>
          { this.renderIcon(h, 'direction') }
        
        <h3 class='h3-style'>提示建议类</h3>
          { this.renderIcon(h, 'suggest') }
        <h3 class='h3-style'>其他类</h3>
          { this.renderIcon(h, 'other') }
      </div>
    );
  }
}