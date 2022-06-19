/*#Comandos SQL*/
MySQL -h sql10.freesqldatabase.com -u sql10499498 -p


create database cadastro_produtos; #cria DB

create table usuario ( /*cria table/segmento dentro do DB selecionado*/
	id INT NOT NULL AUTO_INCREMENT, /*Cria campo id do tipo int, não pode ser nulo, e auto incrmentável (o próprio db gera o número e o incrementa) */
    Nome varchar(30),
    Email varchar(40),
	telefone varchar(15), /*varchar = string limitado à quantiade de letra/numeros */
	produto varchar(30),
	/*campo DOUBLE      > caso queira utilizar campo selecionável */
	PRIMARY KEY (id)
);

use cadastro_produtos; /*#seleciona DB criado no step anterior ou pré-existente*/

show tables; /*mostra as tables do DB selecionado*/
describe clientes; /* mostra a tabela criada */
select * from clientes; /*mostra conteúdo da table clientes, caso haja) */

ALTER TABLE tbl_Produto /* altera a tabela selecionada */
CHANGE Tipo_Prod Categ_Prod VARCHAR(30); /* muda nome ou tipo de dado de um segmento selecionado */

INSERT INTO clientes (endereco,telefone,produto) VALUES ("Rua quatro,22","11985589969","Doce de Leite");
/* comando SQL para adicionar os valores respectivos dentro da tables "clientes"*/


create database cadastro_produtos; /* #cria Db */
CREATE TABLE fornecedores(nome varchar(20), produto varchar(40), email varchar(40), endereco varchar(50));

Host: sql10.freesqldatabase.com
Database name: sql10493922
Database user: sql10493922
Database password: mvVHGVl8PU
Port number: 3306



Host: sql10.freesqldatabase.com
Database name: sql10499498
Database user: sql10499498
Database password: xCiCNRU9Cx
Port number: 3306