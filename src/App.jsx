import RoutesJs from './Routes/RoutesJs'
import 'antd/dist/antd.css'
import LayoutDefault from './Components/Layout/LayoutDefault'

function App() {


  return (
    <div>
      <LayoutDefault>
        <RoutesJs />
      </LayoutDefault>
    </div>
  )
}

export default App
