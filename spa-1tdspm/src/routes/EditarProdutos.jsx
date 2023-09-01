import { useParams } from "react-router-dom";


export default function EditarProdutos() {
  //recuperando o id do produto selecionado
  const {id} = useParams();

  return (
    <div>
      <h1>EDITAR PRODUTOS</h1>
      <p>PRODUTO SELECIONADO - {id}</p>
    </div>
  )
}
