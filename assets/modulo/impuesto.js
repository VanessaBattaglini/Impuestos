//Formula para calcular el impuesto anual
//Fórmula:((𝑚𝑜𝑛𝑡𝑜𝐵𝑟𝑢𝑡𝑜𝐴𝑛𝑢𝑎𝑙 − 𝑑𝑒𝑑𝑢𝑐𝑐𝑖𝑜𝑛𝑒𝑠) * 21%)
// Incializamos la instacia de Impuesto
class Impuesto {
    calcularImpuesto(montoBrutoAnual, deducciones) {
        return (montoBrutoAnual - deducciones) * 0.21;
    };
    get montoBrutoAnual() {
        return this.montoBrutoAnual
    };
    set montoBrutoAnual(montoBrutoAnual) {
        this.montoBrutoAnual = montoBrutoAnual;
    };
    get deducciones() {
        return this.deducciones;
    };
    set deducciones(deducciones) {
        this.deducciones = deducciones;
    };
};

//Intaciamos la clase Impuesto

const impuesto = new Impuesto();
const impuestoCalculado = impuesto.calcularImpuesto(800000, 30000);
console.log(impuestoCalculado)


export default  Impuesto