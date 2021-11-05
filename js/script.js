let buff = 0

function calcular(op, val) {
    let tela = document.querySelector("#result")
    let buff0 = buff.toString()

    if(op === 'acao'){
        if(val == 'clr'){
            tela.value = ''
            buff = 0            
        }
        else if (val != 'res' && tela.value != '' && tela.value != '-' && val != '.'){
            if(buff != -1){
                (isNaN(tela.value[(tela.value.length)-1])) ? 
                    tela.value = tela.value.replace(/.$/, val) : 
                    (tela.value += val); buff=0;
            }else{
                buff = 0;
                tela.value = buff+val;
            }
        }
        else if (val === '.' && !(buff0.includes('.'))){
            if(buff!=-1){
                tela.value += val
                buff += val
            }else {
                buff = 0;
                tela.value = buff + val;
            }
        }
        else if (val === 'res')/*resultado (=)*/{
            if(tela.value.includes('/0')){
                tela.value = 'Operação inválida (div. por 0)';
                buff = -1;
            }else if (tela.value != ''){
                tela.value = eval(tela.value)
                buff = tela.value
            }
        }
        if ((val == '-') && (tela.value == '')) {
            tela.value += '-'
            buff += val
            //console.log(buff)
        }

        if((tela.value == '-') && (val == '+')){
            tela.value = '';
            buff = 0;
        }

    }else {
        if(buff!=-1){
            tela.value += val
            buff += val
            //console.log(buff)
        }else {
            buff = 0;
            tela.value = val;
        }
    }
}