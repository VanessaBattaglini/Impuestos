class Cliente {
    constructor(nombre) {
        this._nombre = nombre;
        this._impuesto = {};
    };
    get nombre() {
        return this._nombre;
    };
    set nombre(new_nombre) {
        this._nombre = new_nombre;
    };
    get impuesto() {
        return this._impuesto;
    };
    set impuesto(new_impuesto) {
        this._impuesto = new_impuesto;
    };
    calcularImpuesto() {
        return 
    }
};
export default Cliente 