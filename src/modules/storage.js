const get = (name) => {
    const stored_data = localStorage.getItem(name);
    if(stored_data){
        return JSON.parse(stored_data);
    }   
}

const set = (name, object) => {
    localStorage.setItem(name, JSON.stringify(object));
}

const del = (name) => {
    localStorage.removeItem(name);
}

module.exports.get = get;
module.exports.set = set;
module.exports.del = del;