//Bai tap 1
function isEvenNumber(number){
    return number%2===0;
}

console.log(isEvenNumber(10));
console.log(isEvenNumber(7));

//Bai tap 2
function getElectricityBill(kwh){
    let total=0;

    if(kwh >400){
        total+=(kwh-400)*2927;
        kwh=400;
    }

    if(kwh >300){
        total+=(kwh-300)*2834;
        kwh=300;
    }

    if(kwh>200){
        total+=(kwh-200)*2536;
        kwh=200;
    }

    if(kwh>100){
        total+=(kwh-100)*2014;
        kwh=100;
    }

    if(kwh>50){
        total+=(kwh-50)*1734;
        kwh=50;
    }

    if(kwh>0){
        total+=kwh*1678;
    }

    return total;
}

console.log(getElectricityBill(70));
console.log(getElectricityBill(120));

//Bai tap 3
function cleanName(name,keyword){
    if(typeof name!=="string" || typeof keyword!=="string"){
        return false;
    }


    let cleanedName= name.trim().toLowerCase().replace(/\s+/g," ");
    let cleanedKeyword=keyword.trim().toLowerCase();

    return cleanedName.includes(cleanedKeyword);
}

console.log(cleanName("  NGUYEN  VAN  AN  ", "an"));
console.log(cleanName("  Tran  THi B  ", "hoang"));
console.log(cleanName("  Le  Hoang  Nam  ", " hoang "));
