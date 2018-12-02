
var utils = require('../utils/utils')

module.exports = {

list(controller ,req, res){
    if (req.params.key != null)
        {
          controller
          .read(req.params.key)
          .then(utils.ok(res))
          .then(null, utils.fail(res));
        }
        else {
        console.log(controller);
         controller
            .list()
            .then(utils.ok(res))
            .then(null, utils.fail(res));
        }
  },
  save(controller ,req, res){

        if (req.params.key != null) {
            this.controller
            .update(req.params.key, req.body)
            .then(utils.ok(res))
            .then(null, utils.fail(res));
        }
       else {
            controller
            .create(req.body)
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


