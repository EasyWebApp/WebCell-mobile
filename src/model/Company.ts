import { observable } from 'mobx';
import { service } from './service';

export type WorkType = '996' | '955';

export interface Company {
    id: string;
    name: string;
    score: number;
}

export class CompanyModel {
    @observable
    list: Company[] = [];

    async getList(type: WorkType) {
        const { body } = await service.get<Company[]>(`${type}.json`);

        return (this.list = body.sort(({ score: A }, { score: B }) => B - A));
    }
}
