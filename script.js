

let X ;
for(X=0;X<100;X++){

if (X%3===0 && X%5===0 ){
        console.log("Fizzbuzz");
    }
else if (X%3===0)
 {
    console.log( "Fizz");
    
} else if (X%5===0){
    console.log("buzz");
}

else{
    console.log(X);
} }