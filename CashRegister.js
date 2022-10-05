function checkCashRegister(price, cash, cid) {
  const curUnit = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]; 
  let change = cash - price; 
  let total = cid.reduce((acum,val) => acum + val[1],0); 
  let result = []; 
  
  if (total > change ){ 
      for (let index = cid.length-1; index>=0 ; index--){ 
             let cashHave = cid[index][1];
             let unit = curUnit[index][1];
             if(change >= cashHave){ 
                change -= cashHave; 
                if (cashHave > change ){
                    result.push(cid[index]);
                }
             } 
             else if (change > unit ){
                let needAmount = unit*Math.floor(change/unit); 
                change -= needAmount; 
                change = change.toFixed(2); 
                cid[index][1]= needAmount; 
                result.push(cid[index]);
             }
      }
      
      if(result.length > 0){
        return {status: "OPEN", change: result}
      } else {
        return {status: "INSUFFICIENT_FUNDS", change: []}
      }
  }
  
  else if ( total === change){
      return {status: "CLOSED", change: cid}
  } else {
      return {status: "INSUFFICIENT_FUNDS", change: []}
  }
}