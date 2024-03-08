# AULA 08/03/2024 UC - Sistemas Distribuídos e Mobile

## NOSSO PRIMEIRO SERVIDOR HTTP

Iniciando projeto...

1. Criação deste repositório Github
2. Clonar o repositório no seu local

~~~
git clone https://github.com/mmamorim/SDM20241Aula0803.git
~~~

3. Abrir pasta no VSCode
4. Abrir terminal
5. Rodar comando para criar o arquivo package.json, pois iremos instalar alguns pacotes que serão gerenciados pelo **npm** [veja em rockcontent blog](https://rockcontent.com/br/blog/npm/)

~~~
npm init -y
~~~

6. Para executar 

~~~
node main.js
~~~
ou
~~~
nodemon main.js
~~~

Obs: Para ficar reiniciar a execução automaticamente, podemos usar o **nodemon**. Neste caso, deve-se instalá-lo [ver github do projeto](https://github.com/remy/nodemon): 
~~~
npm install -g nodemon 
~~~

***

Sobre modularização de código no javascript: [ver blog lucas Santos](https://blog.lsantos.dev/os-ecmascript-modules-estao-aqui/)
> Importante ver no package.json qual o tipo está configurado no atributo `type`
> Existe 2 formas: 
>  1. CommonJS: usando `require` e `module.exports` No package.json -> "type": "module"
>  2. ESM: usando `import` e `export` + `default`  No package.json -> "type": "module"
> 