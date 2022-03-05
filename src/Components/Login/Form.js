import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Input from "../Form/Input";

function Form() {
  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if (username.validation() && password.validation()) {
      fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input name="username" label="Login" type="text" {...username} />
        <Input name="password" label="Senha" type="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/register">Cadastrar</Link>
    </section>
  );
}

export default Form;
