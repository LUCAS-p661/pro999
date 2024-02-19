function afiseazaDataOra() {
    var dataOraElement = document.getElementById("dataOra");
    var dataCurenta = new Date();
    
    var ziua = dataCurenta.getDate();
    var luna = dataCurenta.getMonth() + 1; // Luna începe de la 0, așa că adăugăm 1
    var anul = dataCurenta.getFullYear();
    var ora = dataCurenta.getHours();
    var minute = dataCurenta.getMinutes();
    var secunde = dataCurenta.getSeconds();
    
    var text = "Astăzi este " + ziua + "/" + luna + "/" + anul + ". Ora curentă este " + ora + ":" + minute + ":" + secunde + ".";
    
    dataOraElement.textContent = text;
  }
  
    // Afiseaza data si ora initiala la incarcarea paginii
    afiseazaDataOra();
  // Actualizează data și ora la fiecare secundă
  setInterval(afiseazaDataOra, 100);


  