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
// const Sub  Menu = Menu.SubMenu;
class Basiclayout extends React.PureComponent {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    // const { collapsed } = this.props;
    const { SubMenu } = Menu;
    const layout = (
      <div>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            className={styles.sider}
          >
            <div className={styles.logo}>
              <Link to="/">
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=384327327,1618679991&fm=27&gp=0.jpg" alt="logo" />
                <h1>
                  H1Z1饰品交易
                </h1>
              </Link>
            </div>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="light"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>枪支</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>皮肤</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="inbox" />
                <span>裤子</span>
              </Menu.Item>
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span>头部</span></span>}>
                <Menu.Item key="5">摩托车头盔</Menu.Item>
                <Menu.Item key="6">半盔</Menu.Item>
                <Menu.Item key="7">帽子</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>鞋子</span></span>}>
                <Menu.Item key="9">潜行鞋</Menu.Item>
                <Menu.Item key="10">运动鞋</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header className={styles.header}>
              <Icon
                className={styles.trigger}
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content>
              <div style={{ minHeight: 'calc(100vh - 110px)' }}>Loading......</div>
            </Content>
            <Footer>
              this is a fotter!!!
            </Footer>
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
