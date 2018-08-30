var mongoose = require('mongoose');

mongoose.connect('mongodb://ebram:ebram123@ds135061.mlab.com:35061/todo');
var todoSchema =new mongoose.Schema({
    item: String
});
var todoCollection = mongoose.model('Todo',todoSchema);

var data = [{item:'get milk'},{item:'push up'}];

module.exports = (app)=>{

    app.get('/todo',(req,res)=>{
        todoCollection.find({},(err,data)=>{
            if(err)
                throw err;
            res.render('todo',{todos:data});
        });
    });
    app.post('/todo',(req,res)=>{
        todoCollection(req.body).save((err,data)=>{
            if(err)
                throw err;
            res.json(data);
        })
    });
    app.delete('/todo/:item',(req,res)=>{
        todoCollection.find({item:req.params.item.replace(/ /g,'-')})
        .remove((err,data)=>{
            if(err)
                throw err;
            res.json(data);
        })
        // data = data.filter((todoItem)=>{
        //     return todoItem.item.replace(/ /g,'-') !== req.params.item
        // })
    });
    app.put('/todo',(req,res)=>{

    });
}
