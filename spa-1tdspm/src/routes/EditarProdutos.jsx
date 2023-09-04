import { useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function EditarProdutos() {
  document.title = "Editar Produtos";

  //recuperando o id do produto selecionado com useParams()
  const {id} = useParams();

  const produtoRecuperadoDaListaById = ListaProdutos.filter(item => item.id == id);
  

  return (
    <div>
      <h1>EDITAR PRODUTOS</h1>
      <p>PRODUTO SELECIONADO - {produtoRecuperadoDaListaById[0].nome}</p>
    </div>
  )
}
