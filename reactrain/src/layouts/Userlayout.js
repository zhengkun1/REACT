import React from 'react';
import { Layout } from 'antd';
import styles from './Userlayout.less';
// import default from 'antd/lib/layout';

const { Header, Footer, Content } = Layout;
class Userlayout extends React.PureComponent {
  render() {
    const layout = (
      <div>
        <Layout>
          <Header className={styles.header}>点此输入你的账号密码</Header>
          <Content>
            <div style={{ minHeight: 'calc(100vh - 110px)' }}>
             登录界面
            </div>
          </Content>
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
