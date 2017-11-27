import React from 'react';
import { Layout } from 'antd';
// import default from 'antd/lib/layout/layout';
import { ContainerQuery } from 'react-container-query';
import DocumentTitle from 'react-document-title';
import classNames from 'classNames';

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
class Basiclayout extends React.PureComponent {
  render() {
    const layout = (
      <div>
        <Layout>
          <Sider>侧边栏</Sider>
          <Layout>
            <Header>标题栏</Header>
            <Content>内容</Content>
            <Footer>底部</Footer>
          </Layout>
        </Layout>
      </div>
    );
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}
export default Basiclayout;
