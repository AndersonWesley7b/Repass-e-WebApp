
import { Route, Routes } from "react-router-dom";
import Vendas from "../Pages/Vendas/Vendas";
function RoutesJs() {
  return (
    <>
      <Routes>
        <Route
          path="/Vendas"
          element={<Vendas />}
        />
      </Routes>
    </>
  )
}
export default RoutesJs
