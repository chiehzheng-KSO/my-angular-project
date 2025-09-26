import {
  createMockServer,
  type ApiDef,
  type EndpointDefinition,
} from '@modhub/kin-mock-server';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes: ApiDef = {
  example:{
    urlPattern: '/example',
    mockFnPath: './mock-fn/example.mock.ts',
    delay: 1000,
    disabled: false,
  },
  list: {
    urlPattern: '/api/books/list',
    mockFnPath: './books/list.mock.ts',
    delay: 2000,
    disabled: false,
  }
};

export const mockServer = createMockServer(routes, __dirname).start({
  port: 3000,
});
