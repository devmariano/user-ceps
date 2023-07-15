import { LocalStorageService } from "./LocalStorage.service";

const API_URL = `http://localhost:3000/users`
const API_VIACEP = `http://viacep.com.br/ws/CEP/json/`

//Method GET
const Get = async () => {
  // return LocalStorageService.get('users');
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

const GetCEP = async (cep) => {
  const response = await fetch(API_VIACEP.replace('CEP', cep.replace("-", "").trim()));
  const data = await response.json();
  return data;
}

//Method POST
const Create = async (data) => {
  // const users = Get();

  // data = {
  //   id: users.length + 1,
  //   ...data,
  // }

  // LocalStorageService.set('users', [...users, data]);

  const response = await fetch(API_URL, {
    method: 'POST',
    body: {
      email: data.email,
      password: data.password,
    },
  });
  // const res = await response.json();
  // console.log(res && `Usuário ${res.email} criado com sucesso`);
}

//Method GET
const Show = async (id) => {
  // return Get().find(user => user.id === id);
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
}

//Method GET
const ShowByEmail = async (email) => {
  // return Get().find(user => user.email === email);
  let filter = `?`;

  
  if(email) { filter += `email=${email}&` }
  
  // const filter = `?email=${email}`;
  const response = await fetch(`${API_URL}${filter}`);
  const data = await response.json(); //retorna um array
  return data[0];
}

//Method DELETE
const Delete = (id) => {
  LocalStorageService.set('users', Get().filter(user => user.id !== id));
}

//Method PUT/PATCH
const Update = (id, data) => {
  const users = Get();

  users[users.find(user => user.id === id).indexOf] = data;

  LocalStorageService.set('users', users)
}

export const UserService = {
  Get,
  GetCEP,
  Create,
  Show,
  ShowByEmail,
  Delete,
  Update
}