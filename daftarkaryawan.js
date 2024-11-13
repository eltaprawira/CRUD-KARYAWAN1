// ARRAY
const nama = [    
    "Devyn Ramirez",
    "Harmony Duncan",
    "Clarissa Burgess",
    "Reilly Blanchard",
    "Zion Brooks",
    "Jovanny Mays",
    "Cindy Chase",
    "Kristin Mcdaniel",
    "Macey Sanford",
    "Alfredo Faulkner"
];
const masaKerja = [
    10,
    5,
    8,
    7,
    4,
    10,
    9,
    8,
    7,
    10,
];
const nomorInduk = [
    "1234567890",
    "2345678901",
    "3456789012",
    "4567890123",
    "5678901234",
    "6789012345",
    "7890123456",
    "8901234567",
    "9012345678",
    "0123456789"
]
const gajiKaryawan = [
    "7.000.000",
    "4.000.000",
    "7.000.000",
    "7.000.000",
    "4.000.000",
    "7.000.000",
    "7.000.000",
    "7.000.000",
    "7.000.000",
    "7.000.000",
]

const daftarKaryawan = [
    {
        nama: "Devyn Ramirez",
        masaKerja: "10",
        nomorInduk: "1234567890",
        gajiKaryawan: "7.000.000",
    },
    {
        nama: "Harmony Duncan",
        masaKerja: "5",
        nomorInduk: "234567891",
        gajiKaryawan: "4.000.000",
    },
    {
        nama: "Clarissa Burgess",
        masaKerja: "8",
        nomorInduk: "3456789012",
        gajiKaryawan: "7.000.000",
    },
    {
        nama: "Reilly Blanchard",
        masaKerja: "7",
        nomorInduk: "4567890123",
        gajiKaryawan: "7.000.000",
    },
    {
        nama: "Zion Brooks",
        masaKerja: "4",
        nomorInduk: "5678901234",
        gajiKaryawan: "4.000.000",
    },
    {
        nama: "Jovanny Mays",
        masaKerja: "10",
        nomorInduk: "6789012345",
        gajiKaryawan: "7.000.000",
    },
    {
        nama: "Cindy Chase",
        masaKerja: "9",
        nomorInduk: "7890123456",
        gajiKaryawan: "7.000.000",
    },
    {
        nama: "Kristin Mcdaniel",
        masaKerja: "8",
        nomorInduk: "8901234567",
        gajiKaryawan: "7.000.000",
    },
    {
        nama: "Macey Sanford",
        masaKerja: "7",
        nomorInduk: "9012345678",
        gajiKaryawan: "7.000.000",
    },
    {
        nama: "Alfredo Faulkner",
        masaKerja: "10",
        nomorInduk: "0123456789",
        gajiKaryawan: "7.000.000",
    }
]

let mode = 'tambah'


// LOOPING
for (let i = 0; i < 1; i++) {
    console.log(daftarKaryawan)
}

//menampilkan karyawan
const tampilkanKaryawan = () => {

        // mengakses dom
        const tblKaryawan = document.getElementById('tblKaryawan')
        tblKaryawan.innerHTML = `<tr><th>No</th><th>Nama</th><th>MasaKerja</th><th>No Induk</th><th>Gaji</th><th>Edit</th><th>Hapus</th></tr>`


    for(let index in daftarKaryawan) {
        console.log(`${parseInt(index) + 1}. ${daftarKaryawan[index].nama}, masa kerja ${daftarKaryawan[index].masaKerja}, nomor induk ${daftarKaryawan[index].nomorInduk}, mendapatkan gaji ${daftarKaryawan[index].gajiKaryawan}`)

        // menambah isinya
        tblKaryawan.innerHTML += `<tr><td>${parseInt(index) + 1}</td><td>${daftarKaryawan[index].nama}</td><td>${daftarKaryawan[index].masaKerja}</td><td>${daftarKaryawan[index].nomorInduk}</td><td>${daftarKaryawan[index].gajiKaryawan}</td><td><button type= "button" class="btn btn-warning" onclick= "editKaryawan('${daftarKaryawan[index].nama}')">Edit</button></td><td><button type= "button" class="btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[index].nama}')">Hapus</button></td></tr>`
    }
}

