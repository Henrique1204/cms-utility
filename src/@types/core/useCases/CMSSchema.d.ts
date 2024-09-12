import { ContentGroup } from '../store/CMSSchemaStore';

export type createGroupFn = (newGroup: Omit<ContentGroup, 'fields'>) => void;
export type addFieldFn = (newGroup: ContentField) => void;
