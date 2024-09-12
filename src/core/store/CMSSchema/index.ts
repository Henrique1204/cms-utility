import { CMSSchemaStore as ICMSSchemaStore } from '@Types/core/store/CMSSchemaStore';

import { createStoreFactory } from '../createStore';

const CMSSchemaStore = createStoreFactory<ICMSSchemaStore>(() => ({
  groups: [],
  fields: [],
}));

export default CMSSchemaStore;