//CREATE
const tambahKaryawan = () => {
    const nama = document.getElementById("txtNama").value
    const masaKerja = document.getElementById("txtMasakerja").value
    const nomorInduk = document.getElementById("txtNomorinduk").value
    const gajiKaryawan = document.getElementById("txtGaji").value

    const karyawanBaru = {
    nama: nama,
    masaKerja: masaKerja,
    nomorInduk: nomorInduk,
    gajiKaryawan: gajiKaryawan,
    }

        // Jika tambah
        if (mode == 'tambah') {
            daftarKaryawan.push(karyawanBaru)
        } else {
            // jika diedit
            daftarKaryawan[mode] = karyawanBaru
        }

    // const nama = prompt('Masukkan Nama Karyawan')
    // const masaKerja = prompt('Masukkan Masa Kerja')
    // const nomorInduk = prompt('Masukkan Nomor Induk')
    // const gajiKaryawan = prompt('Masukkan Gaji Karyawan')

    // const karyawanBaru = {
    // nama: nama,
    // masaKerja: masaKerja,
    // nomorInduk: nomorInduk,
    // gajiKaryawan: gajiKaryawan,
    // }
    // daftarKaryawan.push(karyawanBaru)

        // daftarSiswa.push(siswaBaru)

        document.getElementById("txtNama").value =""
        document.getElementById("txtMasakerja").value =""
        document.getElementById("txtNomorinduk").value =""
        document.getElementById("txtGaji").value =""
    
        mode == 'tambah'
    
        tampilkanKaryawan()
}

//mencari index/nama yng dicari diurutan berapa
const cariIndex = (nama) => {
    // tampilkan index jika nama karyawan == nama
    for (let i = 0; i < daftarKaryawan.length; i++){
        if (daftarKaryawan[i].nama == nama) {
            // console.log(daftarKaryawan[1])
            return i
        }
    }
    return -1
}

//DELETE
const hapusKaryawan = (target) => {
    const indexDihapus = cariIndex(target)
    //menghapus element dari dalam array
    if (indexDihapus !== -1) {
        daftarKaryawan.splice(indexDihapus, 1) 
            tampilkanKaryawan()
    }
}

//edit karyawan
const editKaryawan = (target) => {
    const indexEdit = cariIndex(target)
    const KaryawanDiedit = daftarKaryawan[indexEdit];

    document.getElementById("txtNama").value = KaryawanDiedit.nama;
    document.getElementById("txtMasakerja").value = KaryawanDiedit.masaKerja;
    document.getElementById("txtNomorinduk").value = KaryawanDiedit.nomorInduk;
    document.getElementById("txtGaji").value = KaryawanDiedit.gajiKaryawan;

    mode =indexEdit


    console.log(target)
    console.log(indexEdit)

    console.log(daftarKaryawan[indexEdit])

    // const namaBaru = prompt('Masukkan Nama Karyawan Baru')
    // const masaKerjaBaru = prompt('Masukkan Masa Kerja Baru')
    // const nomorIndukBaru = prompt('Masukkan Nomor Induk')
    // const gajiKaryawanBaru = prompt('Masukkan Gaji Karyawan')


    // daftarKaryawan[indexEdit] = {
    // nama: namaBaru,
    // masaKerja: masaKerjaBaru,
    // nomorInduk: nomorIndukBaru,
    // gajiKaryawan: gajiKaryawanBaru,
    // }
}

const cancel = (target) => {
    document.getElementById("txtNama").value = ""
    document.getElementById("txtMasakerja").value = ""
    document.getElementById("txtNomorinduk").value = ""
    document.getElementById("txtGaji").value = ""

    mode = 'tambah'
}