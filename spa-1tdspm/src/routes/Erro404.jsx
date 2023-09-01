import { Link } from "react-router-dom";

export default function Erro404() {
  
  document.title = "Erro 404";
  
  return (
    <div>
      <h1>Erro404</h1>
      <p>Voltar para o início - <Link to="/">Voltar</Link></p>
    </div>
  )
}
