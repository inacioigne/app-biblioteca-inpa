import { Client } from '@elastic/elasticsearch';
import fs from 'fs';
import path from 'path';

export const esClient  = new Client({
    node: 'https://localhost:9200',
    auth: {
      username: 'elastic',
      password: 'JSRX9GG6-bMZpC*2DRd_'
    },
    tls: {
      ca: fs.readFileSync('/home/inacio/biblioteca-app/src/lib/elastic/http_ca.crt'),
      rejectUnauthorized: false
    }
  })



  