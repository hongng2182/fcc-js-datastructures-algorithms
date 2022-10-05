function convertToRoman(num) {
  let arabicNum=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
  let romanNum =["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let result = [];
  for (let i=0; i<arabicNum.length; i++){
    if (num >= arabicNum[i]){
          let times = Math.floor(num / arabicNum[i]);
          
          if( times > 1 ){
            num = num - arabicNum[i]*times;
            for (let j = 1; j <= times; j++){
                result.push(arabicNum[i]);
            }
          } else {
            num = num - arabicNum[i];
            result.push(arabicNum[i]);
          }
    }
  }
 return result.map(elem => romanNum[arabicNum.indexOf(elem)]).join("");
}

console.log(convertToRoman(9999));