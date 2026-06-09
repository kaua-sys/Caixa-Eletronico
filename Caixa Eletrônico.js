//Criando menu e saldo do usuário
let saldo = Number(prompt("Qual seu saldo inicial?: "));
let opcao = ""

//Volta para o menu até o usuário escolher o 4
while (opcao != "4") {

//Criando as opções do menu
opcao = prompt(
`\n===== CAIXA ELETRÔNICO =====

1 - Consultar saldo
2 - Depositar
3 - Sacar
4 - Sair

Escolha uma opção: `
);

//Criando resultado das escolhas do usuário
switch (opcao) {
    case "1":
    console.log("Seu saldo é: R$ " + saldo);
    break;
    
    case "2":
   let valorDeposito = Number(prompt("Quanto deseja Depositar: "));
   saldo = saldo + valorDeposito;
   console.log("Novo saldo: R$ " + saldo);
    break;
    
    case "3":
    let valorSaque = Number(prompt("Quanto deseja Sacar: "));
    
    if (valorSaque <= saldo) {
    saldo = saldo - valorSaque;
    console.log("Novo saldo: R$ " + saldo);
    } else{
        console.log("Valor Insuficiente!");
    }
    break;
    
    case "4":
    console.log("\nObrigado pela preferência. Até logo");
    break;
    
    default:
    console.log("\nOpção invalida");
    break;
} 
}
