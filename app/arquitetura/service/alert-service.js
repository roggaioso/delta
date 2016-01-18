/*
* um service centraliza um serviço, neste caso a exibição de mensagens. Aqui, o uso do Toastr, que antes
* estava espalhado pelo código, foi substitído por este service. Caso futuramente queira-se
* substituir o Toastr por outra ferramenta, bastaria alterar aqui, ao invés de ter que sair alterando
* o projeto inteiro
*/
angular.module('primeiro')
    .service('AlertService', AlertService);

AlertService.$inject = ['toastr'];

function AlertService(toastr){

    this.showSuccess = showSuccess;
    this.showError = showError;
    this.showInfo = showInfo;
    this.showWarning = showWarning;

    function showSuccess(mensagem, titulo){
        //valida se o valor é nulo, válido (undefined) ou vazio, não só isso. Algo como:
        //                       if((tipo != null) && (tipo != undefined) && (tipo != ''))
        if(!titulo){
            titulo = 'Ok';
        }

        //o ideal seria criar um  objeto a parte, definindo estas configurações
        toastr.success(mensagem, titulo, {progressBar: true, extendedTimeOut: 100});
    }

    function showError(mensagem, titulo){
        //
        if(!titulo){
            titulo = 'Erro';
        }

        //o ideal seria criar um  objeto a parte, definindo estas configurações
        var configuracao = {};
        configuracao.progressBar = true;
        configuracao.extendedTimeOut = 1;

        toastr.error(mensagem, titulo, configuracao);
    }

    function showInfo(mensagem, titulo){
        //
        if(!titulo){
            titulo = 'Aviso';
        }

        toastr.info(mensagem, titulo);
    }

    function showWarning(mensagem, titulo){
        //
        if(!titulo){
            titulo = 'Atenção';
        }

        toastr.warning(mensagem, titulo);
    }
}