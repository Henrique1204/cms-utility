export type ContentControl = {
  onReceiveValue: () => Promise<Record<string, string | string[]>>;
  onUpdateValue: (value: string) => Promise<void>;
};

export type ContentField = {
  id: string;
  groupId: string;
  type: string;
  label: string;
  defaultValue: any;
};

export type ContentGroup = {
  id: string;
  title: string;
  fields: string[];
} & ContentControl;

export type CMSSchemaStore = {
  groups: ContentGroup[];
  fields: ContentField[];
};
