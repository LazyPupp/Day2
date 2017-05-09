////////////////////////////////////////////////////////////
///////////////           AVERAGE        ////////////////////
////////////////////////////////////////////////////////////
function average(numbers){
    let sum =0;
    numbers.forEach(function(i){
        sum+=i;
    });
    return sum/numbers.length;
}

average([1,2,3]);



function average(numbers){
    var sum=0;
    let i = 0;
    while (i<numbers.length){
        sum+=numbers[i];
        i++;
    }
    return sum/numbers.length;
}
average([1,2,3]);


////////////////////////////////////////////////////////////
///////////////           MAX&MIN        ////////////////////
////////////////////////////////////////////////////////////
function max(myNumbers){
    let a=Number.NEGATIVE_INFINITY;
    let i = 0;
    while(i<myNumbers.length){
        if(myNumbers[i]> a){
            a = myNumbers[i];
        }
        i++;
    }
    return a;
}

function min(myNumbers){
    let a = Number.POSITIVE_INFINITY;
    let i =0;
    while(i<myNumbers.length){
        if(myNumbers[i]< a){
            a = myNumbers[i];
        }
        i++;
    }
    return a;
}

arr = [1,2,-20,100];
console.log(max(arr)); //=> 100
console.log(min(arr)); //=> -20

////////////////////////////////////////////////////////////
///////////////           fizzbuzz        ////////////////////
////////////////////////////////////////////////////////////
function fizzBuzz(countTo){
    for(let i = 1; i <= countTo;i++){
        switch(i%15){
        case 0:
            console.log('fizzbuzz');
            break;
        default:
            switch(i%5){
            case 0: 
                console.log('buzz');
                break;
            default:
                switch(i%3){
                case 0:
                    console.log('fizz');
                    break;
                default:
                    console.log(i);
                }
            }

        }
    }
}

function fizzBuzz(countTo){
    for(let i = 1; i <= countTo; i++){
        switch(true){
        case (i%15===0):
            console.log('fizzbuzz');
            break;
        case (i%5 ===0):
            console.log('buzz');
            break;
        case (i%3===0):
            console.log('fizz');
            break;
        default:
            console.log(i);
        }
    }
}
fizzBuzz(15);

////////////////////////////////////////////////////////////
///////////////          Repeat        ////////////////////
////////////////////////////////////////////////////////////
function repeat (fn,n){
    for (let i=1;i<=n;i++){
        fn();
    }
}
function hello(){
    console.log('Hello world!');

}
function goodbye(){
    console.log('Goodbye world!');
}

repeat(hello,5);
repeat(goodbye, 5);

////////////////////////////////////////////////////////////
///////////////          Filter        ////////////////////
////////////////////////////////////////////////////////////

// Return only names that begin with 'R'
var filter = /*function*/(arr,fn)=> arr.filter((i)=> fn(i));
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

// const filteredNames = filter(myNames, function(name) {
//     // This is a "predicate function" - it's a function that only returns a boolean
//     return name[0] === 'R';
// });
const filteredNames = filter (myNames,name=> name[0]==='R');

//   filter (,(myNames,name)=>name[0]==='R'); Wrong
//   filter(myNames,function(fn){name[0]==='R'}) Wrong
//   filter(myNames,function(){name[0]==='R'}) Wrong
//   filter(myNames,function(name){name[0]==='R'}) Right
//   filter (myNames,fn); Wrong


console.log(filteredNames) // => ['Rich', 'Ray']

// TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr,fn) {
    const newArray = [];
    for(let i = 0; i<arr.length; i++){
        if(fn(arr[i])){
            newArray.push(arr[i]);
        }
    } 
    return newArray;
}
//filter bonus question
console.log(filter (myNames,name=> name[0]==='R'));

//////////////////////////////HAZARD ALERT/////////////////////////////////////////////
function hazardWarningCreator (typeOfWarning){
    let warningCounter = 0;
    return function(location){
        warningCounter ++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        if (warningCounter === 1){
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`)
        } 
        else {console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`)}
        //console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Flood Alert!');
const heatWarning = hazardWarningCreator('Heat Warning!');

rocksWarning('Main St and Pacific Ave');
// => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// => The Rocks on the Road hazard has triggered 1 time(s) today!

rocksWarning('Centinela Ave and Olympic Blvd');
// => DANGER There is a Rocks on the Road hazard at Centinela Ave and Olympic Blvd
// => The Rocks on the Road hazard has triggered 2 time(s) today!

floodWarning('VA,Burke');
floodWarning('VA,Burke');
floodWarning('Fairfax, VA');

heatWarning('Axa, AZ');
heatWarning('Tuscano, AZ');
heatWarning('Burke, AZ');

//Bonus credit! Can you figure out how to log out "time" for a value of 1 and "times" for a value of 0 or > 2?

////////////////////////////////////////////////////////////
///////////////          Turtle        ////////////////////
////////////////////////////////////////////////////////////

let arr = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function turtle(array){

    let filterArray = array.filter(function(pos){
        return (pos[0] >= 0 && pos[1] >= 0);
    });
    console.log(filterArray);
    let mapArray = filterArray.map(function(sum){
        return sum[0]+sum[1];
    });
    console.log(mapArray);
    mapArray.forEach(function(arr){
        console.log(arr);
    });
    return mapArray;
}
console.log(turtle(arr));