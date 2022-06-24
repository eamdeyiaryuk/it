const getSum = ["h3llo" , "w0rld" , "th1s" , "is", "w3bt0pi4"]
const number = ["number0","number1","number2","number3","number4"]
const num = ["num0","num1","num2","num3","num4","num5"]
var sum
var k = 0
for(var i=0; i<5; i++){
    number[i] = getSum[i].replace(/[a-z]/g, '')
    // console.log(number[i].length)
    if(number[i].length === 0){
        number[i] = 0
    }
}
for(var j=0; j<6; j++){
    if(number[j].length >1){
        for(k=0; k<3 ; k++){
            num[j] = number[j][k];
            // console.log(num[j])
        }
    }
    else{
    num[j] = parseInt(number[j])
    // console.log(num[j])
    }
    console.log(num[j])
}
// sum = num[0] + num[1] + num[2] + num[3] + num[4]+num[5]+num[6]
// sum = num.reduce((a, b) => a + b, 0)
// console.log(sum)
