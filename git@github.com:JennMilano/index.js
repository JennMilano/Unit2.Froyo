//create prompt
const userInput = prompt("Enter froyo flavors separated by commas:");

console.log(userInput);

//userInput --> vanilla,vanilla,vanilla,strawberry,coffee,coffee

//split userInput using ,
const order = userInput.split(',')
console.log(order);

//create function
function countFlavors(flavors){
    //create empty obj
    //loop over array
        //add the flavor as a key, with a value of 1 if the key doesn't exist otherwise add 1 to the current value
            //ways to add 1 to current value obj[key] = obj[key]++ || obj[key]+=1

        //return obj created above
    const counts = {};
        for (const flavor of flavors){
            if (flavor in counts) {
                counts[flavor] += 1;
            } else {
                counts[flavor] = 1;
            }
    }
    return counts;
}

console.log(countFlavors(order))