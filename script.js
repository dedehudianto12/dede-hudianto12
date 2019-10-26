
function pilihComp(){
    var comp = Math.random()
    if (comp < 0.35){
        return 'batu'
    }else if (comp >= 0.35 && comp < 0.66){
        return 'kertas'
    }
    return 'gunting'

}

function hasilSuit(player, comp){
    if (player === comp){
        return 'SERI'
    }else if (player == 'batu'){
        if (comp == 'gunting'){
            return 'MENANG'
        }else{
            return 'KALAH'
        }
    }else if (player == 'gunting'){
        if (comp == 'batu'){
            return 'KALAH'
        }else{
            return 'MENANG'
        }
    }else if (player == 'kertas'){
        if (comp == 'batu'){
            return 'MENANG'
        }else{
            return 'KALAH'
        }
    }
}

const pBatu = document.querySelector('.batu')
pBatu.addEventListener('click', function(){
    const pilihKoputer = pilihComp()
    const pilihPlayer = pBatu.className
    const result = hasilSuit(pilihPlayer, pilihKoputer)

    const gambarKomputer = document.querySelector('.image-comp')
    gambarKomputer.setAttribute('src', 'image/' + pilihKoputer + '.png')

    const res = document.querySelector('#result')
    res.innerHTML = result
})

const pGunting = document.querySelector('.gunting')
pGunting.addEventListener('click', function(){
    const pilihKoputer = pilihComp()
    const pilihPlayer = pGunting.className
    const result = hasilSuit(pilihPlayer, pilihKoputer)

    const gambarKomputer = document.querySelector('.image-comp')
    gambarKomputer.setAttribute('src', 'image/' + pilihKoputer + '.png')

    const res = document.querySelector('#result')
    res.innerHTML = result
})

const pKertas = document.querySelector('.kertas')
pKertas.addEventListener('click', function(){
    const pilihKoputer = pilihComp()
    const pilihPlayer = pKertas.className
    const result = hasilSuit(pilihPlayer, pilihKoputer)

    const gambarKomputer = document.querySelector('.image-comp')
    gambarKomputer.setAttribute('src', 'image/' + pilihKoputer + '.png')

    const res = document.querySelector('#result')
    res.innerHTML = result
})

