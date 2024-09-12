export const CMSSchemaStoreExceptionNames = {
  CMSSchemaStoreException: 'CMSSchemaStoreException',
  GroupAlreadyExistsException: 'GroupAlreadyExistsException',
  FieldAlreadyExistsException: 'FieldAlreadyExistsException',
  GroupNotFoundException: 'GroupNotFoundException',
  FieldNotFoundException: 'FieldNotFoundException',
};

export class CMSSchemaStoreException extends Error {
  constructor(message: string) {
    super(message);
    this.name = CMSSchemaStoreExceptionNames.CMSSchemaStoreException;
  }
}

export class GroupAlreadyExistsException extends CMSSchemaStoreException {
  constructor(groupId: string) {
    super(`Grupo com ID '${groupId}' já existe.`);
    this.name = CMSSchemaStoreExceptionNames.GroupAlreadyExistsException;
  }
}

export class FieldAlreadyExistsException extends CMSSchemaStoreException {
  constructor(fieldId: string) {
    super(`Campo com ID '${fieldId}' já existe.`);
    this.name = CMSSchemaStoreExceptionNames.FieldAlreadyExistsException;
  }
}

export class GroupNotFoundException extends CMSSchemaStoreException {
  constructor(groupId: string) {
    super(`Grupo com ID '${groupId}' não encontrado.`);
    this.name = CMSSchemaStoreExceptionNames.GroupNotFoundException;
  }
}

export class FieldNotFoundException extends CMSSchemaStoreException {
  constructor(fieldId: string) {
    super(`Campo com ID '${fieldId}' não encontrado.`);
    this.name = CMSSchemaStoreExceptionNames.FieldNotFoundException;
  }
}
