function wordy(id){
     id = id.startsWith("#") ? id.substr(1,id.length) : id;
     let element = document.getElementById(id);
     
     if(element==null){
         throw new Error("Oppsss! wordy is unable to find the element with this id");

     }

     let text = element.innerText;
       function words(){
        text = text.replace(/\s{2,}/g, ' ');
        return text.split(" ").length;
       }
       function characters(){
         return text.split("").length
       }
       function frequency(is_sort){
        text = text.replace(/\s{2,}/g, ' ');
            let words = text.split(" ");
            let frequency = new Map();
           
            for(let i=0;i<words.length;i++){

                let word = words[i];
                if(frequency.has(word)){
                     frequency.set(word,frequency.get(word)+1)
                }else{
                    frequency.set(word,1);
                }

            }
        
          return mapToJson(frequency,is_sort);
       }  
       
       function mapToJson(map,is_sort){

           let obj={};
           let keys = Array.from(map.keys())
           keys = is_sort ? keys.sort() : keys;
           for ( let key of keys){
               obj[key] = map.get(key);
           }

           return JSON.stringify(obj);
       }

       return {
           words,
           characters,
           frequency
       }
        
}

