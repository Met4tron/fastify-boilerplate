import 'dotenv/config';
import { app } from '@config/app';
import { MongoHelper } from '@config/database';
import { env } from '@config/env';

MongoHelper.connect(env.MONGO_URI)
  .then((_) => app.ready())
  .then((_) => {
    app.listen(3000);
  })
  .catch((err) => app.log.error(err));
