import express, { query } from "express";
import * as PageController from "../controller/pageController.js";
import Pet from '../models/pets.js';

export const search = (req, res)=>{

    let query = req.query.q;

    if(!query){
        res.redirect('/');
        return;
    }
    let  list = Pet.getFromName(query);

    res.render('pages/page',{
        menu: PageController.home,
        list,
        query
    })
}