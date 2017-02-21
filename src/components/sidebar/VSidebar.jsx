// import Layout from '../../assets/layout/scripts/layout';

export default {
  data() {
    const menus = [
      {
        'label': '概况',
        'icon': 'icon-home',
        'link': '#!/',
        'subMenus': [],
        'selected': true
      }, {
        'label': '租户管理',
        'icon': 'icon-grid',
        'link': '',
        'selected': false,
        'subMenus': [
          {
            'label': '租户列表',
            'icon': 'icon-list',
            'link': '#!/tenant/list',
            'subMenus': [],
            'selected': false
          }
        ]
      }, {
        'label': '设备管理',
        'icon': 'icon-grid',
        'link': '',
        'selected': false,
        'subMenus': [
          {
            'label': '概况',
            'icon': 'icon-list',
            'link': '#!/device/dashboard',
            'subMenus': [],
            'selected': false
          }, {
            'label': '设备列表',
            'icon': 'icon-list',
            'link': '#!/device/list',
            'subMenus': [
              {
                'label': '测试三级',
                'icon': 'icon-list',
                'link': '#!/device/list',
                'subMenus': [],
                'selected': false
              }
            ],
            'selected': false
          }, {
            'label': 'LinkBroad网关列表',
            'icon': 'icon-list',
            'link': '#!/device/linkbroad/list',
            'subMenus': [],
            'selected': false
          }, {
            'label': '固件管理',
            'icon': 'icon-list',
            'link': '#!/device/firmware/list',
            'subMenus': [],
            'selected': false
          }
        ]
      }
    ];

    return {menus, hello: 'hello world'};
  },
  methods : {
    renderLi(h, menus) {
      return menus.map((item, idx) => {
        return (
          <li class={'nav-item ' + (idx === 0 ? 'start ' : '') + ((idx + 1) === menus.length ? 'last ' : '')}>
            <a href={item.link || 'javascript:;'} class='nav-link nav-toggle'>
              <i class={item.icon}></i>
              <span class="title">{item.label}</span>
              {
                item.link === '' ? <span class="arrow"></span> : ''
              }
            </a>
            {
              item.subMenus.length > 0
              ? <ul class='sub-menu'>
                  {this.renderLi(h, item.subMenus)}
                </ul>
              : ''
            }
          </li>
        );
      })
    }
  },
  created() {
    console.log('created');
  },
  render(h) {
    return (
      <div class="page-sidebar-wrapper">
        <div class="page-sidebar navbar-collapse collapse">
          <ul
            class="page-sidebar-menu page-header-fixed"
            data-keep-expanded="false"
            data-auto-scroll="true"
            data-slide-speed="200">
            {this.renderLi(h, this.menus)}
          </ul>
        </div>
      </div>
    )
  }
}
