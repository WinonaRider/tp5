import { react,useState } from "react";
import "./App.css";
import { Button, Divider } from 'antd';

function App() 
  {      
    const [valor, setValor]=useState(0);
 
  
const sumar = () =>{
  setValor(valor+1);
}
const restar = () =>{
  setValor(valor-1);
}
const restablecer = () =>{
  setValor(0);
}
const [size, setSize] = useState('large');
  return (
    
    <div>    
    <p><span> { valor } </span></p>
    <Divider style={{'border-color':'white'}}>Contador</Divider>
    <br></br>
    <table value={size} align="center">
      <tr>
    <Button style={{ background: "rgb(199, 139, 49)", borderColor: "white" }} size="large" type="primary" onClick={sumar}>Aumentar</Button>
      </tr>
      <tr>
    <Button  style={{ background: "rgb(199, 139, 49)", borderColor: "white" }} size="large" type="primary" onClick={restar}>Disminuir</Button>
      </tr>
      <tr>
    <Button  style={{ paddingRight: "33px",paddingLeft: "29px", background: "rgb(199, 139, 49)", borderColor: "white" }} size="large" type="primary" onClick={restablecer}>reset</Button>
      </tr>
    </table>
    </div>

  );
  }

export default App;