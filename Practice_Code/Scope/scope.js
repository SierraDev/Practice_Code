//Block Scope
if(true){
    //scoped to the conditional, and inaccessible in global
    let scientist = `Alexia Ashford`;
    var scientist2 = `William Birkin`;
}
// console.log(scientist); --> undefined because it's not within the scope of the conditional block
console.log(scientist2) // --> William Birkin is accessed because var is not confined to block scope

function doubleArr(arr){
    //const is accessible to the whole function
    const results = [];
    for (let num of arr) {
        //doubleNum is scoped to only this block
        let doubleNum = num * 2;
        results.push(doubleNum);
    }
    return results;
}

//Lexical Scope
function outerFunc(){
    //variable defined within function scope, accessible to inner function but not global
    let resiCharacter= `Jill Valentine`
    function innerFunc(){
        //since resiCharacter wasn't defined in this scope, the function looks up to find the reference in the parent function
        let characterQuote = `${resiCharacter}: "Bitch can't even swim."`
            function secondInner(){
            //since a character quote isn't defined in secondInner's scope, it looks up to the nearest reference of that variable
                console.log(characterQuote);
        }
        secondInner();
    }
    innerFunc();
}