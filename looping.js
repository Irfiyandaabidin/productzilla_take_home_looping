// 1. Buat 2 buah looping menggunakan for loop!
// 2. Buat 2 buah looping menggunakan for while!
// 3. Buat 2 buah looping menggunakan for do-while!
// 4. Buat 1 buah looping untuk mengeluarkan nilai dari sebuah array!

for (let i = 0; i <= 10; i++){
    if(i == 0){
        console.log("======= Perulangan for =======")
    }
    console.log("Perulangan ke" + i);
    if (i == 10){
        console.log("======= end perulangan for =======\n")
    }
};

let ulang20 = 20;
for (let i = 0; i <= ulang20; i++ ){
    if(i == 0){
        console.log("======= Perulangan for 2=======")
    }
    console.log("Ulang ke" + i);
    if (i == 20){
        console.log("======= end perulangan for 2=======\n")
    }   
};

let ngantuk = false;
let belajar = 0;
while(!ngantuk) {
    if (belajar == 0){
        console.log("======= Perulangan while =======")
    }
    console.log('belajar');
    belajar++;
    if (belajar >= 10){
        console.log("Saya lelah belajar, saya mau tidur");
        console.log("======= End Perulangan while =======\n")
        ngantuk = true;
        belajar = 0
    }
};

lapar = true;
while (lapar){
    let makan = 10;
    let i = 0
    while (i < makan){
        if (i == 0){
            console.log("======= Perulangan while 2 =======");
        }
        console.log("Makan suapan ke-" + i);
        i++
    }
    if (i == 10){
        lapar = false;
        console.log("Saya kenyang")
        console.log("======= End Perulangan while 2 =======\n");
    }
};

console.log('======= Looping mengeluarkan array =======')
let contohArray = ['indomie', 'sarimi', 'sedaap', 'sukses', 'sakura'];
for (let i = 0; i < contohArray.length; i++){
    console.log(contohArray[i]);
};