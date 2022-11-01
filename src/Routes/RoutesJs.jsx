
import { Route, Routes } from "react-router-dom";
import Vendas from "../Pages/Vendas/Vendas";
import CadastrarEvento from "../Pages/Eventos/CadastrarEvento";
function RoutesJs() {
  return (
    <>
      <Routes>
        <Route
          path="/Vendas"
          element={<Vendas />}
        />
        <Route
          path="/AddEvento"
          element={<CadastrarEvento />}
        />
      </Routes>
    </>
  )
}
export default RoutesJs
