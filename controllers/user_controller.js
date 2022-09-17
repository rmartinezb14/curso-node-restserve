const {response,request}= require('express');

const usuariosGet=(req=request, res=response) => {
    const {q,nombre='No name',apellidos} = req.query;
    res.json({
        msg: 'get API-conntrolador',
        q,
        nombre,
        apellidos
    });
}

const usuariosPost=(req, res=response) => {
    const {nombre,edad}=req.body;
    res.json({
        msg: 'post API-conntrolador',
        nombre,
        edad
    });
}

const usuariosPut=(req, res=response) => {
    const {id}=req.params;
    res.json({
        msg: 'put API-conntrolador',
        id
    });
}

const usuariosDelete=(req, res=response) => {
    res.json({
        msg: 'delete API-conntrolador'
    });
}

module.exports={usuariosGet,usuariosPost,usuariosPut,usuariosDelete}