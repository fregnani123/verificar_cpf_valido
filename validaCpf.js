class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }
    valida() {
    if (!this.cpfLimpo) return
    return "CHEGUEI AQUI"
    }
}

let validacpf = new ValidaCPF("063.912.989-71");

console.log(validacpf)