# 🏧 Simulador de Caixa Eletrônico em JavaScript

Este é o meu segundo projeto prático de Lógica de Programação. Desenvolvi um simulador de terminal bancário interativo que roda via console, aplicando conceitos fundamentais de controle de fluxo e manipulação de dados.

O objetivo principal foi estruturar um menu contínuo onde o usuário gerencia suas finanças em tempo real.

## 🚀 Funcionalidades

* **Definição de Saldo Inicial:** O usuário começa informando o valor que possui em conta.
* **Consulta de Saldo:** Exibe o valor atualizado na tela.
* **Depósito:** Permite somar novos valores ao saldo existente.
* **Saque com Validação:** O sistema verifica se há saldo suficiente antes de aprovar a retirada, evitando saldos negativos.
* **Menu de Navegação:** Sistema em loop que só encerra quando o usuário digita a opção de sair.

## 🛠️ Conceitos de Lógica que Apliquei:

* **Validação de Dados:** Uso de estruturas condicionais `if/else` para garantir a segurança da operação de saque.
* **Controle de Fluxo com `switch/case`:** Organização limpa das opções do menu (1, 2, 3 e 4).
* **Laço `while`:** Mantém o caixa eletrônico ativo para o usuário realizar múltiplas operações sem que o programa feche sozinho.
* **Operadores de Atribuição Aritmética:** Manipulação do saldo somando depósitos e subtraindo saques de forma dinâmica.

## 🔧 Como rodar o projeto

Você vai precisar do [Node.js](https://nodejs.org/) instalado na sua máquina.

1. Baixe o arquivo `Caixa Eletrônico.js`.
2. Abra o terminal na pasta do arquivo.
3. Execute o comando:
   ```bash
   node "Caixa Eletrônico.js"
