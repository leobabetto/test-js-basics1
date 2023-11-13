const analizzaTesto = (testo) => {
    const obj = {};
    obj.originale = testo;
    obj.minuscolo = testo.toLowerCase();
    obj.senzaSpazi = testo.trim() 
    obj.numeroCaratteri = obj.senzaSpazi.length;
    obj.contieneJS = testo.includes(`JS`) || testo.includes(`JavaScript`);
    obj.invertita = ``;
    for(let i = testo.length - 1; i >= 0; i--){
        const char = testo[i];
        obj.invertita += char;    
    }
    return obj;
}

const risultato = analizzaTesto(`  CamelCaseDappertuTTo `);
console.log(risultato)