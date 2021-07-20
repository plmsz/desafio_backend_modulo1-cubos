# 🚀 Desafio  08| Back-end -  Módulo 1
## Americano 

Num jogo de futebol entre amigos é muito comum que ninguém queira ser o goleiro. Para resolver esse impasse, um time decidiu utilizar o jogo "Americano".

✔️ Neste jogo, o time faz uma roda e cada um dos jogadores "joga" um número X qualquer. Após isso, o capitão do time soma todos os números jogados e obtém o resultado S. Depois, começa a contar de 1 até S apontando inicialmente para si mesmo (e falando alto e claramente "um"), depois para o jogador imediatamente a sua direita (e falando "dois") e assim por diante.

✔️ O goleiro será aquele que estiver sendo apontado quando o capitão chegar a S.

✔️ Para fins de facilitar a resposta do problema, vamos considerar que o capitão está na posição 1, o jogador a sua direita está na posição 2, o jogador a direita deste está na posição 3, e assim por diante.

Você deve fazer um programa que determina qual a posição do jogador que deve ser o goleiro.

🛠️ **_Input Format_**

A entrada será um array com N números, que corresempondem ao número jogado por cada um dos jogadores do time. Logo, se o array tiver tamanho 11, significa que este time tem 11 jogadores, por exemplo.

🛠️ **_Constraints_**
```javascript=
0 < X < 11
N < 12
```

🛠️ **_Output Format_**

Imprima na tela a posição em que está o jogodar que foi sorteado para ser o goleiro.

🛠️ **_Sample Input 0_**
```javascript=
1 3 2 1
```

🛠️ **_Sample Output 0_**
```javascript=
3
```

🛠️ **_Sample Input 0_**
```javascript=
1 1 1
```

🛠️ **_Sample Output 0_**
```javascript=
3
```