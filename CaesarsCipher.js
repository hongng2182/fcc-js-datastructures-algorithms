function rot13(str) {
  let rot13 = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"];
  let alp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let result ="";
    for (let i in str){
      let index = rot13.indexOf(str[i]);
      index >=0 ? result+=alp[index] : result+=str[i];
  }
  return result;
}
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");