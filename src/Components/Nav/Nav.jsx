import { Menu, Affix } from "antd"
import {
  HomeOutlined,
  FireOutlined,
  DribbbleCircleFilled,
  DollarOutlined
} from '@ant-design/icons'
function Nav() {
  const items = [
    { label: 'Home', key: 'home', icon: <HomeOutlined /> },
    {
      label: 'Eventos', key: 'Eventos', icon: <FireOutlined />,
      children: [{
        label: 'Esportes', key: 'Esportes', icon: <DribbbleCircleFilled />,
        children: [{ label: 'Futebol', key: 'futebol' },
        { label: 'Basquete', key: 'basquete' },
        { label: 'Volei', key: 'Volei' },
        { label: 'Outros', key: 'Outros' }]
      },
      { label: 'Festas Universitárias', key: 'FestUni' }]
    },
    { label: 'Vender', key: 'vendas', icon: <DollarOutlined /> }
  ]
  return (
    <>
      <Affix offsetTop={5}>
        <Menu mode="horizontal" items={items} />
      </Affix>
    </>
  )
}
export default Nav