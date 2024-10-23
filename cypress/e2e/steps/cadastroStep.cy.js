import cadastroPage from "../pages/cadastroPage";
const cadastro = new cadastroPage

describe('cadastro de usuario', () => {

it('cadastrar usuario com saldo', () => {
    cadastro.navegarNoSite()
    cadastro.linckDeCadastro()
    cadastro.campoEmail('elchavo@chaves.com')
    cadastro.campoNome('Seu Madruga')
    cadastro.campoCadastrarSenha('123456')
    cadastro.campoConfirmarSenha('123456')
    cadastro.botaoContaComSaldo()
    cadastro.btnCadastrar()
    cadastro.assertionModal()
});
it('cadastrar usuario sem saldo', () => {
    cadastro.navegarNoSite()
    cadastro.linckDeCadastro()
    cadastro.campoEmail('elchavo@chaves.com')
    cadastro.campoNome('Seu Madruga')
    cadastro.campoCadastrarSenha('123456')
    cadastro.campoConfirmarSenha('123456')
    cadastro.btnCadastrar()
    cadastro.assertionModal()
});
it('cadastrar usuario com email em formato invalido', () => {
    cadastro.navegarNoSite()
    cadastro.linckDeCadastro()
    cadastro.campoEmail('elchavo')
    cadastro.campoNome('Seu Madruga')
    cadastro.campoCadastrarSenha('123456')
    cadastro.campoConfirmarSenha('123456')
    cadastro.botaoContaComSaldo()
    cadastro.btnCadastrar()
    cadastro.assertCadastroEmailForInvalido()
});
it('cadastrar usuario com campo de email vazio', () => {
    cadastro.navegarNoSite()
    cadastro.linckDeCadastro()
    cadastro.campoNome('Seu Madruga')
    cadastro.campoCadastrarSenha('123456')
    cadastro.campoConfirmarSenha('123456')
    cadastro.botaoContaComSaldo()
    cadastro.btnCadastrar()
    cadastro.assertCadastroEmailEmBranco()
});
it('cadastrar usuario com campo nome em branco', () => {
    cadastro.navegarNoSite()
    cadastro.linckDeCadastro()
    cadastro.campoEmail('elchavo@chaves.com')
    cadastro.campoCadastrarSenha('123456')
    cadastro.campoConfirmarSenha('123456')
    cadastro.botaoContaComSaldo()
    cadastro.btnCadastrar()
    cadastro.assertionModal()
});
it('cadastrar usuario com senha e confirmação incompativeis', () => {
    cadastro.navegarNoSite()
    cadastro.linckDeCadastro()
    cadastro.campoEmail('elchavo@chaves.com')
    cadastro.campoNome('Seu Madruga')
    cadastro.campoCadastrarSenha('123456789')
    cadastro.campoConfirmarSenha('123456')
    cadastro.botaoContaComSaldo()
    cadastro.btnCadastrar()
    cadastro.assertionModal()
});
it('cadastrar usuario sem inserir senha', () => {
    cadastro.navegarNoSite()
    cadastro.linckDeCadastro()
    cadastro.campoEmail('elchavo@chaves.com')
    cadastro.campoNome('Seu Madruga')
    cadastro.campoConfirmarSenha('123456')
    cadastro.botaoContaComSaldo()
    cadastro.btnCadastrar()
    cadastro.assertSenhaEmBranco()
});

it('cadastrar usuario sem confirmar senha', () => {
    cadastro.navegarNoSite()
    cadastro.linckDeCadastro()
    cadastro.campoEmail('elchavo@chaves.com')
    cadastro.campoNome('Seu Madruga')
    cadastro.campoCadastrarSenha('123456')
    cadastro.botaoContaComSaldo()
    cadastro.btnCadastrar()
    cadastro.assertConfirmarSenhaEmBranco()
});
it('cadastrar usuario sem inserir nenhum dado', () => {
    cadastro.navegarNoSite()
    cadastro.linckDeCadastro()
    cadastro.botaoContaComSaldo()
    cadastro.btnCadastrar()
    cadastro.assertCadastroEmailEmBranco()
    cadastro.assertSenhaEmBranco()
    cadastro.assertConfirmarSenhaEmBranco()

});
})