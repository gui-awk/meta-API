# **Integração da Graph API do Facebook com Google Sheets**

## Este script em JavaScript foi desenvolvido para automatizar a extração de dados da Graph API do Facebook e inseri-los em uma planilha do Google Sheets. Ele realiza as seguintes operações:

- Calcula a data de ontem.
- Constrói o URL da API com a data de ontem.
- Faz uma requisição HTTP para a Graph API do Facebook.
- Analisa a resposta JSON da API.
- Escreve os dados na planilha do Google Sheets especificada.
- Como usar
- Copie o código do arquivo main.js para outro arquivo JavaScript que deseje utilizar.

## Como implementar o script

1 - Abra o Google Sheets onde deseja inserir os dados e clique em Ferramentas > Editor de Scripts.

2 - Cole o código na janela de script e salve.

3 - Agora, você pode chamar a função graphAPI() para executar o script.

4 - Observação: Antes de executar o script, certifique-se de que a planilha do Google Sheets esteja corretamente configurada e de que você tenha as permissões necessárias para acessar a Graph API do Facebook.


# Substituindo o Token de Acesso

O token de acesso fica logo ao final da variável "jsonURL", para conseguir você deve gerar o seu próprio token dentro da plataforma do META.

A obtenção de um novo token de acesso envolve o processo de autenticação e autorização com a Graph API do Facebook. Certifique-se de seguir as etapas apropriadas para autenticar sua conta e gerar um token com as permissões necessárias para acessar os dados desejados.

Ao substituir o token de acesso no código, é importante garantir que o novo token tenha permissões adequadas para ler os dados da conta de anúncios na Graph API do Facebook. Você pode obter um novo token de acesso seguindo as diretrizes e procedimentos fornecidos pela documentação oficial da Graph API do Facebook.

Por razões de segurança, lembre-se de manter o novo token de acesso seguro e não compartilhá-lo publicamente, pois ele concede acesso às informações confidenciais da conta de anúncios no Facebook. Certifique-se de armazenar o token de forma segura e mantê-lo atualizado conforme necessário, seguindo as práticas recomendadas de segurança de dados.
