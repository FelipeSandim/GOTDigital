
import util from "../utils/util"
const utils = new util

export default class loginPage{

    Url = 'https://bugbank.netlify.app'
    userName = '.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default'
    userSenha = '.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default'
    clickLogin = '.otUnI'
    assert = '#__next > div > div.home__ContainerInformations-sc-1auj767-3.iVkSdN > div > div.home__ContainerText-sc-1auj767-7.iDA-Ddb > p:nth-child(2)'
    messageEmailInvalido = '.kOeYBn > .input__warging'
    messageSenhaEmBranco = '.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging'
    messageSenhaInvalida = '#btnCloseModal'


    navegarNoSite(){
        utils.acessarUrl(this.Url)
    }
    campoEmail(str){
        utils.preencherInput(this.userName, str)
    }
    campoSenha(str){
        utils.preencherInput(this.userSenha, str)
    }
    botaoLogin(){
        utils.click(this.clickLogin)
    }
    assertionLogin(){
        utils.validarText(this.assert, 'bem vindo ao BugBank')
    }
    assertionEmailInvalido(){
        utils.validarText(this.messageEmailInvalido, 'Formato inválido')
    }
    assertionModal(){
        utils.validarText(this.messageSenhaInvalida, "Fechar")
    }
    assertEmailEmBranco(){
        utils.validarText(this.messageEmailInvalido, 'É campo obrigatório')
    }
    assertSenhaEmBranco(){
        utils.validarText(this.messageSenhaEmBranco, 'É campo obrigatório')
    }

}