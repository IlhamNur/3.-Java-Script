var matkul = ["Rekayasa Perangkat Lunak","Kecerdasan Buatan","Pengembangan Aplikasi Bergerak","Teori Bahasa dan Automata","Jaringan Komputer"];
var nilai = [4,3,2,1,0];
var sks = [4,3,3,3,4];

function hitungIP(){
    var total = 0;    
    for (i in nilai) {
        total += nilai[i];
    }

    var avrg = total / nilai.length;
    document.getElementById("hasil").textContent = +avrg;
}

function konversiNilai1(nilai){
    var huruf;
    if(nilai == 4) {
        huruf = "A";
    }
    else if(nilai == 3) {
        huruf = "B";
    }
    else if(nilai == 2) {
        huruf = "C";
    }
    else if(nilai == 1) {
        huruf = "D";
    }
    else if(nilai == 0) {
        huruf = "E";
    }
    
    document.getElementById("konversi1").innerHTML = huruf;
}

function konversiNilai2(nilai){
    var huruf;
    if(nilai == 4) {
        huruf = "A";
    }
    else if(nilai == 3) {
        huruf = "B";
    }
    else if(nilai == 2) {
        huruf = "C";
    }
    else if(nilai == 1) {
        huruf = "D";
    }
    else if(nilai == 0) {
        huruf = "E";
    }
    
    document.getElementById("konversi2").innerHTML = huruf;
}

function konversiNilai3(nilai){
    var huruf;
    if(nilai == 4) {
        huruf = "A";
    }
    else if(nilai == 3) {
        huruf = "B";
    }
    else if(nilai == 2) {
        huruf = "C";
    }
    else if(nilai == 1) {
        huruf = "D";
    }
    else if(nilai == 0) {
        huruf = "E";
    }
    
    document.getElementById("konversi3").innerHTML = huruf;
}

function konversiNilai4(nilai){
    var huruf;
    if(nilai == 4) {
        huruf = "A";
    }
    else if(nilai == 3) {
        huruf = "B";
    }
    else if(nilai == 2) {
        huruf = "C";
    }
    else if(nilai == 1) {
        huruf = "D";
    }
    else if(nilai == 0) {
        huruf = "E";
    }
    
    document.getElementById("konversi4").innerHTML = huruf;
}

function konversiNilai5(nilai){
    var huruf;
    if(nilai == 4) {
        huruf = "A";
    }
    else if(nilai == 3) {
        huruf = "B";
    }
    else if(nilai == 2) {
        huruf = "C";
    }
    else if(nilai == 1) {
        huruf = "D";
    }
    else if(nilai == 0) {
        huruf = "E";
    }
    
    document.getElementById("konversi5").innerHTML = huruf;
}

(function() {
    ('#daftar').tablesorter(); 
});