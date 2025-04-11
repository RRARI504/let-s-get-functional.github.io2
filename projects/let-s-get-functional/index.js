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


var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

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
