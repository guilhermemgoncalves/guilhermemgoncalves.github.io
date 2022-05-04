function escreve(nome, sobrenome) {
    const a = sobrenome;
    if (a === null) {
        console.log("a é nulo"), console.log("Valor de a ", a, "\n"), console.log("valor de sobrenome", sobrenome, "\n")
    };

    console.log(`nome ${nome}, sobrenome ${sobrenome}`);
}

escreve("Guilherme");

function soma(a, b, c) {
    return Number(a) + Number(b) + Number(c);
}

const resultado = soma(2, 2, 4);
console.log(resultado);

const exibe = function (x) {
    return `exibindo ${x}`;
}
console.log(exibe("-x-"));

function quemEoThis() {
    console.log(this === window);
}

function quemEoThisEstrito() {
    "use strict";
    console.log(this === window);
}

quemEoThis();
quemEoThisEstrito();

function Exibe2() {
    this.a = 50;
}

const novoObjeto = new Exibe2();
console.log(novoObjeto);



let empresa = this;
console.log("quemn é o this no contexto global", empresa);

const aluno = {
    nome: "Guilherme",
    matricula: 123,

    executar: function () {
        return this.nome;
    }

}
console.log(aluno.executar());
console.log(aluno.nome);
console.log(aluno);


function globalObj() {

    return this;
}
window.document.write("<h2>Escrevendo no Body</h2>");
document.write(globalObj());


const novaFuncao = (a, b) => {
    console.log("chamando de dentro de uma arrow function!");
    console.log(`Exibindo o valor de a ${a}`)
    console.log(`Exibindo o valor de a ${b}`)
}


const funcao3 = (a) =>
    console.log(`Exibindo o total de carcateres de ${a.length}`);

funcao3("Guilherme Marciano");

const carros = (primeiro, segundo, ...restante) => {
    console.log(
        `Os carros informados foram: ${primeiro}, ${segundo}. Todos os demais são ${restante.join(", ")}`)
}
carros(
    "Del Rey", "Brasilia", "Opala", "kombi"
)

const frutas = ['Guaraná', 'Cupuaçu', 'Açaí'];
const todasFrutas = [... frutas,'Banana, Maçã']
console.log(todasFrutas);

let a = 50;
let b =100;

const [primeiro, segundo, terceiro, ...resto] = [a, b, 200, 1000, 5000];
console.log("Exibindo o primeiro: ", primeiro);
console.log("Exibindo o resto: ", resto);

const  meuArray =  [10, 20, 30, 40 ];
console.log(meuArray, meuArray.join(", ")); 

const [p, s, t, q] = meuArray;
console.log('Exibindo o quarto elemento', q);