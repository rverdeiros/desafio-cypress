import user_data from '../fixtures/user_data.json'
import userActions from '../support/api/UserActions.js'

describe('Testes API', () => {
  it('Cadastrar um usuário com sucesso', () => {
    const user = user_data.users[0]
    
    //---- PASSO A PASSO ----//
    userActions.registerUser(user)
      .then((response) => {
        Cypress.env('userID', response.body._id);
        expect(response.status).equal(201)
        expect(response.body.message).equal("Cadastro realizado com sucesso")
        expect(response.body._id).to.exist
      })
  })

  it('Buscar os usuários pelo email', () => {
    const user = user_data.users[0]
    
    //--- PRE-REQUISITOS --- //
    userActions.registerUser(user).then((response) => {
      Cypress.env('userID', response.body._id)
      let userID = Cypress.env('userID')
      cy.log(userID)
    }).then(() => {
      //--- PASSO A PASSO --- //
      userActions.getUserByEmail(user).then((response) => {
        expect(response.status).equal(200)
        expect(response.body.quantidade).equal(1)
        expect(response.body.usuarios[0].nome).equal(user.nome)
        expect(response.body.usuarios[0].email).equal(user.email)
        expect(response.body.usuarios[0].password).equal(user.password)
        expect(response.body.usuarios[0].administrador).equal(user.administrador)
      })
    })
  })

  it('Editar um usuário', () => {
    const user = user_data.users[0]
    const alteredUser = user_data.users[1]

    //--- PRE-REQUISITOS --- //
    userActions.registerUser(user).then((response) => {
      Cypress.env('userID', response.body._id)
    }).then(() => {
      //--- PASSO A PASSO --- //
      let userID = Cypress.env('userID')
      userActions.editUser(userID, alteredUser).then((response) => {
        expect(response.status).equal(200)
        expect(response.body.message).equal('Registro alterado com sucesso')
      }).then(() => {
        userActions.getUserByEmail(alteredUser).then((response) => {
          expect(response.status).equal(200)
          expect(response.body.quantidade).equal(1)
          expect(response.body.usuarios[0].nome).equal(alteredUser.nome)
          expect(response.body.usuarios[0].email).equal(alteredUser.email)
          expect(response.body.usuarios[0].password).equal(alteredUser.password)
          expect(response.body.usuarios[0].administrador).equal(alteredUser.administrador)
        })
      })
    })
  })
  //--- APAGANDO O USUÁRIO DA BASE APÓS CADA TESTE ---//
  afterEach(() => {
    userActions.deleteUser(Cypress.env('userID')).then((response) =>{
      expect(response.status).equal(200)
      expect(response.body.message).equal('Registro excluído com sucesso')
    })
  })
})