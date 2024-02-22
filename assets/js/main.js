// Se importan los datos de los archivos para usarlos en main.js
import Cliente from '../modulo/clientes.js';
import Impuesto from '../modulo/impuesto.js';

// Se instancia Cliente e Impuesto para asignarle valores

const cliente = new Cliente('Camilo Contreras');
cliente.impuesto = new Impuesto();
const montoBrutoAnual = 800000;
const deducciones = 30000;
const impuestoCalculado = cliente.impuesto.calcularImpuesto(montoBrutoAnual, deducciones);

// Imprime el resultado
console.log(`Cliente: ${cliente.nombre}`);
console.log(`Impuesto Total a Pagar: ${impuestoCalculado}`);