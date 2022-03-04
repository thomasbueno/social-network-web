import React from "react";
import { Link } from "react-router-dom";
import Button from "../Form/Button";
import Input from "../Form/Input";

function Form() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
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

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          label="Login"
          type="text"
          onChange={({ target }) => setUsername(target.value)}
        />
        <Input
          name="password"
          label="Senha"
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/register">Cadastrar</Link>
    </section>
  );
}

export default Form;
