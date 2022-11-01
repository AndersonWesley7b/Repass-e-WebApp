import 'antd/dist/antd.css'
import { Layout } from 'antd'
import RoutesJs from '../../Routes/RoutesJs';
import './index.css'
import Nav from '../Nav/Nav';



function LayoutDefault() {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout classname="layout">
      <Header style={{ backgroundColor: 'white' }}>
        <div className='logo' />

        <Nav />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <RoutesJs />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Repass-e Created in 2022</Footer>
    </Layout>
  );
}
export default LayoutDefault;