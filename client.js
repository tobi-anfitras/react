import './App.css';
import { useState } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState();
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [anios, setAnios] = useState();
  const [id, setId] = useState();

  const [editar, setEditar] = useState(false);

  const [empleadosList, setEmpleados] = useState([]);

  const add = () => {

    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      edad: edad,
      pais: pais,
      cargo: cargo,
      anios: anios
    }).then(() => {
      getEmpleados();
      alert("Empregado registrado");
      limpiarCampos();
    });
  }

  const update = () => {

    Axios.put("http://localhost:3001/update", {
      id: id,
      nombre: nombre,
      edad: edad,
      pais: pais,
      cargo: cargo,
      anios: anios
    }).then(() => {
      getEmpleados();
      alert("Atualizado!!!");
      limpiarCampos();
    });
  }

  const deleteEmpleados = (id) => {

    Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
      getEmpleados();
      alert("Eliminado!!!");
      limpiarCampos();
    });
  }




  const limpiarCampos = () => {

    setNombre("");
    setEdad(0);
    setPais("");
    setCargo("");
    setAnios(0);
    setId(0);
    setEditar(false);


  }


  const editarEmpleado = (val) => {

    setEditar(true);

    setNombre(val.nombre);
    setEdad(val.edad);
    setPais(val.pais);
    setCargo(val.cargo);
    setAnios(val.anios);
    setId(val.id);


  }



  const getEmpleados = () => {

    Axios.get("http://localhost:3001/empleados").then((response) => {
      setEmpleados(response.data);
    });

  }

  getEmpleados();

  ////  seu codigo deve ser inserido ali com uma funÃ§Ã£o return 

}

export default App;
