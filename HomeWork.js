console.log("Kartu Identitas Siswa")

// Variabel adalah tempat untuk menyimpan
// suatu nilai/data agar dapat digunakan
// atau diubah kembali di dalam program. 

let nama="Fergie Ardiansyah";
let kelas=10;
let jurusan=["TKJ", "RPL", "PG"];
const sekolah="SMK Telkom Malang"
let status= false;

// Objek (object) adalah kumpulan data yang
// disusun dalam bentuk pasangan properti
// (key) dan nilai (value). 

let dataDiri = {
nama : "Fergie Ardiansyah",
kelas : 10,
jurusan : "RPL",
sekolah : "SMK Telkom Malang",
status : false,
nilai : {
    pemrogramanDasar : 90,
    basisData : 90
}
}

dataDiri.kota= "Malang"
delete dataDiri.status;
console.log (dataDiri)

//buat objek
let Tumbler={
    bentuk : tabung,
    warna : Navy,
    merk : eatkit,
    material : Stainlees,
    isi : satuliter
}