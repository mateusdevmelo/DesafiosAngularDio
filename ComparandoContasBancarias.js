// TODO: Crie o objeto JSON do Cliente 1 e suas propriedades (conta e saldo):
const cliente1 = { 
    nome: gets(),
    conta:gets(),
    saldo:parseFloat(gets())
   };
   
   
   // TODO: Crie o objeto JSON do Cliente 2 e suas propriedades (nome, conta e saldo):
   const cliente2 = { 
    // Obtém o nome do cliente da conta:
    nome: gets(),
    conta:gets(),
    saldo:parseFloat(gets())
   };
   
   //TODO: Compare os JSONs (nome, conta, saldo) dos Clientes, verificando se todas as propriedades são iguais:
   
   if ((cliente1.nome === cliente2.nome) && (cliente1.conta === cliente2.conta ) && (cliente1.saldo === cliente2.saldo)){
    print("As contas bancárias são iguais.");
   } else {
    print("As contas bancárias são diferentes.")
   }

/*
Desafio
O objetivo deste desafio é criar um programa em JavaScript que compare duas contas bancárias e determine se elas possuem ou não as mesmas informações. O programa deve criar dois objetos JSON contendo o número da conta e o saldo da conta.

Entrada
O programa receberá os dados necessários para criar duas contas bancárias para comparação:

Conta Bancária 1:

Número da Conta (número inteiro): número da conta da primeira conta bancária.
Saldo (número): saldo da primeira conta bancária.
Conta Bancária 2:

Número da Conta (número inteiro): número da conta da segunda conta bancária.
Saldo (número): saldo da segunda conta bancária.
Importante: a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.


Saída
Se todos os dados das contas bancárias forem estritamente iguais, o programa deverá retornar a mensagem:
As contas bancárias são iguais.

Caso contrário, o programa deverá retornar a mensagem:
As conas bancárias são diferentes

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
Pedro
1234
500.0
Pedro
1252
400.0	As contas bancárias são diferentes.
Ju
01090
80.0
Ju
01090
80.0	As contas bancárias são iguais.
Tadeu
11111
600.0
João
12311
600.0	As contas bancárias são diferentes.
*/