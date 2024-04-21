import express from "express";

import Pet from '../models/pets.js';

export const home = (req, res)=>{
    let list = Pet.getAll();
    res.render('pages/page',{
        menu: {
            all:true,
            dog:false,
            cat:false,
            fish:false
        },
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
    
};

export const dogs = (req, res)=>{   
    let list = Pet.getFromType('dog');
    res.render('pages/page',{
        menu: {
            all:false,
            dog:true,
            cat:false,
            fish:false
        },
        banner: {
            title: 'Todos os Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
};

export const cats = (req, res)=>{
    let list = Pet.getFromType('cat');

    res.render('pages/page',{
        menu: {
            all:false,
            dog:false,
            cat:true,
            fish:false
        },
        banner: {
            title: 'Todos os Gatos',
            background: 'allanimals.jpg'
        },
        list
    });
};

export const fishes = (req, res)=>{
    let list = Pet.getFromType('fish');

    res.render('pages/page',{
        menu: {
            all:false,
            dog:false,
            cat:false,
            fish:true
        },
        banner: {
            title: 'Todos os Peixes',
            background: 'allanimals.jpg'
        }, 
        list
    });
};