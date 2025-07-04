# ProjetoCadastro

## Visão geral

A atividade consiste na inclusão do campo de CPF no formulário de cadastro de cliente, com aplicação de formatação e validação adequada.

Também foi solicitado o desenvolvimento de um modal para gerenciamento de beneficiários, permitindo a inclusão, edição e exclusão de registros, contendo os campos "Nome" e "CPF".

## Features adicionadas

O formulário de cadastro de cliente não permite a adição de um CPF já existente no banco.

Ex.:
![Tela cadastro](Readme/CPFJaCadastrado.png)

O campo de CPF possui as seguintes regras:

- Máscara para formatação do CPF tem o seguinte padrão (###.###.###-##)
- A validação do CPF é com base em algoritmo que valida o dígito verificador.

Ex.:
![Tela cadastro](Readme/CPFInvalido.png)

O modal de beneficiário possui algumas regras.

- Não é possível adicionar mais de um Beneficiário com o mesmo para um mesmo cliente.

Ex.:
![Tela beneficiario](Readme/CPFBenefExistente.png)

- É possível adicionar, alterar e remover os beneficiários.

Ex.:
![Tela beneficiario](Readme/IncluirBeneficiario.png)

## Banco de dados

Para o banco de dados foi necessária adição da coluna CPF na tabela Cliente e a criação de procedures para a tabela de Beneficiario.

![Banco de dados](Readme/BancoDados.png)