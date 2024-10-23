import util from "../utils/util"
const utils = new util

export default class HomePage {
    numConta = '#textAccountNumber > span'
    txtNome = '#textName'
    btnTransferencia = '#btn-TRANSFERÊNCIA'
    btnPagamentos = '#btn-PAGAMENTOS'
    btnExtrato = '#btn-EXTRATO'
    btnSaque = '#btn-SAQUE'
    saldoEmConta = '#textBalance > span'
    btnSair = '.home__ContainerLink-sc-1auj767-2'
    btnVoltar = '#btnBack'
    btnCloseModal = '#btnCloseModal'

    numContaTransf = ':nth-child(1) > .input__default'
    digitoConta = '.account__data > :nth-child(2) > .input__default'
    vlrTransf = '.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default'
    descricao = ':nth-child(3) > .input__default'
    btnTransferir = '.style__ContainerButton-sc-1wsixal-0'
    modalText = '#modalText';
    errorText = '.kOeYBn > .input__warging'

    saldoDisponivel = '#textBalanceAvailable'
    textoTransfExtrato = ':nth-child(2) > .bank-statement__ContainerDescAndValue-sc-7n8vh8-15 > #textDescription'

    clickBtnCloseModal(){
        utils.click(this.btnCloseModal)
    }

    clickBtnTransferencia() {
        utils.clickForce(this.btnTransferencia)
    }

    clickBtnPagamentos() {
        utils.click(this.btnPagamentos)
    }

    clickBtnExtrato() {
        utils.click(this.btnExtrato)
    }

    clickBtnSaque() {
        utils.click(this.btnSaque)
    }

    clickBtnSair() {
        utils.click(this.btnSair)
    }

    clickBtnVoltar() {
        utils.clickForce(this.btnVoltar)
    }

    validaNomeConta(str) {
        utils.validarText(this.txtNome, str)
    }

    validaNumConta(str) {
        utils.validarText(this.numConta, str)
    }

    validaSaldoEmConta(str) {
        utils.validarText(this.saldoEmConta, str)
    }

    digitarNumContaTransf(str) {
        utils.preencherInput(this.numContaTransf, str)
    }

    digitarDigitoConta(str) {
        utils.preencherInput(this.digitoConta, str)
    }

    digitarVlrTransf(str) {
        utils.preencherInput(this.vlrTransf, str)
    }

    digitarDescricao(str) {
        utils.preencherInput(this.descricao, str)
    }

    clickBtnTransf() {
        utils.click(this.btnTransferir)
    }

    validaTextoTransfereciaSucesso() {
        utils.validarText(this.modalText, 'Transferencia realizada com sucesso')
    }

    validaTextoTransfereciaContaInvalida() {
        utils.validarText(this.modalText, 'Conta inválida ou inexistente')
    }

    validaTextoTransfereciaValorInvalido() {
        utils.validarText(this.modalText, 'Valor da transferência não pode ser 0 ou negativo')
    }

    validaTextoTransfereciasaldoInvalido() {
        utils.validarText(this.modalText, 'Você não tem saldo suficiente para essa transação')
    }

    validaTextoTransfereciaValorEmBranco() {
        utils.validarText(this.errorText, 'ransferValue must be a `number` type, but the final value was: `NaN` (cast from the value `" "`)')
    }
    validaTextoTransfereciaMesmaConta(){
        utils.validarText(this.modalText, 'Nao pode transferir pra mesmo conta')
    }

    validaTextoTransf(str){
        utils.validarText(this.textoTransfExtrato, str)
    }

    validafuncionalidadeEmDesenvolvimento(){
        utils.validarText(this.modalText, 'Funcionalidade em desenvolvimento')
    }
}