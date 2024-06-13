import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'source/swagger.yaml',
  output: {
    path: 'output',
    format: false,
    lint: false
  } ,
  client: '@hey-api/client-fetch',
  schemas: false,
  types: {
    enums: 'javascript'
  },
  services: {
    asClass: true,
  }
});
