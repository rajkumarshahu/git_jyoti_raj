const pluralize = require("pluralize");

class BaseController {
  constructor(model, modelName, key){
    this.model = model;
    this.modelName = modelName;
    this.key = key;
  }

  create(data, id) {
    if (id === null)
    {
    return this.model
      .create(data)
      .then((modelInstance) => {
        var response = {};
        response = modelInstance;
        //[this.modelName]
        return response;
      });
    }
    else {
      let filter = {};
      filter[this.key] = id;
      return this.model
        .findOne(filter)
        .then((modelInstance) => {
          for (let attribute in data){
            if (data.hasOwnProperty(attribute) && attribute !== this.key && attribute !== "_id"){
              modelInstance[attribute] = data[attribute];
            }
          }
          return modelInstance.save();
        })
        .then((modelInstance) => {
          let response = {};
          response = modelInstance;
          return response;
        });
    }
  } 
  read(data) {
      let filter = {} = data;
      return this.model
      .findOne(filter)
      .then((modelInstance) => {
        var response = {};
        response = modelInstance;
        return response;
      });
  }
  update(id, data) {
    
  }

  delete(id) {
    const filter = {};
    filter[this.key] = id;
    return this.model
      .deleteOne(filter)
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