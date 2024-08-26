import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

type Constructor<T> = {
  new (...args: any[]): T;
};

export const validate = <T extends object, V>(cls: Constructor<T>, data: V): T => {
  const instance = plainToInstance<T, V>(cls, data);
  const errors = validateSync(instance);

  if (errors.length) {
    const constraints = errors[0].constraints;
    let message = 'Unknown validation error';

    if (constraints) {
      const key = Object.keys(constraints)[0];
      message = constraints[key];
    }

    throw new Error(message);
  }

  return instance;
};
