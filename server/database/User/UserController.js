var User = require('./UserModel.js');
module.exports ={
  signupUser : function (req, res) {
    for (var i = 0; i < req.body.length; i++) {
      var NewUser = new User ({
            username: req.body[i].username,
             email:req.body[i].email
      });
      NewUser.save(function (err,newUser) {
        console.log("newUser")
        if (err) {
          res.status(500).send(err);
          console.log(err)
        }else{
          res.json(newUser); 
        }
      })
    }
    //res.json(req.body);
    console.log('signup User succefuly')
  },
    getuserByUserName: function (req,res) {
    User.findOne({username:req.params.username}).exec(function (err, oneuser) {
      if(err){
        res.status(500).send('err');
      }else{
        res.status(200).send(oneuser);
      }
    });
  }
}