import cadastroPage from "../pages/cadastroPage";
import loginPage from "../pages/loginPage";
const login = new loginPage
const cadastro = new cadastroPage


describe('cadastro para o login', () =>{
  before(() => {
    cy.visit('https://bugbank.netlify.app'),
    cadastro.navegarNoSite()
    cadastro.linckDeCadastro()
    cadastro.campoEmail('homer@simpson.com')
    cadastro.campoNome('Homer')
    cadastro.campoCadastrarSenha('123456')
    cadastro.campoConfirmarSenha('123456')
    cadastro.botaoContaComSaldo()
    cadastro.btnCadastrar()
  })
it('validar login com sucesso', () => {
  login.navegarNoSite()
  login.campoEmail('homer@simpson.com')
  login.campoSenha('123456')
  login.botaoLogin()
  login.assertionLogin() 
});
it('validar logim com email com formato invalido invalido', () => {
  login.navegarNoSite()
  login.campoEmail('suhdiahisauhidu')
  login.campoSenha('123456')
  login.botaoLogin()
  login.assertionEmailInvalido()
});
it('validar logim com email inexistente', () => {
  login.navegarNoSite()
  login.campoEmail('suhdiahi@teste.com')
  login.campoSenha('123456')
  login.botaoLogin()
  login.assertionModal()
});
it('validar logim com senha invalida', () => {
  login.navegarNoSite()
  login.campoEmail('homer@simpson.com')
  login.campoSenha('123456789')
  login.botaoLogin()
  login.assertionModal()
});
it('validar login com email em branco', () => {
  login.navegarNoSite()
  login.campoSenha('123456')
  login.botaoLogin()
  login.assertEmailEmBranco()
});
it('validar login senha em branco', () => {
  login.navegarNoSite()
  login.campoEmail('homer@simpson.com')
  login.botaoLogin()
  login.assertSenhaEmBranco() 
});
it('validar login com email e senha em branco', () => {
  login.navegarNoSite()
  login.botaoLogin()
  login.assertEmailEmBranco()
  login.assertSenhaEmBranco()
});

})
