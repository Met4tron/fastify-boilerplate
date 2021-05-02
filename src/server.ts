import 'module-alias/register';

import { app } from '@/config/app';

app.ready().then((_) => {
  app.listen(3000, () => {
    app.log.info('API IS RUNNING!!');
  });
});
