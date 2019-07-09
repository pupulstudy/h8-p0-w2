// const tanggal = parseint(prompt(`assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)`));
// const bulan = parseInt(prompt(`assign nilai variabel bulan disini! (dengan angka antara 1 - 12)`));
// const tahun = parseInt(prompt(`assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)`)); 
const tanggal = 9;
const bulan = 7;
const tahun = 2019:

const result = ( bulan => { 
  switch(bulan) {
    case 1:
    console.log(`${tanggal} Januari ${tahun}`);
    break;
    case 2:
    console.log(`${tanggal} Februari ${tahun}`);
    break;
    case 3:
    console.log(`${tanggal} Maret ${tahun}`);
    break;
    case 4:
    console.log(`${tanggal} April ${tahun}`);
    break;
    case 5:
    console.log(`${tanggal} Mei ${tahun}`);
    break;
    case 6:
    console.log(`${tanggal} Juni ${tahun}`);
    break;
    case 7:
    console.log(`${tanggal} Juli ${tahun}`);
    break;
    case 8:
    console.log(`${tanggal} Agustus ${tahun}`);
    break;
    case 9:
    console.log(`${tanggal} September ${tahun}`);
    break;
    case 10:
    console.log(`${tanggal} Oktober ${tahun}`);
    break;
    case 11:
    console.log(`${tanggal} November ${tahun}`);
    break;
    case 12:
    console.log(`${tanggal} Desember ${tahun}`);
    break;
    default:
    console.log('Assign nilai variabel bulan tidak sesuai!')
  }
});

console.log(result(bulan));
// alert(`Periksa Java Script Console!`); 
