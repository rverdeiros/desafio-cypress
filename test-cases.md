# Casos de teste - FRONTEND

## 1. Tentar logar com usuário não cadastrado

**Objetivo**: Verificar se o sistema exibe a mensagem de erro "Email e/ou senha inválidos" ao tentar realizar o login com um e-mail não cadastrado.

**Pré-requisitos**:
1. O e-mail do usuário não deve estar cadastrado no sistema.

**Passo a passo:**
1. Acessar a página de login - https://front.serverest.dev/login
2. Preencher o campo "E-mail" com um e-mail não cadastrado.
3. Preencher o campo "Senha" com uma senha qualquer. 
4. Clicar no botão "Entrar".
5. Verificar se o sistema exibe a mensagem de erro - "Email e/ou senha inválidos"
6. Verificar se o sistema não permite a autenticação e permanece na página de login.

**Resultado esperado**: O sistema deve exibir uma mensagem de erro "Email e/ou senha inválidos" e não permite a autenticação do usuário.


## 2. Cadastro de usuário com sucesso

**Objetivo**: Cadastrar um usuário preenchendo todos os campos do formulário com dados válidos.

**Pré-requisitos:**
1. O usuário não deve estar cadastrado no sistema.

**Passo a passo:**
1. Acessar a página de cadastro.
2. Preencher corretamente o campo "Nome".
3. Preencher corretamente o campo "E-mail" com um endereço de e-mail válido.
4. Preencher corretamente o campo "Senha" com uma senha que atenda aos requisitos.
5. Clicar no botão "Cadastrar".
6. Verificar se o sistema exibe a mensagem "Cadastro realizado com sucesso" e direciona o usuário para a home.

**Resultado esperado:** O sistema deve exibir a mensagem de sucesso e o usuário deve ser redirecionado para a home.


## Test Case 03. Login com sucesso
**Objetivo:** Garantir que o sistema permite o login de um usuário cadastrado utilizando credenciais válidas.

**Pré-requisitos:**
1. O usuário deve estar cadastrado no sistema.

**Passo a passo:**
1. Acessar a página de login.
2. Inserir o e-mail válido cadastrado no campo "E-mail".
3. Inserir a senha correta no campo "Senha".
4. Clicar no botão "Entrar".
5. Verificar se o sistema redireciona para a home. 

**Resultado esperado:** O usuário deve ser autenticado e direcionado para a home.

---------------------------------------------------------------------------------------------------------
# Casos de teste - BACKEND


## Test Case 01. Cadastrar e deletar um usuário
**Objetivo:** Cadastrar um usuário via endpoint e em seguida excluí-lo corretamente.

**Pré-requisitos:**
1. O usuário não deve estar cadastrado no sistema.

**Passo a passo:**
1. Enviar um POST para o endpoint (https://serverest.dev/usuarios) com os dados obrigatórios para criar um usuário (nome, e-mail, senha e status de administrador).
2. Verificar a resposta da requisição para confirmar que o usuário foi criado com sucesso (status 201 e mensagem "Cadastro realizado com sucesso").
3. Apagar o usuário da base de dados

**Resultado esperado:** O sistema deve criar o usuário com sucesso e em seguida apagar da base.

**Pós-Teste:** Apagar o usuário da base de dados enviando o userID e validar as informações (status 200 e mensagem "'Registro excluído com sucesso")


## Test Case 02. Buscar os usuários pelo email
**Objetivo:** Validar se o sistema permite buscar usuários cadastrados por e-mail.

**Pré-requisitos:**
Cadastrar um usuário para ser encontrado informando o e-mail.

**Passo a passo:**
1. Enviar um GET (https://serverest.dev/usuarios/) para o endpoint de busca de usuários, passando o e-mail como parâmetro de busca.
2. Verificar o status da resposta (status 200).
3. Verificar se os dados do usuário retornados na resposta correspondem ao e-mail fornecido na busca. (nome, email, senha e status administrador)

**Resultado esperado:** O sistema deve retornar o usuário correto quando o e-mail fornecido corresponder ao de um usuário existente na base.

**Pós-Teste:** Apagar o usuário da base de dados enviando o userID e validar as informações (status 200 e mensagem "'Registro excluído com sucesso")


## Test Case 03. Editar um usuário
**Objetivo:** Verificar se o sistema permite editar as informações de um usuário existente.

**Pré-requisitos:**
Deve existir um usuário previamente cadastrado para ser editado.

**Passo a passo:**
1. Enviar um PUT para o endpoint (https://serverest.dev/usuarios/), utilizando o ID ou e-mail do usuário e fornecendo os novos dados (nome, e-mail, senha e status administrador).
2. Verificar o status da resposta da requisição (status 200).
3. Enviar uma GET para buscar o usuário pelo e-mail e verificar se as informações foram atualizadas corretamente (nome, email, senha e status administrador).

**Resultado esperado:** O sistema deve permitir a edição do usuário e refletir as mudanças corretamente ao buscar as novas informações.

**Pós-Teste:** Apagar o usuário da base de dados enviando o userID e validar as informações (status 200 e mensagem "'Registro excluído com sucesso")

