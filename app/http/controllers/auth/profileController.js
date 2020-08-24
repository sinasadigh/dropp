const controller = require('app/http/controllers/controller');
class loginController extends controller {

async profile(req, res, next) {
    res.json({
      message : 'پروفایل کاربر',
      user : req.user,
      token : req.query.secret_token
    })


}

}

module.exports = new loginController();