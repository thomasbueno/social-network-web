import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Input from "../Form/Input";

function Form() {
  const username = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validation() && password.validation()) {
      userLogin(username.value, password.value);
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
