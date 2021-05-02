import { str, num, cleanEnv } from 'envalid';

const env = cleanEnv(process.env, {
  PORT: num({
    devDefault: 3000
  }),
  MONGO_URI: str({
    devDefault: 'mongodb://localhost:27017/fastify-boilerplate'
  })
});

export { env };
