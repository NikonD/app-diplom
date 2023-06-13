import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { mainRoutes } from './src/routes/main';
import { join } from 'path';
import bodyParser from 'body-parser';
import config from './config/config.json'
import session from 'express-session';
import passport from 'passport';
import { UUID } from 'crypto';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './src/graphql/scheme';
import { resolver } from './src/graphql/resolver';
import { graphqlHTTP } from 'express-graphql';
dotenv.config();

declare module 'express-session' {
  interface SessionData {
    user: {
      id: string | undefined,
      name: string | undefined,
      role: number | undefined,
      verify: boolean | undefined
    };
  }
}

const app: Express = express();

const apolloServerIntance = new ApolloServer({
  schema: schema,
  rootValue: resolver,
  formatError: (formattedError) => {
    return {
      message: "Incorrect response"
    }
  },
  debug: true,
  context: ({req}) => {
    const token = req.get('XTOKEN')
  }
})
apolloServerIntance.start().then(()=>{
  apolloServerIntance.applyMiddleware({app, cors: false})
})


const port = config.PORT;

app.set('trust proxy', 1) // trust first proxy
app.use(session({  
  name: `daffyduck`,
  secret: 'some-secret-example',  
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false, // This will only work if you have https enabled!
    maxAge: 60000 // 1 min
  } 
}));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static(join(__dirname, "..", "build")));
app.use('/static', express.static(join(__dirname, 'client', 'build', 'static')));

app.get('/*', (req: Request, res: Response) => {
  console.log("Session", req.session.user)
  res.sendFile( join(__dirname, 'client', 'build', 'index.html'))
});

app.use('/', mainRoutes)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});