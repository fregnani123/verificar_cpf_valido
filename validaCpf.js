class ValidaCPF {
    
    constructor(cpfLimpo) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfLimpo.replace(/\D+/g, '')            
        });
    }
   
    eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    geraNovoCPF(){
        let cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        let digito1 = this.geraDigito(cpfSemDigitos);
    }

    geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos){
           
        }

    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string')return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.eSequencia()) return false;

        return "CHEGUEI AQUI"
    }
}


let validacpf = new ValidaCPF("063.912.989-71");

console.log(validacpf.valida())