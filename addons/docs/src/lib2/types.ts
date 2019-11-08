import { PropsTableProps, PropDef } from '@storybook/components';
import { Component } from '../blocks/shared';

export type PropsExtractor = (component: Component) => PropsTableProps | null;

export interface DocgenInfo {
  type?: {
    name: string;
    value?: {
      name?: string;
      raw?: string;
    };
  };
  flowType?: {
    name: string;
  };
  tsType?: {
    name: string;
  };
  required: boolean;
  description?: string;
  defaultValue?: {
    value: string;
  };
}

export enum TypeSystem {
  JAVASCRIPT = 'JavaScript',
  FLOW = 'Flow',
  TYPESCRIPT = 'TypeScript',
  UNKNOWN = 'Unknown',
}
