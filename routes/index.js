var express = require('express');
var db = require('../util/db')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/listar')
});
router.get('/listar', function(req,res){
       db.query('SELECT * FROM postuser ORDER BY id desc',[],function(erro,resultado){
         if(erro){
           res.status(200).send(erro)
         }
        
         res.render('lista',{listaDados : resultado})
        
       });

       
});

router.get('/add', function(req, res, next) {
  res.render('form',{postagem : {}});
});

router.post('/add', function(req, res, next) {

  db.query('insert into postuser(titulo,textuser,nomeuser,imagem) values(?,?,?,?);',[req.body.titulo, req.body.post, req.body.nomeUser,req.body.imagem],
  function(erro){
    if(erro){
      res.status(200).send('erro na criação do post' + erro)
    }
    
    res.redirect('/listar')

  });

});

router.get('/edit/:id',function(req,res,next){
      db.query('SELECT * FROM postuser WHERE id = ?',[req.params.id],function(erro,resultado){
        if(erro){
          res.status(200).send('erro : '+ erro);
        }
        res.render('form',{postagem : resultado[0]});
      })
}
)


router.post('/edit/:id', function(req, res, next) {

  db.query('update postuser SET nomeuser = ? , titulo = ? , textuser = ? , imagem = ?  where id = ?',[req.body.nomeUser,req.body.titulo, req.body.post,req.body.imagem,req.params.id],
  function(erro){
    if(erro){
      res.status(200).send('erro na criação do post' + erro)
    }
    
    res.redirect('/listar')

  });

});


router.get('/excluir/:id',function(req,res,next){
  db.query('DELETE FROM postuser WHERE id = ?',[req.params.id],function(erro,resultado){
    if(erro){
      res.status(200).send('erro : '+ erro);
    }
    res.redirect('/listar')
  })
}
)



router.post('/comment/:id',function(req,res,next){
  db.query('insert into comentarios(nameC,coment,imagemurl,idposts) values(?,?,?,?);',[req.body.nomecomment,req.body.textcomment,req.body.url, req.params.id],
  function(erro){
    if(erro){
      res.status(200).send('erro na criação do post' + erro)
    }
    
    res.redirect('/listar')

  });
  
}
)

router.get('/api',function(req,res,next){
  db.query('SELECT * FROM comentarios',[],function(erro,resultado){
    if(erro){
      res.status(200).send(erro)
    }
   
    res.json({comentarios : resultado})
   
  });
  
})




module.exports = router;
