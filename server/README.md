## ✨ Technologies

### 🖥 Server
-   [ ] [TypeScript](https://www.typescriptlang.org/) - is a strongly typed programming language that builds on JavaScript.
-   [ ] [SWC](https://swc.rs/) - Rust-based platform for the Web. SWC can be used for both compilation and bundling.
-   [ ] [Jest](https://jestjs.io/) - JavaScript Testing Framework.
-   [ ] [Prisma](https://www.prisma.io/) - ORM for Node.js & TypeScript | PostgreSQL, MySQL, MariaDB, SQL Server, SQLite, MongoDB and CockroachDB.
-   [ ] [ts-node](https://typestrong.org/ts-node/) - Is a TypeScript execution engine and REPL for Node.js.
-   [ ] [ts-node-dev](https://github.com/wclr/ts-node-dev#readme) - Compiles your TS app and restarts when files are modified.
-   [ ] [Express](https://expressjs.com/) - Node.js web application framework.
-   [ ] [cors](https://github.com/expressjs/cors) - Node.js package for providing a express middleware that can be used to enable CORS with various options.
-   [ ] [nodemailer](https://nodemailer.com/about/) - Is an easy to use module to send e-mails with Node.JS. Integrating with [Mailtrap](https://mailtrap.io/) you'll be able to receive the e-mails containing the Feedback type selected, comment and if the user took any screenshot it will be sent to the e-mail.

## 🐱‍💻 Environment variables

There are some environment variables that you can use to configure the environment. 

Create an **.env** or **.env.local** file with the following keys/values:

**Required**
- DATABASE_URL=<span style="color: #238636;">"file:./dev.db"</span> To run locally, use this value and set the db provider to "sqlite" in <a href="./prisma/schema.prisma">schema.prisma</a> file. For production, set the Postgres Connection URL from Railway (set it on your Railway application Variables).

- MAILTRAP_USER=<<span style="color: #238636;">your_mailtrap_auth_user</span>>

- MAILTRAP_PASS=<<span style="color: #238636;">your_mailtrap_auth_password</span>>

You can take the whole authentication from: Mailtrap -> Inboxes -> SMTP Settings -> Integrations select Nodemailer.

Or just copy this url and change the PROJECT_ID to your project ID. https://mailtrap.io/inboxes/PROJECT_ID/settings and select Nodemailer on Integrations options.

**Optional**
- PORT=<<span style="color: #238636;">your_server_port</span>> Set a value to run locally, if it's not set, will use the default port 3333. This variable is filled automatically by the [Railway](https://railway.app/).

## Executing locally

Open your preferred terminal in the server directory and install the dependencies using yarn or npm depending on your package manager (yarn or npm)
```cl
yarn // For yarn users

OR

npm install // For npm users
```

After installing the dependencies, it might be possible to run the command:

```cl
yarn dev // Run the development server. (Configured to run yarn start on production)
```

So now you can access the endpoints.

The endpoints are mapped in <a href="./src/routes/Routes.ts">Routes.ts</a> folder.

### Available routes:

`[POST] /feedbacks`
```json
Body

{ 
  type,       // String  [Required]
  comment,    // String  [Required]
  screenshot  // String? [Optional]
}
```

## ✉ Sending e-mail

The e-mail is sent to [Mailtrap](https://mailtrap.io/). You can receive it in your Mailtrap account, just setting the following code with your **auth**.
```javascript
const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS
  }
})
```

## 🧪 Tests

The application uses unit tests to test the services.
All tests are within their context in the \_\___tests__\_\_ folder.

To run the tests, make sure that you are in the __server__ folder. 

Then execute the following command:
```cl
yarn test
```

## 🚀 Deploy

The chosen deployment platform for this project was [Railway](https://railway.app/) for the server and PostgreSQL instance.

Railway is an infrastructure platform where you can provision infrastructure, develop with that infrastructure locally, and then deploy to the cloud.