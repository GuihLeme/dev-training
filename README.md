# DESAFIO TUNTS.ROCKS 2024

![DevTraining - Tunts.Rocks](https://lh7-us.googleusercontent.com/QAkXMkvZcBGO7XCDrhwizsBS6hibO4gf57E03S5a9C5Eeivlb3gbVlBcLiDa2I-5wuvfInFqMWGTp3w0c1nHEJe-2jzrvDG3rSRmYiuclQ079DQUK9GBvPs0ziJPmrz9RigFFYipsRKwQV5D3JqdjlU)
Desafio técnico do < DevTraining/> da Tunts.Rocks.

## Descrição do desafio

Criar uma aplicação em uma linguagem de programação de sua preferência (caso esteja se  candidatando a uma vaga de linguagem de programação específica, exemplo: programador  node.js, utilizar a linguagem/tecnologia específica da vaga). A aplicação deve ser capaz de ler  uma planilha do google sheets, buscar as informações necessárias, calcular e escrever o  resultado na planilha.

### Regras

- [x] Calcular a situação de cada aluno baseado na média das 3 provas (P1, P2 e P3), conforme a  tabela:
```
Média (m) Situação:

m<5     - Reprovado por Nota
5<=m<7  - Exame Final
m>=7    - Aprovado
```

- [x] Caso o número de faltas ultrapasse 25% do número total de aulas o aluno terá a situação  "Reprovado por Falta", independente da média.

- [x] Caso a situação seja "Exame Final" é necessário calcular a "Nota para Aprovação Final"(naf) de  cada aluno de acordo com seguinte fórmula:
```
5 <= (m + naf)/2
```
- [x] Caso a situação do aluno seja diferente de "Exame Final", preencha o campo "Nota para  Aprovação Final" com 0.

- [x] Arredondar o resultado para o próximo número inteiro (aumentar) caso necessário.

- [x] Utilizar linhas de logs para acompanhamento das atividades da aplicação.

- [x] Os textos do código fonte (atributos, classes, funções, comentários e afins) devem ser escritos  em inglês, salvo os identificadores e textos pré-definidos nesse desafio.

## 🛠 Tecnologias utilizadas
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## ⚙ Como utilizar a aplicação

  1. Certifique-se de ter o Node.js e NPM/Yarn instalados em sua máquina;

  2. Clone esse projeto utilizando o comando:
  ```
  git clone git@github.com:GuihLeme/dev-training.git
  ```
  3. Entre na pasta do projeto:
  ```
  cd dev-training
  ```
  4. Instale as dependências:
  ```
  yarn
  ```
  ou
  ```
  npm install
  ```
  5. Inicie a aplicação
  ```
  yarn start
  ```
  ou
  ```
  npm start
  ```

## 📱 Contatos
  - 📧 guih.fleme@gmail.com
  - 📱 (41) 995017907
  - [linkedin](https://www.linkedin.com/in/guihleme/)

  ### ✌🏻
