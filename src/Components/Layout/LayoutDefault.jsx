import 'antd/dist/antd.css'
import { Breadcrumb, Layout, Menu } from 'antd'
import './index.css'
import Nav from '../Nav/Nav';


function LayoutDefault() {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout classname="layout">
      <Header style={{ backgroundColor: 'white' }}>
        <div className='logo'></div>
        <Nav />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Repass-e Created in 2022</Footer>
    </Layout>
  );
}
export default LayoutDefault;