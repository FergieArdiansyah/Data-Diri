console.log("TOKO ELEKTRONIK");
let namaProduk="Laptop"
let kategori='elektronik';
let harga =10000000;
let stok = 14;
let berat = 2;
let garansi = true;
let rating = 5;
let warna = "Grey"
let diskon = false;
let deskripsi = "kondisi baik";

let produk={
    nama_produk : namaProduk,
    jenis_kategori : kategori,
    harga : harga,
    stok : stok,
    berat : berat,
    garansi : garansi,
}

console.log("Menampilkan objek")
console.log(produk)

let nilaiA=25;
let nilaiB=30;
let jumlah=nilaiA+nilaiB;
let kurang=nilaiA-nilaiB;
let kali=nilaiA*nilaiB;
let bagi=nilaiA/nilaiB;
let modulus=nilaiA%nilaiB;

console.log("Nilai A + Nilai B =", jumlah);
console.log("Nilai A - Nilai B =", kurang);
console.log("Nilai A * Nilai B =", kali);
console.log("Nilai A / Nilai B =", bagi);
console.log("Nilai A % Nilai B =", modulus);
