# mm-api-test

Projeto com o fim de utilizar as metodologias de teste unitários junto ao desenvolvimento com angularJS.
Esse projeto vai ser voltado exclusivamente para estudos junto a tecnologias de teste, sem fins de desenvolvimento
de componentes ou projetos profissionais.

## API(s) de teste usada(s):

- [jasmine](http://jasmine.github.io/)
- [karma](https://karma-runner.github.io/0.13/index.html)
- [angular-mocks](https://github.com/angular/bower-angular-mocks)

## Comandos do projeto:

Instalação de todas as dependências do projeto.

```bash
$ npm install
```

### Tasks do grunt:

Task que vai baixar todas as dependências do projeto, e criar toda a estrutura do mesmo:

```bash
$ grunt
```

Tasks que vai rodar os testes unitários:

- Rodando com karma
```bash
$ grunt tests:karma
```
- Rodando com jasmine
```bash
$ grunt tests:jasmine
```



