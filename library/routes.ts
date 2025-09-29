import { ApiDef } from 'helpers';
export const ROUTES: ApiDef = {
  book: {
    list: {
      urlPattern: '/book/list',
      mockFnPath: 'book/list.ts',
      method: 'get',
      description: 'Book List API',
      profile: ['development', 'demo'],
      delay: 1000,
    },
  },
} as ApiDef;
