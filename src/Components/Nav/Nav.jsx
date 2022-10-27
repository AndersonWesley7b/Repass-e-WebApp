import { Menu, Affix } from "antd"
import {
  HomeOutlined,
  FireOutlined,
  DribbbleCircleFilled,
  DollarOutlined
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const navigate = useNavigate();
  const items = [
    { label: 'Home', key: '/Home', icon: <HomeOutlined /> },
    {
      label: 'Eventos', key: '/Eventos', icon: <FireOutlined />,
      children: [{
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
        <Menu mode="horizontal" onClick={({ key }) => {
          navigate(key);
        }} items={items} style={{ display: 'flex', justifyContent: 'center', fontSize: '17px', height: '55px' }} />
      </Affix>
    </>
  )
}
export default Nav