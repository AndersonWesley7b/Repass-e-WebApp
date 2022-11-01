import { PageHeader, Card, Row } from 'antd'
function Vendas() {
  return (
    <>
      <PageHeader
        className='site-page-header'
        onBack={() => window.history.back()}
        title="Venda de Ingresso"
        subTitle="Coloque seu ingresso a venda" />
        <Card>
          <Row>

          </Row>
        </Card>


    </>
  )
}
export default Vendas