import { observable } from 'mobx';

import { service } from './service';

export type WorkType = '996' | '955';

export interface Evidence {
    title: string;
    href?: string;
}

export interface Company
    extends Record<'name' | 'city' | 'rule' | 'date' | 'comment_url', string> {
    url?: string;
    evidences: Evidence[];
}

export class CompanyModel {
    @observable
    accessor list: Company[] = [];

    async getList(type: WorkType) {
        const { body } = await service.get<Company[]>(`${type}.json`);

        return (this.list = body.sort(({ date: A }, { date: B }) =>
            B.localeCompare(A)
        ));
    }
}

export default new CompanyModel();
