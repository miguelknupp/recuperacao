import React from 'react'
import Modal from "react-bootstrap/Modal";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const ModalCadastrar = (props) => {
    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("");
    const [preco, setPreco] = useState("");
 
  
    const handleCadastrar = async () => {
      if (nome != "" && preco != "" && tipo != "") {
        const user = { nome, email, senha, tipo };
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        setNome("");
        setPreco("");
        setTipo("");
        alert("Cadastrado com sucesso");
        props.onHide();
      } else {
        alert("Cadastrado com sucesso");
      }
    };
  return (
    <div>
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Cadastrar produto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* caixinha do nome */}
          <FloatingLabel
            controlId="floatingInputName"
            label="Nome"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Digite o nome do produto"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
          </FloatingLabel>
          {/* caixinha do email */}
          <FloatingLabel
            controlId="floatingInputName"
            label="Preco"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="digite o Preco"
              value={preco}
              onChange={(e) => {
                setPreco(e.target.value);
              }}
            />
          </FloatingLabel>
          {/* caixinha da senha */}
          <FloatingLabel
            controlId="texfloatingInputNamet"
            label="tipo"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Tipo"
              value={tipo}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCadastrar}>Cadastrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalCadastrar


