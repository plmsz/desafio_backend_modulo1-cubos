function solucao(min, km) {
    let custoKm = 0; let custoTempo = 0;
    if (min > 20) {
        custoTempo = 20 * 50 + (min - 20) * 30;
    } else {
        custoTempo = min * 50;
    }
    if (km > 10) {
        custoKm = 10 * 70 + (km - 10) * 50;
    } else {
        custoKm = km * 70;
    }
    console.log(custoKm + custoTempo);
}

solucao(25, 11.5);
solucao(20, 11.5);
solucao(20, 10);
solucao(25, 10);