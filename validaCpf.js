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
    geraNovoCpf(){
        let cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        let digito1 = this.geraDigito(cpfSemDigitos);
        let digito2 = this.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos){
           total += reverso * Number(stringNumerica);
           reverso--;
        }
      let digito = 11 - (total % 11);
      return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string')return false;
        if (this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia())return false;
        this.geraNovoCpf();
        return this.novoCPF === this.cpfLimpo;
    }
}


let validacpf = new ValidaCPF("063.912.989-71");

if (validacpf.valida()) {
    console.log( "cpf valido")
}else{console.log("cpf invalido")}