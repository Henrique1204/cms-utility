import CMSSchemaStore from './core/store/CMSSchema';
import { createStoreFactory } from './core/store/createStore';

import * as CMSSchema from './core/useCases/CMSSchema';

import { CMSSchemaStoreExceptionNames } from './core/utils/exceptions/CMSSchemaStore';

export const store = {
  CMSSchemaStore,
  createStoreFactory,
};

export const useCases = {
  CMSSchema,
};

export const exceptions = {
  CMSSchemaStoreExceptions: CMSSchemaStoreExceptionNames,
};
