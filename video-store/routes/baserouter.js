
var utils = require('../utils/utils')

module.exports = {
list(controller, req, res){

    if (Object.keys(req.params).length > 0)
    {
        controller
        .read(req.params)
        .then(utils.ok(res))
        .then(null, utils.fail(res));
    }
    else {
        controller
        .list()
        .then(utils.ok(res))
        .then(null, utils.fail(res));
    }
  },
  save(controller, req, res){
        if (Object.keys(req.params).length > 0) {
            controller
            .create(req.body, req.params._id)
            .then(utils.ok(res))
            .then(null, utils.fail(res));
        }
       else {
            controller
            .create(req.body, null)
            .then(utils.ok(res))
            .then(null, utils.fail(res));
       }
  },
  remove(controller ,req, res) {
            controller
            .delete(req.params.key)
            .then(utils.ok(res))
            .then(null, utils.fail(res));
    }
}


