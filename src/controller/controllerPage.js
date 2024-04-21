import express from 'express';
import Produto from '../models/confiProd.js';

const app = express();


export const home = (req, res) =>{
    res.render('page/home', {

    })
}


 export const pedido =  async (req, res) =>{
    const produtos = await Produto.findAll()
   
    res.render('page/pedidos', {
        produtos
    })
}




export const lancamentoprodutos =  (req, res) =>{
    res.render('page/lancamentoprod',{})
}

export const error = (req, res)=>{
    res.render('page/erro',{
        
      })    
}

export const novousuario = async(req, res) =>{

    let erros = [];

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome === null ){
        erros.push({texto: "Preencha o campo nome"})
    }

    if(!req.body.preco || typeof req.body.preco == undefined || req.body.preco === null ){
        erros.push({texto: "Preencha o campo preco"})
    }

    let cad = [];

    if(req.body.nome && req.body.preco != ''){
        cad.push({cadText: "Cadastrado com sucesso"})
   }

  
    if(erros.length > 0){
        res.render('page/lancamentoprod', {erros: erros})
    }else{
        await Produto.create({
            nome: req.body.nome,
            preco: req.body.preco
          }).then(() =>{
            if(cad.length > 0){
                res.render('page/lancamentoprod', {cad: cad})
            }
        }).catch((err)=>{
             res.send(err)
          })
    }
}

