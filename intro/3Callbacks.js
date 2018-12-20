var maxTime = 1000;

//If input is even, double it
// else, error

var doubleEven = function(v, callback) {
    var waitTime = Math.floor(Math.random() * (maxTime+1));
    console.log("wait time is:"+waitTime)
    if(v % 2) {
        setTimeout(function(){
            callback(new Error("Odd input"));
        }, waitTime);
    } else {
        setTimeout(function(){
            callback(null, v*2, waitTime);
        }, waitTime);
    }
}

var handleResults = function(err, result, time) {
    if(err) {
        console.log("There was an error processing the result:"+err.message);
    } else {
        console.log("The result is:"+result+" and it took:"+ time);
    }
}

for(var i = 0; i < 10; i++) {
    doubleEven(i, handleResults);
}