const pluralize = require("pluralize");

class BaseController {
  constructor(model, modelName, key){
    this.model = model;
    this.modelName = modelName;
    this.key = key;
  }

  create(data) {
    return this.model
      .create(data)
      .then((modelInstance) => {
        var response = {};
        response = modelInstance;
        //[this.modelName]
        return response;
      });
  } 
  read(data) {
      var filter = {} = data;
      //filter[this.key] = id;
      return this.model
      .findOne(filter)
      .then((modelInstance) => {
        var response = {};
        response = modelInstance;
        return response;
      });
  }

  update(id, data) {
    var filter = {};
    filter[this.key] = id;
    return this.model
      .findOne(filter)
      .then((modelInstance) => {
        for (var attribute in data){
          if (data.hasOwnProperty(attribute) && attribute !== this.key && attribute !== "_id"){
            modelInstance[attribute] = data[attribute];
          }
        }
  
        return modelInstance.save();
      })
      .then((modelInstance) => {
        var response = {};
        response = modelInstance;
        return response;
      });
  }

  delete(id) {
    const filter = {};
    filter[this.key] = id;
    return this.model
      .remove(filter)
      .then(() => {
        return {};
      })
  }

  list() {
    return this.model
    .find({})
    .limit(20)
    .then((modelInstances) => {
        var response = {};
        response = modelInstances;
        //[pluralize(this.modelName)]
        return response;
    });
  }
}

module.exports = BaseController;