import './App.css';
import { useState } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState();
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [temposer, setTemposer] = useState();
  const [id, setId] = useState();

  const [editar, setEditar] = useState(false);

  const [FuncionariosList, SetFuncionarios] = useState([]);

  const add = () => {

    Axios.post("http://localhost:3001/create", {
      nome: nome,
      idade: idade,
      pais: pais,
      cargo: cargo,
      temposer: temposer
    }).then(() => {
      geFuncionarios();
      alert("Empregado registrado");
      limpiarCampos();
    });
  }

  const update = () => {

    Axios.put("http://localhost:3001/update", {
      id: id,
      nome: nome,
      idade: idade,
      pais: pais,
      cargo: cargo,
      temposer: temposer
    }).then(() => {
      getFuncionarios();
      alert("Atualizado!!!");
      limpiarCampos();
    });
  }

  const deleteFuncionarios = (id) => {

    Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
      getFuncionarios();
      alert("Eliminado!!!");
      limpiarCampos();
    });
  }




  const limpiarCampos = () => {

    setNome("");
    setIdade(0);
    setPais("");
    setCargo("");
    setTemposer(0);
    setId(0);
    setEditar(false);


  }


  const editarFuncionarios = (val) => {

    setEditar(true);

    setNome(val.nombre);
    setIdade(val.edad);
    setPais(val.pais);
    setCargo(val.cargo);
    setTemposer(val.anios);
    setId(val.id);


  }



  const getFuncionarios = () => {

    Axios.get("http://localhost:3001/empleados").then((response) => {
      SetFuncionarios(response.data);
    });

  }

  getFuncionarios();

  ////  seu codigo deve ser inserido ali com uma funÃ§Ã£o return 

}

export default App;
