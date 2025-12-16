class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    // hash function - 0(1)
    _hash(key){
        let hash = 0;
        for(let i = 0; i< key.length; i++){
            hash = (hash + key.charCodeAt(i)*i) % this.data.length;
        }
        return hash;
    }

    // my code -> there is no case for collision and
    // don't need to test whether the address is less than length
    // it is done by hash function
    // set(key,value){
    //     let address = this._hash(key);
    //     if(address < this.data.length){
    //         this.data[address] = [key,value]
    //     } else {
    //         address = this.data.length - address;
    //         this.data[address] = [key,value];
    //     }
    //     return this.data;
    // }
    // get(key){
    //     let address = this._hash(key);
    //     if (address < this.data.length){
    //         return this.data[address][1];
    //     } else {
    //         address = this.data.length - address;
    //         return this.data[address][1];
    //     }
    // }

    // O(1)
    set(key,value){
        let address = this._hash(key);
        //collision
        if(!this.data[address]){
            this.data[address] = [];
            this.data[address].push([key,value]);
        } else {
            this.data[address].push([key,value]);
        };
        return this.data;
    }

    // O(1) - no collision
    get(key){
        let address = this._hash(key);
        let values = this.data[address]
        for(let i = 0; i< values.length; i++){
            if(values[i][0] === key){
                return values[i][1];
            }
        }
        return undefined;
    }

    // without collision
    keys(){
        const keysArray = [];
        for(let i =0; i< this.data.length; i++){
            if(this.data[i]){
                // console.log(this.data[i][0][0])
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }

    // with collision
    keysWithCollision(){
        const keysArray = [];
        for(let i =0; i< this.data.length; i++){
            if(this.data[i]){
                if(this.data[i].length > 1) {
                    for(let j = 0; j< this.data[i].length; j++){
                        keysArray.push(this.data[i][j][0])
                    }
                } else {
                    keysArray.push(this.data[i][0][0])
                }
            }
        }
        return keysArray;
    }

    values(){
        const valuesArray = [];
        for(let i = 0; i< this.data.length; i++){
            if(this.data[i]){
                if(this.data[i].length > 1){
                    for(let j = 0; j < this.data[i].length; j++){
                        valuesArray.push(this.data[i][j][1]);
                    }
                } else {
                    valuesArray.push(this.data[i][0][1]);
                }
            }
        }
        return valuesArray;
    }
}

const myHashTable = new HashTable(50);
console.log(myHashTable._hash('grapes'));
console.log(myHashTable.set('apples',500));
console.log(myHashTable.set('grapes',10000));   //[['grapes',10000]]
console.log(myHashTable.set('oranges',2))
console.log(myHashTable.get('grapes')); //10000
console.log(myHashTable.get('apples')); //500
console.log(myHashTable.keys());
console.log(myHashTable.values());