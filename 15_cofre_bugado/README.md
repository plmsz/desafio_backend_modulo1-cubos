# ⭐ Desafio  15 | Back - end - Módulo 1

##Cofre Bugado
Um novo cofre foi desenvolvido com a mais moderna tecnologia em segurança e criptografia. Na porta o cofre contém um teclado com todas as letras do alfabeto em que a pessoa pode digitar a senha predefinida para abrir a porta.

Durante alguns testes de rotina foi descoberto um bug uma funcionalidade na hora de validar a senha: 
✔️ O cofre ignora letras erradas durante a digitação da senha, desde que todas as letras da senha tenham sido digitadas na ordem correta.

✔️ Por exemplo, se a senha for “cubos” e for digitado “cuggbyos”, o cofre irá abrir.

🛠️ **_Input Format_**

A entrada consistirá em duas linhas, na primeira linha estará a senha correta, de até S caracteres. Na segunda linha estará a palavra digitada pela pessoa, de até N caracteres.

🛠️ **_Constraints_**

S ≤ 10^3 N ≤ 10^5

🛠️ **_Output Format_**

Imprima “SIM” caso o cofre abra. Caso contrário, imprimir “NAO”.

🛠️ **_Sample Input 0_**
```javascript=
cubos
cuggbyos
```
🛠️ **_Sample Output 0_**
```javascript=
SIM
```
🛠️ **_Sample Input 1_**
```javascript=
cubos
ewvelrabsocaeln
```
🛠️ **_Sample Output 1_**
```javascript=
NAO
```