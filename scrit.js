function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
//  TESTE DE MODELO var hora = 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora>= 0 && hora < 12){ 
// Bom dia
img.src ='img/manha.png'
document.body.style.background = '#e2cd9f'
}
else if (hora >=12 && hora <18){
    // Boa Tarde
    img.src='img/tarde.png'
    document.body.style.background = '#b9846f'
}
else{
    // Boa noite
    img.src='img/noite.png'
    document.body.style.background = '#515154'
}

}
