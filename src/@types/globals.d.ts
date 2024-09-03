import React from 'react';

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      [key: PropertyKey]: string | undefined;
    }
  }

  type MergeTypes<T extends any[]> = T extends [infer First, ...infer Rest]
    ? First & MergeTypes<Rest>
    : unknown;

  type UnionTypes<T extends any[]> = T[number];
}
