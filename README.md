LiveSearch
==========

LiveSearch do site G1.

### Requerimentos

* Python2.7;
* Flask;
* Unidecode;

### Instalando

1. Instalando as dependências.

  ```sh
  pip install requirements.txt
  ```

2. Rodando o projeto.

  ```sh
  python app.py
  ```

*Recomenda-se o uso de uma virtualenv.*

### Observações

1. Instalação de arquivos estáticos via bower ou outro gerenciador.

  Como o projeto não usa nenhum pacote estravagante resolvi servir os arquivos estáticos diretamente através do CDN recomendado de cada pacote.

2. Compressão de arquivos js/css utilização de ferramentas como: SASS/LESS.

  Preferi a utilização de um stack minimalista para a construção do projeto para facilitar a instalação e distribuição. Quanto a performance preocupe-se quando for necessário.

3. Testes

  São importantes, mas foi implementado nenhum tipo no projeto. Acredito que a parte mais importante para se testar é a view de suggests para verificar se realmente ela retorna o json apropriado.
