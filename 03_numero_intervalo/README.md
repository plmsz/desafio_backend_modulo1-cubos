# 🚀 Desafio  01| Back-end - Módulo 1

## Números dentro de um intervalo

Jacqueline e Emanuel acabaram de sair da aulas desesperados pela quantidade de exercícios de matemática que a professora Raissa passou como dever de casa. Para a sorte deles, você sabe programação e vai criar um programa pra ajudá-los a resolver todos os problemas do assunto intervalos entre dois números.

Eles pediram, então, para que você crie um programa que consiga fazer a prova-real de todos os exercícios da professora Raissa.

##Seu objetivo é:

✔️ Implementar uma função que receba três argumentos: numero, ****limiteInferior**** e ****limiteSuperior****;
✔️ Essa função deve retornar se esse número pertence ao conjunto que é limitado pelo **limiteInferior** e **limiteSuperior**
✔️ Pertencer ao conjunto significa que dado o numero, ele deve ser maior ou igual que o **limiteInferior** e menor ou igual do que o **limiteSuperior**.

🛠️ **_Input Format_**

A entrada consista de três parâmetros: numero, **limiteInferior** e **limiteSuperior**.

numero refere-se ao número desejado para saber se ele está dentro ou não do limite. **limiteInferior** refere-se ao menor valor do limite de um dado intervalo; **limiteSuperior** refere-se ao maior valor do limite de um dado intervalo;

🛠️ **_Constraints_**

Quaisquer números inteiros;
**limiteInferior** menor ou igual ao **limiteSuperior**;
🛠️ **_Output Format_**

Imprima uma das duas opções abaixo:

✔️ PERTENCE - para quando um número pertence ao limite delimitado;
✔️ NAO PERTENCE - para quando um número não pertence ao limite delimitado;

🛠️ **_Sample Input_**

```javascript=
10 5 20
```
🛠️ **_Sample Output_**
```javascript=
PERTENCE
```

🛠️ **_Explanation_**

O primeiro valor refere-se ao valor que deseja-se saber é pertercente ao intervalo;
O segundo e terceiro valor refere-se ao intervalo.