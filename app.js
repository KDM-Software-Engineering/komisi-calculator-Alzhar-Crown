// TODO
/**
 *  a.	Buatlah sebuah function bernama calculateKomisi
    b.	Function calculateKomisi menerima 1 parameter yaitu nilaiKontrak
    c.	Function calculateKomisi akan mengembalikan nilai komisi dengan ketentuan: 
      i.	Jika nilaiKontrak >= 1.000.000 maka nilai komisi adalah 100.000
      ii.	Jika nilaiKontrak >= 5.000.000 maka nilai komisi adalah 5% dari nilai kontrak
      iii.	Selain itu akan mengembalikan nilai 0
 */

// TULIS SCRIPT KAMU DI SINI
let nilaiKomisi = 0
function calculateKomisi(nilaiKontrak){
  if (nilaiKontrak >= 1000000 && nilaiKontrak < 5000000){
      return nilaiKomisi = 100000
  }
  else if (nilaiKontrak >= 5000000){
    return nilaiKomisi = nilaiKontrak * (5/100)
  }
  else {
    return nilaiKomisi = 0
  }
}

console.log(calculateKomisi(5700000))



// JANGAN HAPUS / UBAH SCRIPT DI BAWAH
module.exports = calculateKomisi