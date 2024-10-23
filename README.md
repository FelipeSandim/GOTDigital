# GOTDigital
Próva técnica para vaga de QA

Apresentação da Avaliação Técnica

Escolhi o site Bugbank, onde exercito novos metodos para teste E2E, essa aplicação não possui banco de dados, todo o armazenamento é local.

História do Usuário:
Como um usuário registrado, quero fazer login no site, para acessar meu painel e visualizar minhas informações.
Como um novo usuário, quero me cadastrar no site, para que possa criar uma conta e acessar as funcionalidades disponíveis.
Como um usuário autenticado, quero realizar transferências, para gerenciar meus fundos e enviar valores a outros usuários.
Como um usuário, quero consultar meu saldo, para verificar a disponibilidade de meus fundos.
Como um usuário, quero visualizar meu extrato, para acompanhar minhas transações.

Critérios de Aceite

Login:
O usuário deve conseguir inserir seu e-mail e senha.
O sistema deve validar as credenciais e redirecionar o usuário para o painel.
Uma mensagem de erro deve ser exibida se as credenciais forem inválidas.

Cadastro:
O usuário deve conseguir inserir seu nome, e-mail e senha.
O sistema deve validar os dados e criar a conta se não houver erros.
Uma mensagem de erro deve ser exibida se os dados forem inválidos ou se o e-mail já estiver em uso.

Transferência:
O usuário deve conseguir inserir o valor e o destinatário.
O sistema deve validar os dados e processar a transferência.
Uma mensagem de sucesso deve ser exibida após a conclusão da transferência, ou uma mensagem de erro se os dados forem inválidos.

Consulta de Saldo:
O usuário deve conseguir visualizar seu saldo disponível na conta.
O sistema deve exibir corretamente o saldo após o login.

Extrato:
O usuário deve conseguir acessar a tela de extrato.
O sistema deve mostrar todas as transações realizadas pelo usuário.

Casos de Testes

Teste de Login:
Validar login com sucesso.
Validar login com email em branco.
Validar login com senha em branco.
Validar login com email inválido.
Validar login com email inexistente.
Validar login com senha inválida.
Validar login com email e senha em branco.

Teste de Cadastro:
Cadastrar usuário com saldo.
Cadastrar usuário sem saldo.
Cadastrar usuário com email em formato inválido.
Cadastrar usuário com campo de email vazio.
Cadastrar usuário com campo nome em branco.
Cadastrar usuário com senha e confirmação incompatíveis.
Cadastrar usuário sem inserir senha.
Cadastrar usuário sem confirmar senha.
Cadastrar usuário sem inserir nenhum dado.

Teste de Transferência:
Transferência válida.
Transferência para conta inválida.
Transferência com valor inválido.
Transferência com valor em branco.
Transferência para própria conta.

Teste de Extrato:
Validar tela de extrato.
Validar transferência pelo extrato.
Estimativa de Tempo

Estimativa total de 8 horas para a execução dos testes:
1 hora para análise dos fluxos.
3 horas para desenvolvimento dos testes automatizados.
1 hora para ajustes e execução.
3 horas para testes de cadastro, transferência, consulta de saldo e extrato.
Testes Automatizados com Cypress

Pipeline de Execução dos Testes:
Criei um arquivo de pipeline no GitHub Actions que executa os testes automatizados sempre que há um push na branch main. 
O arquivo está localizado em .github/workflows/ci.yml.
