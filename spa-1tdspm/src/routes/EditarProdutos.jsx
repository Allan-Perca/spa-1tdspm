import { useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";


export default function EditarProdutos() {
  document.title = "Editar Produtos";

  //recuperando o id do produto selecionado com useParams()
  const {id} = useParams();

  const produtoRecuperadoDaListaById = ListaProdutos.filter(item => item.id == id);

  const [produto, setProduto] = useState({
    id: produtoRecuperadoDaListaById[0].id,
    nome: produtoRecuperadoDaListaById[0].nome,
    desc: produtoRecuperadoDaListaById[0].desc,
    valor: produtoRecuperadoDaListaById[0].valor
  });

  return (
    <div>
      <h1>EDITAR PRODUTOS</h1>
      {/* <p>PRODUTO SELECIONADO - {produtoRecuperadoDaListaById[0].nome}</p> */}
      <div>
          <form>
            <fieldset>
              <legend>PRODUTO SELECIONADO</legend>
              <div>
                <label htmlFor="idNome">Nome do Produto:</label>
                <input type="text" name="nome" id="idNome" defaultValue={produto.nome} />
              </div>      
              <div>
                <label htmlFor="idDesc">Descrição do Produto:</label>
                <input type="text" name="desc" id="idDesc" defaultValue={produto.desc} />
              </div>      
              <div>
                <label htmlFor="idValor">Descrição do Produto:</label>
                <input type="text" name="valor" id="idValor" defaultValue={produto.valor} />
              </div>
              <div>
                <button>EDITAR</button>
              </div>      
            </fieldset>
          </form>
        </div>

    </div>
  )
}
