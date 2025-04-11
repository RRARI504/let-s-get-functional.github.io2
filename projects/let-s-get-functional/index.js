// #!/usr/bin/env node

'use strict';


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    /*
    let count = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i].gender === 'male'){
            count += 1;
        }
    }
    return count;
};
*/

const males = _.filter(array, function(customer){
    return customer.gender === 'male';

});

return males.length;

};


var femaleCount = function(array){
    return array.reduce(function(acc, current){
        if(current.gender === 'female'){
            return acc += 1
        }else{
            return acc;
        }

    }, 0)
    

};

var oldestCustomer = function(array){
    let oldestAge = array[0];
    for(var i = 0; i < array.length; i++){
        if(array[i].age > oldestAge.age){
           oldestAge = array[i]
        }

    }
    return oldestAge.name
    
};

var youngestCustomer = function(array){
    let youngestAge = array[0]
    for(var i = 0; i < array.length; i++){
        if(array[i].age < youngestAge.age){
            youngestAge = array[i]
        }
    }
    return youngestAge.name

};

var averageBalance = function(array){
    let sum = 0
    for(var i = 0; i < array.length; i++){
    let balance = array[i].balance.replace(/[$,]/g, '');
    //sets a variable equal to the balances in the object just as numbers
   
    sum += Number(balance)
        
    }
    
    return sum / array.length;
   
};


var firstLetterCount = function(array, letter){
    return array.reduce(function(acc, current){
        let currLower = current.name[0].toLowerCase();//make the first letter on the current iteration name case sentitive
        let charLower = letter.toLowerCase();//make the letter being searched for case sensitive
        

        if(charLower === currLower){//if the current iteration letter equal to the target letter
            return acc += 1//increment acc by 1
        }else{
            return acc;//if not just return acc;
        }
    

    }, 0)//start acc at zero 
    
}

var friendFirstLetterCount = function(array, customer, letter){
    let count = 0;
    let lower = letter.toLowerCase();
    for(var i = 0; i < array.length; i++){//iterate over the array
        if(array[i].name === customer){//if the current iterations name is equal to the given customer name 
            let friends = array[i].friends;//let friends be equal to the current iteration in their friends array

            for(var j = 0; j < friends.length; j++){//now iterate over the friends array
                let firstLet = friends[j].name[0].toLowerCase()//lower case the names in the friends array
                if(lower === firstLet){
                    count += 1
                }             
        }
    }

    }
    return count;
    


};

var friendsCount = function(array, name){
    let output = []
    for(var i = 0; i < array.length; i++){
       let customer = array[i]
       let friends = customer.friends
       for(var j = 0; j < friends.length; j++){
        if(friends[j].name === name){
            output.push(customer.name)

        }
        
       }    
        //if customer has name in friends list push customer  
    }
    return output; 
    
};

var topThreeTags = function(array){
    let tagCount = array.reduce(function(acc, current){ //use reduce to accumulate amount of tags
       let tag = current.tags  
       for(var i = 0; i < tag.length; i++){
        let tags = tag[i]

        if(acc[tags]){
            acc[tags]++
        }else{
            acc[tags] = 1;
        }
    }
    return acc;

    }, {});

    var sorted = Object.keys(tagCount).sort(function(a, b) {//sort the tags in decending order
        return tagCount[b] - tagCount[a];
      });
    
      // Step 3: Return the top 3 tags
      return sorted.slice(0, 3);

}


var genderCount = function(array){
    return array.reduce(function(acc, current){//use reduce on array 
        let gender = current.gender;//set variable equal to gender in array
        if(acc[gender]){//checks if gender already exist as a key in our accumulator object
            acc[gender]++
        }else{
            acc[gender] = 1
        }
        return acc;

    }, {})

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
