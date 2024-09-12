export type ContentControl = {
  onReceiveValue: () => Promise<string>;
  onUpdateValue: (value: string) => Promise<void>;
};

export type ContentField = {
  id: string;
  groupId: string;
  type: string;
  label: string;
  defaultValue: any;
} & ContentControl;

export type ContentGroup = {
  id: string;
  title: string;
  fields: string[];
};

export type CMSSchemaStore = {
  groups: ContentGroup[];
  fields: ContentField[];
};
