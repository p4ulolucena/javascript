function gerar() {
    var tab = document.getElementById('tabu')
    var res = document.getElementById('resu')
    if (tab.value.length == 0) {
        window.alert('ERRO, digite um número para tabuada')
    } else {
        var n = Number(tab.value)
        var c = 1
        res.innerHTML = ''
            for(var c = 1; c <= 10; c++) {
            var r = Number(n*c)
            res.innerHTML += `${n} x ${c} = ${r} <br>`
            }
    }
     }
