import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="App">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"></link>
    <div class="d-flex justify-content-center align-items-center vh-100 vw-100">
      <div class="table-responsive w-75 p-50 overflow-hidden">
      <table class="table table-dark table-bordered table-hover">
        <thead>
          <tr>
            <th>nome</th>
            <th>idade</th>
            <th>cargo</th>
            <th>pais</th>
            <th>tempo de serviço</th>
            <th>id</th>
            <th>editar funcionario</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="setNome">gustavo</td>
            <td id="setIdade">17</td>
            <td id="setCargo">estagiario</td>
            <th id="setPais">brasil</th>
            <th id="setTemposer">1</th>
            <th id="setId">7</th>
            <th onClick="">editar</th>
            
          </tr>
          <tr>
            <td id="setNome">raoni</td>
            <td id="setIdade">18</td>
            <td id="setCargo">estagiario</td>
            <th id="setPais">brasil</th>
            <th id="setTemposer">2</th>
            <th id="setId">8</th>
            <th onClick="">editar</th>
          </tr>
          <tr>
            <td id="setNome">arthur</td>
            <td id="setIdade">17</td>
            <td id="setCargo">estagiario</td>
            <th id="setPais">brasil</th>
            <th id="setTemposer">1</th>
            <th id="setId">3</th>
            <th onClick="">editar</th>
          </tr>
          <tr>
            <td id="setNome">milena</td>
            <td id="setIdade">17</td>
            <td id="setCargo">estagiario</td>
            <th id="setPais">brasil</th>
            <th id="setTemposer">1</th>
            <th id="setId">9</th>
            <th onClick="">editar</th>
          </tr>
        </tbody>
      </table>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
      <button class="btn btn-outline-danger">apagar</button>
      <button class="btn btn-outline-danger">editar</button>
      </div>
      </div>
    </div>
</div>
  );
}

export default App;
