# opcua-server

Repositório para código fonte da aplicação exemplo do servidor OPC-UA do projeto OPC-UA Monitor.

###

O servidor OPC-UA exemplo fornece, por meio do protocolo OPC-UA, uma variável numérica aleatória de 0 a 100.

<br>

Passo a passo para fazer o download e iniciar o servidor OPC-UA

 
### Download do repositório 

- Abra um terminal e clone o repositório do servidor OPC-UA:

```
git clone https://github.com/RicardoGMiguel/opcua-server.git
```

###

- Instale as dependências

```
cd opcua-server
```
```
yarn
```

### Edição das variáveis de ambiente

-Abra um terminal, e descubra o ip da rede que a máquina de desenvolvimento está conectada.

```
ipconfig
```

- Abra o projeto do servidor OPC-UA no Visual Studio Code;
- Copie o arquivo ".env.example";
- Renomeie o arquivo para ".env";
- Configure as variáveis de ambinente no arquivo .env:

```
OPCUA_HOSTNAME=<IP_DA-REDE>
OPCUA_PORT=3003
RESOURCE_PATH=/UA/MyServer
```

### Iniciando o servidor OPC-UA

- Para iniciar o servidor OPC-UA execute o seguinte comando:

```
yarn start
```

Após a mensagem de confirmação de que o servidor está executando, a variável numérica aleatória já estará disponível para ser lida pelos clientes OPC-UA.


