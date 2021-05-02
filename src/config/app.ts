import fastify, { FastifyInstance } from 'fastify';
import cors from 'fastify-cors';
import helmet from 'fastify-helmet';

const app: FastifyInstance = fastify({
  logger: true
});

app.register(cors);
app.register(helmet);

export { app };
