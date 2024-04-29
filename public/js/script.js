const nome = document.getElementById('nome')
const preco = document.getElementById('preco')
const labelnome = document.getElementById('labelnome')
const labelpreco = document.getElementById('labelpreco')
const labeldesc = document.getElementById('labeldesc')

const botao = document.getElementById('botao')

document.getElementById('botao').addEventListener('click', function(event) {
    
    if(nome.value === '' || isNaN(nome.value) === false){
      event.preventDefault()
      nome.style.border = '1px solid red';
      labelnome.style.display = 'block'
    }else{
        nome.style.border = '1px solid blue';
        labelnome.style.display = 'none'
    }
     

    if (preco.value === '' || isNaN(preco.value) === true) {
        event.preventDefault()
        preco.style.border = '1px solid red';
        labelpreco.style.display = 'block'
    }else{
        preco.style.border = '1px solid blue';
        labelpreco.style.display = 'none'
    }


    if (desc.value === '') {
        event.preventDefault()
        desc.style.border = '1px solid red';
        labeldesc.style.display = 'block'
    }else{
        desc.style.border = '1px solid blue';
        labeldesc.style.display = 'none'
    }

});