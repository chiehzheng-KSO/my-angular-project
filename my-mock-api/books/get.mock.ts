import { MockFn } from '@modhub/kin-mock-server';

export const mockFn: MockFn<any, { data: {} } | Error> = (req) => {
  if (!req.params.id) {
    return new Error('Book not found');
  }
  return {
    data: {
      id: req.params.id,
      name: 'Harry Potter 1',
      author: 'J. K. Rowling',
      description: 'Few kids try to use magic to save the world',
    },
  };
};
