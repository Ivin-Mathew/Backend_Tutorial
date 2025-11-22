const db = {
    items:[],
    nextId:1,
}

exports.findAll = () => db.items;

exports.create = (payload) => {
    const item = {id: db.nextId++, name:payload.name, meta:payload.meta || {}};
    db.items.push(item);
    return item;
}

exports.update = (id, changes) =>{
    const idx = db.items.findIndex(i=>i.id === id);
    if(idx === -1){
        return null;
    }
    db.items[idx] = {...db.items[idx], ...changes, id};
    return db.items[idx];
}

exports.remove = (id) =>{
    const idx = db.items.findIndex(i => i.id === id);
    if(idx === -1){
        return null;
    }
    const [removed] = db.items.splice(idx, 1);
    return removed;
}