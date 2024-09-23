import { faker } from '@faker-js/faker';
import login from '../support/pages/LoginPage';
import register from '../support/pages/RegisterPage';

describe('Testes Front-End', () => {
let usuario;

  before(() => {
    usuario = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      senha: faker.internet.password(),
    }
  });
  
  it('Tentar logar com usuário não cadastrado', () => {
    
    login.visit()
    login.pageShouldBeVisible('Login')
    login.fillForm(usuario)
    login.submitData()
    login.invalidCredentialsAlert('Email e/ou senha inválidos')

  })

  it('Cadastro de usuário com sucesso', () => {
    register.visit()
    register.pageShouldBeVisible('Cadastro')
    register.fillForm(usuario)
    register.submitData()
    register.successfulRegistrationAlert('Cadastro realizado com sucesso')
    register.navbar.verifyUserLoggedIn()

  })

  it('Login com sucesso', ()=>{
    login.visit()
    login.pageShouldBeVisible('Login')
    login.fillForm(usuario)
    login.submitData()
    login.navbar.verifyUserLoggedIn()
  })
})