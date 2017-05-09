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