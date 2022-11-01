import { Menu, Affix, Row, Col } from "antd"
import {
  HomeOutlined,
  FireOutlined,
  DribbbleCircleFilled,
  DollarOutlined,
  PlusCircleFilled
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import RepasseLogo from '../../assets/RepasseIcon2.svg'

function Nav() {
  const navigate = useNavigate();
  const items = [
    { label: 'Home', key: '/Home', icon: <HomeOutlined /> },
    {
      label: 'Eventos', key: '/Eventos', icon: <FireOutlined />,
      children: [{label:'Criar novo evento', key:'AddEvento', icon:<PlusCircleFilled />}
        ,{
        label: 'Esportes', key: '/Eventos-Esportes', icon: <DribbbleCircleFilled />, link: '',
        children: [{ label: 'Futebol', key: '/Eventos-Esportes-Futebol' },
        { label: 'Basquete', key: '/Eventos-Esportes-Basquete' },
        { label: 'Volei', key: '/Eventos-Esportes-Volei' },
        { label: 'Outros', key: '/Eventos-Esportes-Outros' }]
      },
      { label: 'Festas Universitárias', key: '/Eventos-FestUni' }]
    },
    { label: 'Vender meu ingresso', key: '/Vendas', icon: <DollarOutlined /> }
  ]
  return (
    <>
      <Affix offsetTop={5}>
        <Row style={{ marginTop: '0px' }}>
          <Col>
            <img src={RepasseLogo} style={{ width: '200px', position: 'relative', bottom: '70px', marginRight: '200px' }} />
          </Col>
          <Col>
            <Menu mode="horizontal" onClick={({ key }) => {
              navigate(key);
            }} items={items} />
          </Col>
        </Row>
      </Affix>
    </>
  )
}
export default Nav