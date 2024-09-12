import CMSSchemaStore from './core/store/CMSSchema';
import * as CMSSchema from './core/useCases/CMSSchema';

import { CMSSchemaStoreExceptionNames } from './core/utils/exceptions/CMSSchemaStore';

export const store = {
  CMSSchemaStore,
};

export const useCases = {
  CMSSchema,
};

export const exceptions = {
  CMSSchemaStoreExceptions: CMSSchemaStoreExceptionNames,
};
