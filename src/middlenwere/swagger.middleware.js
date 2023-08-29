import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import fs from 'fs';

const swaggerDocument = YAML.parse(fs.readFileSync('./swagger.yaml', 'utf8'));

export  function setupSwaggerUI() {
          return swaggerUi.serve;
        }
        
export  function serveSwaggerUI() {
          return swaggerUi.setup(swaggerDocument);
        }

