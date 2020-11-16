# projectAngular
 
Este projeto foi realizado para a Aceleração Global Dev #2 Avanade

1. Descrição / Funcionalidade

    O projeto é basicamente um formulário aonde o usuário coloca os dados de uma partida de futebol com dois clubes com os dados do link do escudo, nome e número de gols. Após o preenchimento dos dados, o usuário clica no botão de "Salvar" e o os dados irão aparecer automaticamente em um card abaixo.

2. Componentes

    No projeto foi usado 4 componentes, o principal é o "Home" que possui todos os componentes interagindo com ele. Os outros são "Header", "Title" e "CardMatch".

2.  1. Componente Home

    O componente Home é o principal da aplicação, dentro dele estão os dados da aplicação, que se consiste nos dados obtidos no formulário e o array de "match" que são os dados salvos para fazer os cards.
    Além disso, foram criadas funcões para validar os dados para que não venha com problemas na execução no momento de salvar os dados, e a função de criação de um "match".
    Nesse componente foram usados os componentes "MatFormFieldModule", "MatInputModule", "MatButtonModule" e "MatSnackBarModule" do "Material/Angular.io".

2. 2. Componente Header

    O componente Header é o componente utilizado como Header da aplicação, foi criado a partir de um Toolbar importado do "Material/Angular", foi feito como componente para ser reaproveitado para outras páginas da aplicação.
    Para este componente foram usados os componentes "MatToolbarModule" e "MatIconModule" do "Material/Angular.io".

2. 3. Componente Title

    O componente Title é o componente mais simples da aplicação, foi criado para reusar os design do título para cada titulo do sistema. Nele foi usado uma interpolação aonde o dado("title") foi passado como propriedade do componente para ser reusado facilmente.
    Nesse componente não foi utilizado nenhum componente do "Material/Angular.io"

2. 4. Componente CardMatch

    Por fim o componente CardMatch, foi criado para ser usado para mostrar ao usuário os dados cadastrados pelo usuário. Se consiste em um card com todos os dados de "Match"(link do escudo, nome e gols dos dois clubes).
    Assim como "Title", foi usado interpolação para mostrar os dados obtidos("match") e além disso foi realizado Property Binding para receber os dados do "Home".
    Nesse componente foi usado o componente "MatCardModule" do "Material/Angular.io"

3. Outros Detalhes

    Para ajudar na aplicação foi criado um model de "Match" para ser usado para referenciar nos componentes. Seus dados são "urlShieldHome", "urlShieldAway", "nameHome", "nameAway", "golsHome" e "golsAway".
    Além disso foi escolhido a CSS para fazer as estilizações dos componentes do projeto.
    Foi adicionado uma imagem("botagua.jpg") para ser utilizado na aplicação.

4. Baixar e usar a aplicação.

    Para utilizar o sistema você precisa ter o "nodeJs" e "angular/cli". Para isso você pode usar qualquer uma das estratégias para baixar no seu computador, após ter feito o download do projeto, acesse a pasta do projeto e faça o comando: 
    
    npm install

    no seu propt de comando. Depois de instalar as bibliotecas do sistema, faça o comando

    ng serve -o

    espere executar e abra o seu navegador e acesse "http://localhost:4200/" ou espere a aplicação fazer isso.