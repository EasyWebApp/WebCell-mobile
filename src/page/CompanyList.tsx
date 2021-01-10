import {
    WebCellProps,
    component,
    mixin,
    watch,
    attribute,
    createCell
} from 'web-cell';
import { observer } from 'mobx-web-cell';

import { WorkType, company } from '../model';

export interface CompanyListProps extends WebCellProps {
    type: WorkType;
}

@observer
@component({
    tagName: 'company-list',
    renderTarget: 'children'
})
export class CompanyList extends mixin<CompanyListProps>() {
    @attribute
    @watch
    type: WorkType = '996';

    connectedCallback() {
        this.classList.add('row');

        company.getList(this.type);

        super.connectedCallback();
    }

    render() {
        const { list } = company;

        return list.map(({ id, name, score }) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={id}>
                <div className="mdc-card mx-3 my-2 p-3">
                    <h3 className="h4 text-truncate">{name}</h3>
                    score: {score}
                </div>
            </div>
        ));
    }
}
