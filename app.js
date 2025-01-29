//1-Toshriq

let fristName ='Ibrohimjon';
console.log("Mening ismim"+ ' ' +fristName);

//2-Topshiriq

let Age ='18';
console.log(`men `+Age +  ` yoshdaman`);

//3-Topshiriq

let favoriteColor ='Sariq'
console.log(`Mening yoqtirgan rangim ` +favoriteColor);

//4-Topshiriq

let number1 = 2800;
let number2 = 2800;
let res=number1+number2;
console.log(res);

//5--Topshiriq

let text1 = `xar narsaga siqilma ey kongil`;
let text2 = `na bu dardlar qolur na bu umir`;
console.log(text1 +" "+  text2 )

//Prompt topshiriq
//6-Topshiriq

let  yourName = prompt`What is your name`;
console.log('Hello'+" " + yourName);

//7-Topshiriq

let  yourAge = prompt`How old are you`;
console.log('Your age'+" " + yourAge);

//8-Topshiriq

let addNumber = +prompt ('Enter the frist number');
let addNumber2 = +prompt('Enter the second number');
let sumUp = addNumber + addNumber2;

console.log("your Sum Up:"+sumUp);

//9-Topshiriq
let  fruit = prompt`what is your favorite fruit `;
console.log('Your favorite fruit is'+" " + fruit);

//10-Topshiriq
let R=+prompt("radiusni kiriting...");
let S = Math.PI *R * R;
console.log(S);



//confirm` va shartli muloqot
//11-Topshiriq
let question = confirm ("Dasturni davom  ettirishni xoxlaysizmi");
if(question) {
    console.log("Dastur davom etmoqda..." );
} else{
    console.log("Dastur to'xtatildi. ");
    
}


//12-Topshiriq
let question2 = confirm ("Siz 18 yoshdan katamisz");
if(question2) {
    console.log("Siz kattasiz" );
} else{
    console.log("Siz hali yoshsiz ");
    
}


//13-Topshiriq 
let password = prompt("Add your password");
if(password=12345 ){
    console.log("Xush kelibsiz")
} else{
    console.log('Parol Xato')
}
//14-Topshiriq
let nameY = prompt('Ismingizni kiriting');
if(nameY ===  "") {
    console.log('Ism kiritilmadi');
} else{
    console.log(`salom ${nameY}`);
    
}
    
//Matematik amallar

//15-Topshiriq
let num1 = +prompt ('Birinchi raqamni kiriting');
let num2 = +prompt('ikkinchi raqamni kiriting');
let upSum = num1 * num2;
console.log(upSum);

//16-Topshiriq
let num3 = +prompt ('Birinchi raqamni kiriting');
let num4 = +prompt('ikkinchi raqamni kiriting');
let sum = num3 - num4;
console.log(sum);

//17-Topshiriq
let asos = +prompt("Uchburchakning asosini kiriting");
let balandlik = +prompt("Uchburchakning balandligini kiriting");
let yuza = (asos * balandlik) / 2;
console.log("Uchburchakning yuzi: " + yuza);

//18-Topshiriq
let r = +prompt('Aylana radiusini kiriting')
let uzunlik = 2 * Math.PI* r;
console.log("Aylana uzunligi: "  +uzunlik);

//19-Topshiriq
let nameYour =  prompt ('ismingiz')
let surname = prompt('Familiyangiz')
let ageYour = prompt('Yoshingiz nechchida')
console.log(`ismingiz  ` + ' ' + nameYour + ' '+ `Familiyangiz  `+ ' '+ surname + ' '+ `yoshingiz  ` + ' '+ ageYour);

//20-Topshiiriq
let kino1 = prompt("Sevimli kinoyingizni kiriting")
let kino2 = prompt("Sevimli kinoyingizni kiriting")
let kino3 = prompt("Sevimli kinoyingizni kiriting")
console.log("Sevimli kinoyingiz" + " "+ [ kino1]);
console.log("Sevimli kinoyingiz" + " "+ [ kino2]);
console.log("Sevimli kinoyingiz" + " "+ [ kino3]);









 




