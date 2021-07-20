# ⭐ Desafio  13 | Back - end - Módulo 1

##Distância máxima

Thacila está preocupada com as condições de trabalho em nosso ambiente cúbico, em especial com o quanto as pessoas precisam andar dentro da sala. Também é comum na Cubos que uma pessoa tire dúvidas com outra indo até a mesa do colega, caminhando a distância. 

✔️ Ela está fazendo um trabalho de realocar as mesas da sala para que as pessoas precisem andar o mínimo possível. 
✔️ Para tal, ela precisa primeiro rever a posição atual e determinar qual é a maior distância que precisa ser andada para uma pessoa chegar na mesa do colega. 
✔️ Como o número de pessoas está ficando bem grande, ela precisa escrever um programa para isso. Considere que cada pessoa é um ponto no plano euclidiano e que a distância é sempre uma linha reta entre dois pontos.

🛠️ **_Input Format_**

Neste problema a entranda é um único string que você deve tratar adequadamente para obter as informações que você precisa em variáveis separadas.

A primeira linha deste string será o inteiro N que indica o número de funcionários da Cubos. Nas próximas N linhas você lerá dois números, as coordenadas X e Y do i-ésimo funcionário.

🛠️ **_Constraints_**

2 ≤ N ≤ 10^3
-1000 ≤ X, Y ≤ 1000

🛠️ **_Output Format_**

Imprima um único número, a resposta para o problema.

🛠️ **_Sample Input 0_**
```javascript=
3
0 0
0 3
4 0
```
🛠️ **_Sample Output 0_**
```javascript=
5.0
```
🛠️ **_Sample Input 1_**
```javascript=
5
3.56 17
-5.1 36.3
0.0002 -2
5 5
-9.01 -17.7
```
🛠️ **_Sample Output 1_**
```javascript=
54.141371427033505
```