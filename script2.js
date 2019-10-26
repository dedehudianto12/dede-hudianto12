var main = true
while ( main ){
    // menangkap pilihan player
    var player = prompt('pilih : gajah, semut, orang')

    // menangkap pilihan kompputer
    // memilih bilangan random
    var comp = Math.random()
    if (comp < 0.35){
        comp = 'gajah'
    }else if (comp >= 0.35 && comp < 0.66){
        comp = 'semut'
    }else if (comp >= 0.66){
        comp = 'orang'
    }
    // menentukan rules
    var hasil = ''
    if (player === comp){
        hasil = 'SERI'
    }else if (player == 'gajah'){
        if (comp == 'orang'){
            hasil = 'MENANG'
        }else{
            hasil = 'KALAH'
        }
    }else if (player == 'orang'){
        if (comp == 'gajah'){
            hasil = 'KALAH'
        }else{
            hasil = 'MENANG'
        }
    }else if (player == 'semut'){
        if (comp == 'gajah'){
            hasil = 'MENANG'
        }else{
            hasil = 'KALAH'
        }
    }else{
        hasil = 'SALAH PILIH'
    }
    // tampilkan hasil

    alert('PLAYER = ' + player + '\nCOMPUTER = ' + comp + '\nKAMU ' + hasil)
    main = confirm('Main Lagi ?')
}

alert('THX FOR PLAYING')