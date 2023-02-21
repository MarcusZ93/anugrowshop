const dataProducts = require('../data/products.json');

const productos = JSON.parse(JSON.stringify(dataProducts));

module.exports = {

    // GET /


    index: function (req, res) {
            
            res.render('home');
    
        },


    products: function (req, res) {
                
        const  {id , nombre , precio} = req.body;

       console.log(productos)


        res.render('products' , {productos});
    
    },
            

    //funcion para agregar productos al shoping
    addProducts: function (req, res) {

        



    }
                
    ,
    
    productDetail : function (req, res) {


        let id = req.params.id;
        let producto = productos.find(producto => producto.id == id);
        res.render('productDetail' , {producto});


    }

    ,

    about : function (req, res) {
    
        res.render('about');

    }

    ,

    cart : function (req, res) {
    
        res.render('cart');

    }

    ,

    register : function (req, res) {

        res.render('register');

    }

    ,

    //post
    registerUser : function (req, res) {


        const {name , email , password} = req.body;

        let user = users.find(user => user.email == email);

        if(user){
            res.render('register' , {error : 'El usuario ya existe'});
        }else{
            let newUser = {
                name,
                email,
                password
            }
            users.push(newUser);

            res.redirect('/login');

        }
        


    }
    




    }

