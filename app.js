import './App.css';
import {useState} from "react";
import Axios from Axios
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
    const [nome,setNome] = useState("")
    const [idade,setIdade] = useState("")
    const [cargo,setCargo] = useState("")
    const [temposer,setTemposer] = useState()
    const [id,setId] = useState()

    const [editar,setEditar] = useState(false);
    const [funcionariosList, SetFuncionarios] = useState([]);

    const add = () => {

        Axios.post("http://localhost:3001/create", {
            nome:nome,
            idade:idade,
            cargo:cargo,
            temposer:temposer
        }).then(()=> {
            getFuncionarios();
            alert("funcionarios registrados com sucesso!!!");
            limparCampos();
        });
        
    }
}