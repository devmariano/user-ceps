import { useNavigate } from 'react-router-dom';

import * as Styled from './Login.style';

import { InputComponent } from '../Input/Input.component';
import { useForm } from "react-hook-form"


export const FormLoginComponent = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
    }
  
  const navigate = useNavigate();



  const redirectToHome = () => {
    navigate('/home')
  }

  return(
    <Styled.Form onSubmit={handleSubmit(submitForm)}>
      <Styled.Header>
        <Styled.Title>Login</Styled.Title>
        <Styled.SubTitle>Para acessar o sistema digite seu email e sua senha.</Styled.SubTitle>
        {/* <Styled.SubTitle>{watch('email')}</Styled.SubTitle> */}
      </Styled.Header>

      <Styled.InputGroup>

        <InputComponent 
        id='email' 
        type='email' 
        label='E-mail ' 
        placeholder='Digite seu email'
        register={{...register('email', {required: true, validate: {matchPath: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)}})}}
        />
        <InputComponent 
        id='password' 
        type='password' 
        label='Senha ' 
        placeholder='Digite sua senha'
        register={{...register('password', {required: true, minLength: 8})}}
        />
      </Styled.InputGroup>

      <Styled.Button type='submit' disabled={errors.email || errors.password}>Entrar</Styled.Button>

      <Styled.Action>
        <Styled.EsqueciSenha>Esqueci minha senha</Styled.EsqueciSenha>
        <Styled.Button $outlined={true} type='button'>Criar conta</Styled.Button>
      </Styled.Action>
    </Styled.Form>
  )
}