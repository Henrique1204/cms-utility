import { addFieldFn, createGroupFn } from '@Types/core/useCases/CMSSchema';

import { FieldAlreadyExistsException, GroupAlreadyExistsException } from '@Utils/exceptions/CMSSchemaStore';
import { itemExistsInList } from '@Utils/list';

import CMSSchemaStore from '@Store/CMSSchema';

export const createGroup: createGroupFn = (newGroup) => {
  const { groups: existingGroups } = CMSSchemaStore.useStore.getState();
  const setState = CMSSchemaStore.useStore.setState;

  if (itemExistsInList(existingGroups, newGroup)) {
    throw new GroupAlreadyExistsException(newGroup.id);
  }

  setState((state) => ({
    ...state,
    groups: existingGroups.concat([{ ...newGroup, fields: [] }]),
  }));
};

export const addField: addFieldFn = (newField) => {
  const { fields: existingFields, groups } = CMSSchemaStore.useStore.getState();
  const setState = CMSSchemaStore.useStore.setState;

  if (itemExistsInList(existingFields, newField, ['id', 'groupId'])) {
    throw new FieldAlreadyExistsException(newField.id);
  }

  const updatedGroups = groups.map((group) => {
    if (group.id === newField.groupId) {
      return { ...group, fields: [...group.fields, newField.id] };
    }

    return group;
  });

  setState({
    fields: existingFields.concat([newField]),
    groups: updatedGroups,
  });
};
