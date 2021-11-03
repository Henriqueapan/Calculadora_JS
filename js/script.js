let buff = 0

function calcular(op, val) {
    let tela = document.querySelector("#result")
    let buff0 = buff.toString()

    if(op === 'acao'){
        if(val == 'clr'){
            tela.value = ''
            buff = 0            
        }
        else if (val != 'res' && tela.value != '' && val != '.'){
            (isNaN(tela.value[(tela.value.length)-1])) ? 
                tela.value = tela.value.replace(/.$/, val) : 
                (tela.value += val); buff=0;
        }
        else if (val === '.' && !(buff0.includes('.'))){
            tela.value += val
            buff += val
        }
        else if (val === 'res')/*resultado (=)*/{
            tela.value = eval(tela.value)
            buff = tela.value
        }
        if ((val == '-') && (tela.value == '')) {
            tela.value += '-'
            buff += val
            //console.log(buff)
        }

    }else {
        tela.value += val
        buff += val
        //console.log(buff)
    }
}