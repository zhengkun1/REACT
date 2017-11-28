import React from 'react';
import { Menu, Icon, Layout } from 'antd';
// import default from 'antd/lib/layout/layout';
import { ContainerQuery } from 'react-container-query';
// import DocumentTitle from 'react-document-title';
import classNames from 'classnames';
import { Link } from 'dva/router';
import styles from './Basiclayout.less';

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};
const { Header, Sider, Footer, Content } = Layout;
const SubMenu = Menu.SubMenu;
class Basiclayout extends React.PureComponent {
  // state = {
  //   collapsed: false,
  // }
  // toggleCollapsed = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // }
  render() {
    const layout = (
      <div>
        <Layout>
          <Sider>
            <div className={styles.logo}>
              <Link to="/">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511856312156&di=0ce823e8153d811a7dadd328b207480f&imgtype=0&src=http%3A%2F%2Fp2.qhimg.com%2Ft0145a60954e264f295.png" alt="logo" />
                <h1>H1Z1饰品</h1>
              </Link>
            </div>
            <Menu
              onClick={this.handleClick}
              style={{ width: 200 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>枪支</span></span>}>
                <Menu.Item key="5">霰弹枪</Menu.Item>
                <Menu.Item key="6">AR-15</Menu.Item>
                <Menu.Item key="6">AK</Menu.Item>
                <SubMenu key="sub3" title="AK">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span>鞋子</span></span>}>
                <Menu.Item key="9">潜行鞋</Menu.Item>
                <Menu.Item key="10">运动鞋</Menu.Item>
                <Menu.Item key="11">工作鞋</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header>标题栏</Header>
            <Content>
              <div style={{ minHeight: 'calc(100vh - 110px)' }}>neirong</div>
            </Content>
            <Footer>底部</Footer>
          </Layout>
        </Layout>
      </div>
    );
    return (
      <ContainerQuery query={query}>
        {params => <div className={classNames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}
// ReactDOM.render(<App />, mountNode);
export default Basiclayout;
