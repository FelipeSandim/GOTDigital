import util from "../utils/util"
const utils = new util

export default class cadastroPage{

    Url = 'https://bugbank.netlify.app'
    botaoCadastrar = '.ihdmxA'
    ePost = 'div:nth-child(2) > input'
    nome = ':nth-child(3) > .input__default'
    password = ':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default'
    confirmPassword = ':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default'
    comSaldo = '#toggleAddBalance'
    cadastrar = '.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0'
    messageModal= '#btnCloseModal'
    messageAlertEmail = '#__next > div > div.pages__FormBackground-sc-1ee1f2s-2.jNpkvU > div > div.card__register > form > div.style__ContainerFieldInput-sc-s3e9ea-0.kOeYBn.input__child > p'
    messagePasswordEmBranco = '#__next > div > div.pages__FormBackground-sc-1ee1f2s-2.jNpkvU > div > div.card__register > form > div:nth-child(4) > div > p'
    messageConfirmPasswordEmBranco = ':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging'


    navegarNoSite(){
        utils.acessarUrl(this.Url)
    }
    linckDeCadastro(){
        utils.click(this.botaoCadastrar)
    }
    campoEmail(str){
        utils.preencherInputForce(this.ePost, str)
    }
    campoNome(str){
        utils.preencherInputForce(this.nome, str)
    }
    campoCadastrarSenha(str){
        utils.preencherInputForce(this.password, str)
    }
    campoConfirmarSenha(str){
        utils.preencherInputForce(this.confirmPassword, str)
    }
    botaoContaComSaldo(){
        utils.clickForce(this.comSaldo)
    }
    btnCadastrar(){
        utils.clickForce(this.cadastrar)
    }
    assertCadastroSucesso(){
        utils.validarText(this.messageCadastroSucesso, 'Fechar')
    }
    assertCadastroEmailEmBranco(){
        utils.validarText(this.messageAlertEmail, 'É campo obrigatório')
    }
    assertCadastroEmailForInvalido(){
        utils.validarText(this.messageAlertEmail, 'Formato inválido')
    }
    assertionModal(){
        utils.validarText(this.messageModal, "Fechar")
    }
    assertSenhaEmBranco(){
        utils.validarText(this.messagePasswordEmBranco, 'É campo obrigatório')
    }
    assertConfirmarSenhaEmBranco(){
        utils.validarText(this.messageConfirmPasswordEmBranco, 'É campo obrigatório')
    }

}