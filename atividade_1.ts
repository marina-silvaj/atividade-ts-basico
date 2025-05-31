const nome: string = "Maria";
const idade: number = 30;
const altura: number = 1.75;
const estudante: boolean = true;

const verificaParImpar = function(n: number) { 
    if (n % 2 === 0){
      return "par";
    } else {
      return "ímpar";
    }
  };
    
const somatorio = function(n: number) {
    let sum = 0;
    for (let i = 1; i<= n; i++) {
      sum += i;
    }
    return sum;
  };


const fibonacci = function(n: number) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let x = 0, y = 1;
    for (let i = 2; i <= n; i++) {
        const temp = x + y;
        x = y;
        y = temp;
    }
    return y;
};

class Retangulo {
  constructor(private largura: number, private altura: number) {}

  area(): number {
    return this.largura * this.altura;
  }

  perimetro(): number {
    return 2 * (this.largura + this.altura);
  }
};

export {nome, idade, altura, estudante};
export {verificaParImpar, somatorio, fibonacci, Retangulo};