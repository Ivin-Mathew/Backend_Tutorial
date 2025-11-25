const db = {
    items:[],
    nextId:1,
}

exports.getAll = () => db.items;

exports.create = (payload) =>{
    const item = {
        id: db.nextId++,
        name: payload.name,
        imgUrl: payload.imgUrl,
        description: payload.description,
    }
    db.items.push(item);
    return(item);
}

exports.modify = ({id, changes}) =>{
    const idx = db.items.findIndex(i=> i.id === id);
    if(idx === -1){
        return null;
    }
    db.items[idx] = {
        ...db.items[idx],
        ...changes,
        id
    };

    return db.items[idx];
}

exports.delete = ({id}) =>{
    const idx = db.items.findIndex(i=> i.id === id);
    if(idx === -1){
        return null;
    }
    const [deleted] = db.items.splice(idx,1);
    return deleted;
}

