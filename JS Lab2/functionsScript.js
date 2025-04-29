function Func1(fullname){
    console.log(fullname);
    let words = fullname.split(' ');
    //console.log(words);
    for(var i=0;i<words.length;i++){
        //console.log(words[i]);
        let letters = words[i].split('');
        for(var j=0;j<letters.length;j++){
            
            if(j == 0)
                letters[j] = letters[j].toUpperCase();
            else
            letters[j] = letters[j].toLowerCase();
        }
        words[i] = letters.join('');
    }

    fullname = words.join(' ');

    words.forEach(element => {
        //console.log(element);
    });

    console.log(fullname);
}

function Func2(sentence){
    console.log(sentence);
    let words = sentence.split(' ');
    var longestword;
    var longestsize = 0;
    words.forEach(element => {
        if(element.length > longestsize){
            longestsize = element.length;
            longestword = element;
        }
        
    });
    
    console.log(longestword);
        return longestword;
}

function Func3(string){
    string = string.split('');
    console.log(string.sort());
    return string;
}

function Func4(arr1,arr2){
    let common = [];
        for(var i=0;i<arr1.length;i++){
            for(var j=0;j<arr2.length;j++)
            {
                if(arr1[i] == arr2[j]){
                    common.push(arr1[i]);
                }
            }
        }
        console.log(common);
    return common;
}


function Func5(arr1){
    let holder = [];
    for(var i=0;i<arr1.length;i++){
        var notexist = true;
        for(var j=0;j<holder.length;j++)
        {
            if(arr1[i] == holder[j])
                notexist = false;
        }
        if(notexist)
            holder.push(arr1[i]);
    }
    console.log(holder);
}