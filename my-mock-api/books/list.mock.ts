import { MockFn } from '@modhub/kin-mock-server';
import { faker } from '@faker-js/faker';
export const mockFn: MockFn<any, { data: any[] } | Error> = (req) => {
  // Static data
  return {
    data: [
      {
        id: 1,
        name: 'Harry Potter 1',
        author: 'J. K. Rowling',
        description: 'Few kids try to use magic to save the world',
        category: 'Romance',
      },
      {
        id: 2,
        name: 'Harry Potter 2',
        author: 'J. K. Rowling',
        description: 'Few kids try to use magic to save the world again',
        category: 'Romance',
      },
    ],
  };

  //Error Handling
  // if (req.query.error === 'true') {
  //   return new Error('Custom error message');
  // }

  //Faker generated data
  // const getCategory = () => {
  //   return faker.helpers.arrayElement([
  //     'Fantasy',
  //     'Science Fiction',
  //     'Mystery',
  //     'Thriller',
  //     'Romance',
  //   ]);
  // };
};
