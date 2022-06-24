const getSum = ["h3llo" , "w0rld" , "th1s" , "is", "w3bt0pi4"]
const number = ["number0","number1","number2","number3","number4"]
const num = ["num0","num1","num2","num3","num4"]
var sum
var k = 0
for(var i=0; i<5; i++){
    number[i] = getSum[i].replace(/[a-z]/g, '')
    if(number[i].length === 0){
        number[i] = 0
    }
}
for(var j=0; j<5; j++){
    num[j] = parseInt(number[j])
}
sum = num.reduce((a, b) => a + b, 0)
console.log(sum)
