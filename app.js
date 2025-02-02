// Foydalanuvchi kiritgan son musbat yoki manfiy ekanligini aniqlang.
//1-Topshiriq
let a =+prompt("raqamni kiriting")
if(a>0){
    console.log("musbat son")
}else{
    console.log("manfiy son")
}


//Kiritilgan son juft yoki toq ekanligini tekshiring.
//2-Topshiriq
let b =+prompt("raqamni kiriting")
if(b%2==0){
    console.log("juft son")
}else{
    console.log("toq son")
}

//Foydalanuvchi kiritgan ikkita sondan kattasini chiqaring.
//3-Topshiriq
let c =+prompt("1-sonni kiriting")
let d =+prompt("2-sonni kiriting")

if (c>d){
    console.log(c);
    
}else{
    console.log(d);
    
}

//Agar son 0 ga teng bo‘lsa, “Nol” deb chiqaring.
//4-Topshiriq
let e =+prompt("sonni kiriting")
if(e==0){
    console.log("Nol");
    
}

//Foydalanuvchi kiritgan ikki son teng bo‘lsa, “Teng” deb chiqaring.
//5-Topshiriq
let f=+prompt("1-Sonni kiriting")
let g=+prompt("2-Sonni kiriting")
if(f==g){
    console.log("Teng");
    
} else{
    console.log('Teng emas');
    
}

//Foydalanuvchi 0 dan 100 gacha baho kiritadi. 90+ uchun “A”, 80+ uchun “B” baho chiqaring.
//6-Topshiriq
let num1=+prompt("Bahoni kiritng")
if(num1>90){
    console.log("A");
}else if(num1>80){
    console.log("B");
    
}

//: Foydalanuvchi kiritgan yil kabisa yili ekanligini aniqlang.
//7-Topshiriq
let yil=+prompt("Yilni kiriting")
if(yil%4==0){
    console.log("Kabisa yili");
    
}else{
    console.log("Kabisa yili emas");
    
}

// 0-12 yosh – “Bolakay”, 13-19 – “O‘smir”, 20+ – “Katta yoshdagi odam”.
//8-Topshiriq
let age=+prompt("Yoshingizni kiriting")
if(age>=20){
        console.log("Katta yoshdagi odam");
        
        }else  if(age>=13){
            console.log("O'smir");
            
        }else if(age>=0){
            console.log("Bola");
    
}


// Uchta kiritilgan sondan eng kattasini aniqlang.
//9-Topshiriq
let num2=+prompt('1-raqam')
let num3=+prompt('2-raqam')
let num4=+prompt('3-raqam')

let res;
if(num2>num3 && num2>=num4){
    res=num2
}
else if(num3>=num4 && num3>=num4){
    res=num3
}
else {
    res=num4
}
console.log(res);


//Harorat 0 dan past bo‘lsa “Sovuq”, 30 dan yuqori bo‘lsa “Issiq”.
//10-Topshiriq
let num5=+prompt("Havo haroratini kiriting")
if(num5 >= 30){
    console.log("Issiq");
} else if( num5 < 0){
    console.log("Sovuq");
    
}

// Foydalanuvchi son kiritmagan bo‘lsa, “Son emas” deb chiqaring.
//11-Topshiriq
let number1=+prompt("Son kiritng")
if(number1 * 1){
    console.log("Son");
    
}else{
    console.log("Son emas");
    
}

// Foydalanuvchi kiritgan son 5 ga qoldiqsiz bo‘linsa, “Bo‘linadi” deb chiqaring.
//12-Topshiriq
let number2=+prompt("Bo'linuvchi son kiriting")
if(number2 % 5==0 ){
    console.log("Bo'linadi");
    
}else{
    console.log("Bo'linmaydi");
    
}

// Harorat 15-25 oralig‘ida bo‘lsa, “Ideal harorat” deb chiqaring.
//13-Topshiriq
let cel =+prompt("Haroratni kiriting")
if(cel <= 25 && cel >= 15){
    console.log("Ideal harorat");
    
}


//Yil 2000 dan kichik bo‘lsa, “Eski avlod” deb chiqaring.
//14-Topshiriq
let year=+prompt("Tug'ilgan yilingizni kiriting")
if (year < 2000){
    console.log("Eski avlod");
    
}else{
    console.log("Yangi avlod");
    
}

