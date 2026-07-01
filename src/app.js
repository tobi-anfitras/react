import './App.css';
import {useState} from "react";
import Axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
    
    const [nome,setNome] = useState("")
    const [idade,setIdade] = useState("")
    const [pais,setPais] = useState("")
    const [cargo,setCargo] = useState("")
    const [temposer,setTemposer] = useState()
    const [id,setId] = useState()

    const [editar,setEditar] = useState(false);
    const [funcionariosList, SetFuncionarios] = useState([]);

    const add = () => {

        Axios.post("http://localhost:3001/create", {

            nome:nome,
            idade:idade,
            pais:pais,
            cargo:cargo,
            temposer:temposer
        }).then(()=> {
            getFuncionarios();
            alert("funcionarios registrados com sucesso!!!");
            limparCampos();
        });

    }

    const update = () => {

        Axios.put("http://localhost:3001/update", {
            id:id,
            nome:nome,
            idade:idade,
            pais:pais,
            cargo:cargo,
            temposer:temposer
        }).then(()=> {
            getFuncionarios();
            alert("funcionarios atualizado com sucesso!!!");
            limparCampos();
        });

    }

    const deleteFuncionarios = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then(()=>{
            getFuncionarios();
                alert("Eliminado");
                limparCampos();
            
        })
    }

}

const limparCampos = () => {
    setNome("");
    setidade(0);
    setPais("")
    setcargo("");
    setid(0);
    setTemposer("");
    setEditar(false)
    
}
const editarFuncionario = (val) => {
    setNome(val.nome);
    setidade(val.idade);
    setPais(val.pais)
    setcargo(val.cargo);
    setid(val.id);
    setTemposer(val.temposer);
    setEditar(true);
}