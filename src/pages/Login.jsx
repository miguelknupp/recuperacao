import Container from "react-bootstrap/esm/Container"
import Alert from 'react-bootstrap/Alert';
import { useState, useEffect } from "react"
// botaum
import Button from 'react-bootstrap/Button';
// Formulario... chato como sempre
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


// bd de login
const url = "http://localhost:5000/users"


const Login = () => {

    //variaveis
    const [email, setEmail] = useState("");
    const [senha, setsenha] = useState("");

    const [alertaClass, setAlertaClass] = useState("mb-3 d-none");
    const [alertaMensagen, setAlertaMensagen] = useState("");
    const [alertaVariant, setAlertaVariant] = useState("danger");

    //Lista de usuarios
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(url);
                const users = await res.json();
                setUsuarios(users);
            }catch(error){
                console.log(error.message);
            }
        }
        fetchData();
        console.log(usuarios);
    }, []);

    const gravarArmLocal = (usuario) =>{
        localStorage.setItem("userName", usuario.nome)
        localStorage.setItem("userEamil",  usuario.email)
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        const user = {email, senha};

        const userToFind = usuarios.find(
            (userFind) => userFind.email === user.email
        );


        if(email !==""){
            if(senha !==""){
                if(userToFind !== undefined && userToFind.senha === senha){
                    console.log(userToFind);
                    console.log("entrou");
                    setAlertaClass("mb-3");
                    alert("login efetuado com sucesso");
                    gravarArmLocal(userToFind)
                    setAlertaMensagen("login efetuado com sucesso");
                    setAlertaVariant("success");
                    window.location.href = "http://localhost:3000/Produtos"
                    
                } else{
                    setAlertaClass("mb-3");
                    setAlertaMensagen("usuario e(ou) senha invalidos(das(dix))");  
                }
            }else {
                setAlertaClass("mb-3");
                    setAlertaMensagen("Preencha o campo senha por favor :/");  
                
            }
        }else{
            setAlertaClass("mb-3");
            setAlertaMensagen("Preencha o campo Email por favor :/");
        }
    };

  return (
    <div> 
    <Container>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
     <FloatingLabel
        controlId="floatingInput"
        label="Digite seu email :))"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" 
        value={email}
        onChange={(e) => {
            setEmail(e.target.value);
        }}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Digite sua senha:))">
        <Form.Control type="password" placeholder="Password" 
        value={senha}
        onChange={(e) => {
            setsenha(e.target.value);
        }}/>
      </FloatingLabel>
      <Alert key="warning"  variant={alertaVariant} className={alertaClass}>
        {alertaMensagen}
      </Alert>

      <Button variant="primary" type="submit">
        LOGAR
      </Button>
        </form>
      </Container>
    </div>
  )
}

export default Login