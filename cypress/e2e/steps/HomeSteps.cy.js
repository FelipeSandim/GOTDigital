import cadastroPage from "../pages/cadastroPage";
const cadastro = new cadastroPage

import loginPage from "../pages/loginPage";
const login = new loginPage

import HomePage from "../pages/HomePage";
const home = new HomePage()

import util from "../utils/util";
const utils = new util()

var regexNumConta = /^(\d+)-/;
var regexDigitoConta = /-(\d+)$/;

var account = {
    accountNumber: "",
    balance: 0,
    email: "",
    logged: false,
    name: "",
    password: ""
}

var myAccount = {
    accountNumber: "",
    balance: 0,
    email: "",
    logged: false,
    name: "",
    password: ""
}

describe('Testes de transferencia', () => {
    beforeEach('cadastra contas', () => {
        contaAuxiliar()
        cadastrarConta()
    })

    it('transferencia valida', () => {
        account = JSON.parse(window.localStorage.getItem('elchavo@chaves.com'));
        loginConta()
        home.clickBtnTransferencia()
        const numConta = regexNumConta.exec(account.accountNumber)
        home.digitarNumContaTransf(numConta[1].toString())
        const digitoConta = regexDigitoConta.exec(account.accountNumber)
        home.digitarDigitoConta(digitoConta[1].toString())
        home.digitarVlrTransf("100")
        home.digitarDescricao("pix pro sanduiche de presunto")
        home.clickBtnTransf()
        home.validaTextoTransfereciaSucesso()
    })

    it('transferencia conta invalida', () => {
        loginConta()
        home.clickBtnTransferencia()
        home.digitarNumContaTransf("000")
        home.digitarDigitoConta("0")
        home.digitarVlrTransf("100")
        home.digitarDescricao("pix pro sanduiche de presunto")
        home.clickBtnTransf()
        home.validaTextoTransfereciaContaInvalida()
    })

    it('transferencia valor invalido', () => {
        account = JSON.parse(window.localStorage.getItem('elchavo@chaves.com'));
        loginConta()
        home.clickBtnTransferencia()
        const numConta = regexNumConta.exec(account.accountNumber)
        home.digitarNumContaTransf(numConta[1].toString())
        const digitoConta = regexDigitoConta.exec(account.accountNumber)
        home.digitarDigitoConta(digitoConta[1].toString())
        home.digitarVlrTransf("0")
        home.digitarDescricao("pix pro sanduiche de presunto")
        home.clickBtnTransf()
        home.validaTextoTransfereciaValorInvalido()
    })

    it('transferencia valor em branco', () => {
        account = JSON.parse(window.localStorage.getItem('elchavo@chaves.com'));
        loginConta()
        home.clickBtnTransferencia()
        const numConta = regexNumConta.exec(account.accountNumber)
        home.digitarNumContaTransf(numConta[1].toString())
        const digitoConta = regexDigitoConta.exec(account.accountNumber)
        home.digitarDigitoConta(digitoConta[1].toString())
        home.digitarVlrTransf(" ")
        home.digitarDescricao("pix pro sanduiche de presunto")
        home.clickBtnTransf()
        home.validaTextoTransfereciaValorEmBranco()
    })

    it('transferencia pra propria compra', () => {
        myAccount = JSON.parse(window.localStorage.getItem('seu@madruga.com'));
        loginConta()
        home.clickBtnTransferencia()
        const numConta = regexNumConta.exec(myAccount.accountNumber)
        home.digitarNumContaTransf(numConta[1].toString())
        const digitoConta = regexDigitoConta.exec(myAccount.accountNumber)
        home.digitarDigitoConta(digitoConta[1].toString())
        home.digitarVlrTransf("100")
        home.digitarDescricao("pix pro sanduiche de presunto")
        home.clickBtnTransf()
        home.validaTextoTransfereciaMesmaConta()
        home.clickBtnCloseModal()
        utils.tempo(1000)
        cy.url().should('include', '/transfer')
    })
})

describe('Testes de extrato', () => {
    beforeEach('cadastra contas', () => {
        contaAuxiliar()
        cadastrarConta()
    })

    it('validar tela de extrato', () => {
        loginConta()
        home.clickBtnExtrato()
        cy.url().should('include', '/bank-statement')
    }) 
    
    it('validar transferencia pelo extrato', () => {
        account = JSON.parse(window.localStorage.getItem('elchavo@chaves.com'));
        loginConta()
        home.clickBtnTransferencia()
        const numConta = regexNumConta.exec(account.accountNumber)
        home.digitarNumContaTransf(numConta[1].toString())
        const digitoConta = regexDigitoConta.exec(account.accountNumber)
        home.digitarDigitoConta(digitoConta[1].toString())
        home.digitarVlrTransf("100")
        home.digitarDescricao("pix pro sanduiche de presunto")
        home.clickBtnTransf()
        home.clickBtnVoltar()
        home.clickBtnExtrato()
        home.validaTextoTransf('pix pro sanduiche de presunto')
    })  
})

describe('funcionalidades em desenvolvimento', () => {
    beforeEach('cadastra contas', () => {
        cadastrarConta()
    })

    it('pagamento', () => {
        loginConta()
        home.clickBtnPagamentos()
        home.validafuncionalidadeEmDesenvolvimento()
    })

    it('saque', () => {
        loginConta()
        home.clickBtnSaque()
        home.validafuncionalidadeEmDesenvolvimento()
    })
})


function contaAuxiliar() {
    cadastro.navegarNoSite()
    cadastro.linckDeCadastro()
    cadastro.campoEmail('elchavo@chaves.com')
    cadastro.campoNome('Chaves')
    cadastro.campoCadastrarSenha('123456')
    cadastro.campoConfirmarSenha('123456')
    cadastro.btnCadastrar()
}

function cadastrarConta() {
    cadastro.navegarNoSite()
    cadastro.linckDeCadastro()
    cadastro.campoEmail('seu@madruga.com')
    cadastro.campoNome('Seu Madruga')
    cadastro.campoCadastrarSenha('123456')
    cadastro.campoConfirmarSenha('123456')
    cadastro.botaoContaComSaldo()
    cadastro.btnCadastrar()
}

function loginConta() {
    login.navegarNoSite()
    login.campoEmail('seu@madruga.com')
    login.campoSenha('123456')
    login.botaoLogin()
}