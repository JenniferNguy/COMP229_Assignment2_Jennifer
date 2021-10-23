// create a reference to the model
let Business = require('../models/business');

module.exports.businessList = function(req, res, next) {  
    Business.find((err, businessList) => {
        // console.log(businessContactList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('business/list', {
                title: 'Business Contacts', 
                BusinessList: businessList
            })            
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Business.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('business/add_edit', {
                title: 'Edit Contact', 
                item: itemToEdit
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Business({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.qty,
        email: req.body.email,
    });

    // console.log(updatedItem);

    Business.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/business/list');
        }
    });
}


module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Business.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/business/list');
        }
    });
}


module.exports.displayAddPage = (req, res, next) => {
    let newItem = Business();

    res.render('business/add_edit', {
        title: 'Add a new Contact',
        item: newItem
    })          
}

module.exports.processAddPage = (req, res, next) => {
    let newItem = Business({
        _id: req.body.id,
        _id: req.body.id,
        name: req.body.name,
        number: req.body.qty,
        email: req.body.email,
    });

    Business.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/business/list');
        }
    });

}