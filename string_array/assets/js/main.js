   let value = 'Salam olsun hamiya';
   
    function stringToArray(str){

        let myArray = str.split(' ');
    
        myArray= myArray.map(n=>{
            return n.length;
            
        })
        return myArray
    }

    console.log(stringToArray(value));