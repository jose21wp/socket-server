export class Gas {
    valor: number;
    cantidad: number;
    tamano: number;


    constructor(private val: number, private cant: number, private taman: number) {
        this.valor = val;
        this.cantidad = cant;

    }
}