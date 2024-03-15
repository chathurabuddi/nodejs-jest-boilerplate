import * as sampleService from '../services/sampleService';

export const getRoles = (req, res, next) => {
  sampleService
    .getRoles()
    .then((data) => res.json(data))
    .catch((err) => next(err));
};