// 18 dan kichik bo‘lsa, “Yoshlarga tavsiya”; 60 dan yuqori bo‘lsa, “Keksalarga tavsiya”.
//21-Topshiriq
let yosh = +prompt("Yoshingizni kiriting")
if(yosh < 18){
    console.log("Yoshlarga tavsiya");
} else if(yosh > 60){
    console.log("Keksalarga tavsiya");
}

//Ism uzunligi 5 belgidan qisqa bo‘lsa, “Qisqa ism” deb chiqaring.
//22-Topshiriq
let ism = prompt("Ismingizni kiriting")
if (ism.length < 5) {
    console.log("Qisqa ism");
} else {
    console.log("Uzun ism");
}


//Son musbat yoki nol bo‘lsa, “Yaroqli son” deb chiqaring.
//23-Topshiriq
let son =+prompt("Son kiriting")
if(son >=0){
    console.log("Yaroqli son");
    
} else{
    console.log("Yaroqsiz son");
    
}



//Agar ikkita raqam bir xil bo‘lsa, “Teng juftlik” deb chiqaring.
//24-Topshiriq
let son1=+prompt("Birinchi son")
let son2=+prompt("ikkinchi  son")
if (son1==son2){
    console.log("Teng juftlik");
    
} else{
    console.log("Teng emas");
    
}


//Raqam oxiri 0 bilan tugashini aniqlash: Son 0 bilan tugasa,
// “Nol bilan tugaydi” deb chiqaring.
//25-Topshiriq
let raqam2=+prompt("Raqamni kiriting")
if (raqam2 % 10== 0){
    console.log("Nol bilan tugaydi");
    
} else{
    console.log("Nol bilan tugamaydi");
    
}


