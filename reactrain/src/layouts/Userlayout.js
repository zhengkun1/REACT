import React from 'react';
import { Layout } from 'antd';
// import default from 'antd/lib/layout';

const { Header, Footer, Content } = Layout;
class Userlayout extends React.PureComponent {
  render() {
    const layout = (
      <div>
        <Layout>
          <Header>Header</Header>
          <Content>这是一个Content</Content>
          <Footer>这是一个Footer</Footer>
        </Layout>
      </div>
    );
    return (
      <div>{layout}</div>
    );
  }
}
export default Userlayout;
