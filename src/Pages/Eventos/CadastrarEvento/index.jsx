import { PageHeader, Card, Row, Col, Input } from 'antd'
function CadastrarEvento() {
  return (
    <>
      <PageHeader
        className='site-page-header'
        onBack={() => window.history.back()}
        title="Venda de Ingresso"
        subTitle="Coloque seu ingresso a venda" />
      <Card>
        <Row>
          <Col>
          <Input.Group compact='true'>
            <Input/>
          </Input.Group>
          </Col>
        </Row>
      </Card>
    </>
  )
}
export default CadastrarEvento