//Parolning maxfiy belgilar borligi: Parolda maxsus belgilar bo‘lsa, “Maxfiy belgilar bor” deb chiqaring.
//26-Topshiriq
let parol = prompt("Parolni kiriting")
let maxsusBelgilar = /[!@#$%^&*(),.?":{}|<>]/;
if (parol=maxsusBelgilar) {
    console.log("Maxfiy belgilar bor");
} else {
    console.log("Maxfiy belgilar yo'q");
}


//Foydalanuvchi kiritgan oy 3, 4 yoki 5 bo‘lsa, “Bahor” deb chiqaring.
//27-Topshiriq
let oy=+prompt("Nechanchi oyda tug'ilgansiz");
if(oy==3  || oy==4 ||  oy==5){
    console.log("Bahor");
    
}

//Son juft yoki toq ekanligini va u nechiga teng ekanligini chiqaring.
//28-Topshiriq
let number3=+prompt("Son kiriting");
if (number3 % 2==0){
    console.log(`Juft son  ${number3}`);
    
}
else{
    console.log(`Toq son  ${number3}`);
    
}

//Agar son 10 dan kichik bo‘lsa, “Kichik son” deb chiqaring.
//29-Topshiriq
let son3=+prompt("Sonni kiriting");
if (son3<10){
    console.log("Kchik son");
    
} else{
    console.log("Katta son");
    
}

// Matn .com bilan tugasa, “Web sayt” deb chiqaring.
//30-Topshiriq
let sahifaNomi = prompt("Sahifa nomini kiriting");
if (sahifaNomi.endsWith('.com')) {
    console.log("Web sayt");
} else {
    console.log("Web sayt emas");
}

//Agar foydalanuvchi “Frontend” yoki “Backend” deya kiritgan bo‘lsa, “Dasturchi” deb chiqaring.
//31-Topshiriq
let kasb = prompt("Ish joyingizdagi faoliyat")
if (kasb === "Frontend" || kasb === "Backend") {
    console.log("Dasturchi");
} else {
    console.log("Dasturchi emas");
}

// Foydalanuvchi “Uzbek” deb yozsa, “Assalomu alaykum!” deb chiqaring.
//32-topshiriq
let millat=prompt("Millatingizni kiriting")
let millatUz=("Uzbek")
if (millat === millatUz){
    console.log("Assalomu alaykum");
    
} else{
    console.log("Boshqa millat");
    
}

// Son 3 ga bo‘linadigan bo‘lsa, “Bo‘linadi” deb chiqaring.
//33-Topshiriq
let son4 =+prompt("Sonni kiritng")
if (son4 % 3==0){
    console.log("Bo'linadi");
    
} else{
    console.log("Bo'linmaydi");
    
}

// Foydalanuvchi soat kiritadi. Agar 6-18 orasida bo‘lsa, “Kunduz”, aks holda “Tun”.
//36-Topshiriq
let soat =+prompt("Soatni kiriting")
if (soat >= 6 && soat <= 18){
    console.log("Kunduz");
    
} else{
    console.log("Kecha");
    
}

//Son musbat yoki nol ekanligini tekshirish: Musbat yoki nol bo‘lsa, “Yaroqli son” deb chiqaring.
//37-Topshiriq
let Number1 =+prompt("Sonni kiritng")
if (Number1 >=0){
    console.log("Yaroqli son");
    
} else{
    console.log("Yaroqsiz son");
    
}

// Matn uzun bo‘lsa, “Uzun matn” deb chiqaring
//38-Topshiriq
let matn1 =prompt("Matn kiriting")
if (matn1 .length > 15){
    console.log("Uzun matn");
    
} else{
    console.log("Kalta matn");
    
}


// Ikki raqam teng bo‘lsa, “Bir xil” deb chiqaring.
//39-Topshiriq
let raq1 =+prompt("1-Raqamni kirting")
let raq2 =+prompt("2-Raqamni kirting")
if (raq1===raq2){
    console.log("Bir xil");
    
} else{
    console.log("Bir xil emas");
    
}

// Ism A bilan boshlansa, “A bilan boshlanadi” deb chiqaring.
//40-Topshiriq
let ismA =prompt("Ismingizni kiritng")
if(ismA.startsWith("A")){
    console.log("A bilan boshlanadi");
    
} else{
    console.log("A bilan boshlanmaydi");
    
}

// Harorat 0 dan past bo‘lsa, “Yo‘lda ehtiyot bo‘ling!”
//41-Topshiriq
let har =+prompt("Haroratni kiriting")
if (har < 0){
    console.log("Yo'llarda extiyot bo'ling");
    
}

//: Ikki matn bir xil bo‘lsa, “Bir xil matnlar” deb chiqaring.
//42-Topshiriq
let matn2 = prompt("Birinchi matn")
let matn3 = prompt("Ikkinchi  matn")

if (matn2 === matn3){
    console.log("Bir xil matnlar");
    
} else{
    console.log("Matn bir xil emas");
    
}


// 35 dan yuqori bo‘lsa, “Xavfli issiq!” deb chiqaring.
//45-Topshiriq
let havo =+prompt("havo haroratini kiritng")
if (havo >=35){
    console.log("xafli Issiq");
    
} else{
    console.log("Oddiy issiq");
    
}

//Birinchi son ikkinchisidan katta bo‘lsa, “Katta son” deb chiqaring.
//46-Topshiriq
let birinchiSon = +prompt("Birinchi son")
let ikkinchiSon = +prompt("Ikkinchi son")
if(birinchiSon > ikkinchiSon){
    console.log("Katta son");
    
}

// Ism “bek” bilan tugasa, “Bekli ism” deb chiqaring.
// 47-Topshiriq 
let ism1=prompt("Ismingizni kiritng")
if(ism1. endsWith("bek")){
    console.log("Bekli isim");
    
}else {
    console.log("Beksiz isim");
}

//Oy raqami asosida faslni aniqlang.
//49-Topshiriq
let month=+prompt("Tug'ilgan oyingiznni kiriting")
if (month >= 3 && month <= 5){
    console.log("Bahor Faslida tug'ilgansiz");
    
}
else if (month >= 6 && month<=8 ) {
    console.log("Yoz faslida tug'ilgansiz");
    
    
}
else if (month>=9 && month <=11){
    console.log("Kuz faslida tug'ilgansiz");
    
}
else if (month === 12 ||month==1 || month ===2 ){
    console.log("Qish faslida tug'ilgansz");
    
}
else {
  console.log("Noto'g'ri oy kiritildi");
  
}


//50-Topshiriq
let yil1=+prompt("Yil kiritng")
if (yil1  >=2025 ){
    console.log("Kelajak yili");
    
}


/**
 * Bajara olmagan topshiriqlarim  48  ,  44   , 43  , 35 ,  34
 */