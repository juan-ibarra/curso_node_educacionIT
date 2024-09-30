const { Response } = require("express");

const homeUsers = (req, res = Response) => {
    res.render('users')
}

const loginUsersViews = (req, res = Response) => {
    res.render('loginUser')
}

const loginUsers = (req, res = Response) => {

    const { email, password } = req.body;

    if(!email || !password){
        return res.render('loginUser', {
            mensaje: 'Todos los campos son obligatorios' 
        });
    }

    
    let userAdmin = 'pepe@gmail.com';
    let nombreAdmin = 'Pepe';
    let passwordAdmin = '123456';

    if(email === userAdmin && password === passwordAdmin){
        return res.render('admin', {
            mensaje: `Bienvenido ${nombreAdmin}`
        });
    }

    res.send('Tus datos han sido enviados correctamente');
    
}


module.exports = {
    homeUsers,
    loginUsersViews,
    loginUsers
}

