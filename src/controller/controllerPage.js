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




export const menubuttonprodutos = (req, res)=>{
    res.render('page/menubutton')
}

export const editarprod = (req, res)=>{
    res.render('page/editprod')
}

export const deleterprod = (req, res)=>{
    res.render('page/deleteprod')
}

export const cadastrodeproduto =  (req, res) =>{
    res.render('page/cadastroprod',{})
}

export const error = (req, res)=>{
    res.render('page/erro',{
        
      })    
}

export const novoProduto = async(req, res) =>{

    let erros = [];
    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome === null 
     || !req.body.preco || typeof req.body.preco == undefined || req.body.preco === null 
     || !req.body.desc_prod || typeof req.body.desc_prod == undefined || req.body.desc_prod === null){
        erros.push({texto: "Preencha todos os campos"})
    }

    let cad = [];

    if (req.body.nome && req.body.desc_prod !== '' && (/^\d+(\.\d{1,2})?$/.test(req.body.preco) === true)) {
        cad.push({cadText: "Cadastrado com sucesso"})
    }

    
  
    if(erros.length > 0){
        res.render('page/cadastroprod', {erros: erros})
    }else{
        await Produto.create({
            nome: req.body.nome,
            preco: req.body.preco,
            desc_prod: req.body.desc_prod
          }).then(() =>{
            if(cad.length > 0){
                res.render('page/cadastroprod', {cad: cad})
            }
        }).catch((err)=>{
            res.render('page/cadastroprod', {err: err})
          })
    }
}
