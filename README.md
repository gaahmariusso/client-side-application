# client-side-application

Criada uma aplicação client-side, consultando a API do GitHub e mostrando os repositórios do usuário informado. Aplicação responsiva que funciona corretamente em todos os navegadores mais utilizados.

HTML

users.html -> Tela inicial contém um campo para buscar usuário. Assim que o mesmo é informado, é gerada uma bio, com informações de: nome, número de seguidores, número de seguidos, imagem do avatar, bio e um botão Listar Repositórios. Quando esse botão é executado, é listado todos os repositórios (ordenados pelo número decrescente de estrelas) do GitHub do usuário em questão. Essa lista é alterável, e pode ser reordenada de forma ascendente ou decrescente, fazendo o uso de dois botões logo abaixo.
Obs: Todos os repositórios listados contém um hiperlink, que direciona para a próxima página: Detalhes do repositório.

repository.html -> Esta página contém as informações do repositório clicado, como: nome, descrição, número de estrelas, linguagem de programação e um link externo, que direciona para a página do repositório no GitHub.

JAVASCRIPT

user.js -> Arquivo que consome as API's https://api.github.com/users/{username} , https://api.github.com/users/{username}/repos e fazem requisições à mesma com uso de JQuery. Ao logar se o usuário for inválido, é exibido um modal contendo a informação: Usuário Inválido. Se o número de requisições for esgotados, é exibido: Número de tentativas foi excedido. Ela que retorna todas as informações presentes na bio, na listagem dos repositórios, controle de ordenação asc/desc e uso da classe "hide" para esconder os blocos quando os botões ainda não foram executados.

repository.js-> Recebe informação de user.js, por query string para conseguir chamar a terceira API: https://api.github.com/repos/{full_name}. Retorna as informações que preenchem os detalhes do repositório.

CSS

user.css -> folha de estilo de users.html
repository.css -> folha de estilo de repository.html

Obs: layout atende dispositivos com a resolução no mínimo de 320 x 480.
