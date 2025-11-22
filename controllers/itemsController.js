const itemsService = require("../services/itemsService");

exports.getAll = (req,res) =>{
    const items = itemsService.findAll();
    res.json({ok: true, data: items});
};

exports.create = (req, res) =>{
    const payload = req.body;
    if(!payload){
        return res.status(400).json({ok:false, error:"Missing payload"});
    }
    const created = itemsService.create(payload);
    res.status(201).json({ok:true,  data:created});
};

exports.update = (req, res) =>{
    const id = Number(req.params.id);
    res.json({ok:true, data:id});
};

exports.remove = (req, res) =>{
    const id = Number(req.params.id);

    res.json({ok:true, data:id});
};

