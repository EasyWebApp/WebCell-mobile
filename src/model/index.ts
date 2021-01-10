import { History } from 'cell-router/source';

import { CompanyModel } from './Company';

export * from './Company';

export const history = new History();
export const company = new CompanyModel();
