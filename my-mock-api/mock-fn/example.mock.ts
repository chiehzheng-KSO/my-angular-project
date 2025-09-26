import { MockFn } from '@modhub/kin-mock-server';

export const mockFn: MockFn<any, { data: { message: string }}> = () => ({
  data: {
    message: 'Hello from mock server!'
  }
});