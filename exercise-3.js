const proxytia = _ => {
  let nama = prompt(`"Isi nama kamu disini"`);
  if (nama === null || nama === ''){
    while (nama === null || nama === ''){
      console.log(`"Nama harus diisi!"`);
      nama = prompt(`"Isi nama kamu disini`);
    } if(nama !== null || nama !== ''){
      let peran = prompt(`"Halo ${nama}, Pilih peranmu untuk memulai game!"`);
      while (peran === null || peran === ''){
        console.log(`
          "Peran harus diisi!"
          "Pilih Ksatria, Tabib atau Penyihir?`);
        peran = prompt(`"Halo ${nama}, Pilih peranmu untuk memulai game!"`);
      } 
      if (peran === 'Ksatria'){
        console.log(`
          "Selamat datang di Dunia Proxytia, ${nama}"
          "Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!"`);
      } else if(peran === 'Tabib'){
        console.log(`
          "Selamat datang di Dunia Proxytia, ${nama}"
          "Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka."`);
      } else if(peran === 'Penyihir'){
        console.log(`
          "Selamat datang di Dunia Proxytia, ${nama}"
          "Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"`);
      } else {
        while (peran !== 'Ksatria' || peran !== 'Tabib' || peran !== 'Penyihir'){
          console.log(`"Peran harus diisi dan diantara Ksatria, Tabib atau Penyihir!"`);
          peran = prompt(`"Halo ${nama}, Pilih peranmu untuk memulai game!"`);
          if (peran === 'Ksatria'){
            console.log(`
              "Selamat datang di Dunia Proxytia, ${nama}"
              "Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!"`);
          } else if(peran === 'Tabib'){
            console.log(`
              "Selamat datang di Dunia Proxytia, ${nama}"
              "Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka."`);
          } else if(peran === 'Penyihir'){
            console.log(`"
              Selamat datang di Dunia Proxytia, ${nama}"
              "Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"`);
          }
          if (peran === 'Ksatria'){
            console.log(`"
              Selamat datang di Dunia Proxytia, ${nama}"
              "Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!"`);
            break;
          } else if(peran === 'Tabib'){
            console.log(`"
              Selamat datang di Dunia Proxytia, ${nama}"
              "Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka."`);
            break;
          } else if(peran === 'Penyihir'){
            console.log(`"
              Selamat datang di Dunia Proxytia, ${nama}"
              "Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"`);
            break;
          }
        }
      }
    }
  }
  else if(nama !== null || nama !== ''){
    let peran = prompt(`"Halo ${nama}, Pilih peranmu untuk memulai game!"`);
    while (peran === null || peran === ''){
      console.log(`"Peran harus diisi!"
       "Pilih Ksatria, Tabib atau Penyihir?`);
      peran = prompt(`"Halo ${nama}, Pilih peranmu untuk memulai game!"`);
    }
    if (peran === 'Ksatria'){
      console.log(`
        "Selamat datang di Dunia Proxytia, ${nama}"
        "Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!"`);
    } else if(peran === 'Tabib'){
      console.log(`
        "Selamat datang di Dunia Proxytia, ${nama}"
        "Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka."`);
    } else if(peran === 'Penyihir'){
      console.log(`
        "Selamat datang di Dunia Proxytia, ${nama}"
        "Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"`);
    } else {
      while (peran !== 'Ksatria' || peran !== 'Tabib' || peran !== 'Penyihir'){
        console.log(`"Peran harus diisi dan diantara Ksatria, Tabib atau Penyihir!"`);
        peran = prompt(`"Halo ${nama}, Pilih peranmu untuk memulai game!"`);
        if (peran === 'Ksatria'){
          console.log(`
            "Selamat datang di Dunia Proxytia, ${nama}"
            "Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!"`);
          break;
        } else if(peran === 'Tabib'){
          console.log(`
            "Selamat datang di Dunia Proxytia, ${nama}"
            "Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka."`);
          break;
        } else if(peran === 'Penyihir'){
          console.log(`
            "Selamat datang di Dunia Proxytia, ${nama}"
            "Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"`);
          break;
        }
      }
    }
  }
}
console.log(proxytia());
