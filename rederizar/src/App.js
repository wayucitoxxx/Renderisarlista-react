import './App.css';
import { Renderizarlista } from './Componentes/Renderizarlista';

function App() {
  const {datos, error} = Renderizarlista('https://jsonplaceholder.typicode.com/users');
  return (
    <div className="App">
      <h1>Renderizar Consumiendo APIS</h1>
      <ul className="user-container">
      {datos?.map((user)=>( 
        <li className="user-box" key={user.id}>
          <span>{user.id}</span>
          <span>{user.name}</span> 
          <span>{user.username}</span>
          <span>{user.email}</span>
          <span>{user.address.street}</span>
          <span>{user.address.suite}</span>
          <span>{user.address.city}</span>
          <span>{user.address.zipcode}</span>
          <span>{user.phone}</span>
          <span>{user.website}</span>
        </li>
    ))}
    </ul>
    {error && <p> tienes un error el triple hpta </p>}
    </div>
  );
}

export default App;
