import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { getRoles } from '../../src/services/sampleService';
import * as sampleRepository from '../../src/repositories/sampleRepository';

describe('getRoles service', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('returns roles when repository returns roles', async () => {
    const roles = ['admin', 'user'];
    jest.spyOn(sampleRepository, 'getRoles').mockResolvedValue(roles);

    const result = await getRoles();

    expect(result).toEqual(roles);
  });

  it('throws error when repository throws error', async () => {
    const error = new Error('Repository error');
    jest.spyOn(sampleRepository, 'getRoles').mockRejectedValue(error);

    await expect(getRoles()).rejects.toThrow('Repository error');
  });

  it('returns empty array when repository returns no roles', async () => {
    jest.spyOn(sampleRepository, 'getRoles').mockResolvedValue([]);

    const result = await getRoles();
    expect(result).toEqual([]);
  });
});
