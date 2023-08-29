import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import fs from 'fs';

const swaggerDocument = YAML.parse(fs.readFileSync('./swagger.yaml', 'utf8'));

export function setupAndServeSwaggerUI() {
          return [
            '/api-docs',
            swaggerUi.serve,
            swaggerUi.setup(swaggerDocument)
          ];
        }