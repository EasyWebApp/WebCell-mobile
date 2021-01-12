import { observable } from 'mobx';
import { service } from './service';

export type WorkType = '996' | '955';

export interface Evidence {
    title: string;
    href?: string;
}

export interface Company {
    name: string;
    url?: string;
    city: string;
    rule: string;
    evidences: Evidence[];
    date: string;
    comment_url: string;
}

export class CompanyModel {
    @observable
    list: Company[] = [];

    async getList(type: WorkType) {
        const { body } = await service.get<Company[]>(`${type}.json`);

        return (this.list = body.sort(({ date: A }, { date: B }) =>
            B.localeCompare(A)
        ));
    }
}
