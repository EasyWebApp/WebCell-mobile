import {
    WebCellProps,
    component,
    mixin,
    watch,
    attribute,
    createCell
} from 'web-cell';
import { observer } from 'mobx-web-cell';
import '@material/mwc-button';

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
        this.classList.add('row', 'm-0', 'py-2');

        company.getList(this.type);

        super.connectedCallback();
    }

    render() {
        const { list } = company;

        return list.map(
            ({ name, url, city, rule, evidences, date, comment_url }) => (
                <div
                    className="col-12 col-sm-6 col-md-4 col-lg-3 my-2"
                    key={name}
                >
                    <div className="mdc-card h-100">
                        <h3 className="h5 text-truncate pt-3 px-3">
                            {url ? (
                                <a target="_blank" href={url}>
                                    {name}
                                </a>
                            ) : (
                                name
                            )}
                        </h3>
                        <p className="text-muted px-3">{city}</p>

                        <p className="px-3">{rule}</p>
                        <ol>
                            {evidences.map(({ href, title }) => (
                                <li>
                                    <a target="_blank" href={href}>
                                        {title}
                                    </a>
                                </li>
                            ))}
                        </ol>
                        <div className="mdc-card__actions flex-fill align-items-end justify-content-between px-3">
                            <time>{date}</time>
                            <a
                                className="text-decoration-none"
                                target="_blank"
                                href={comment_url}
                            >
                                <mwc-button
                                    className="mdc-card__action mdc-card__action--button"
                                    unelevated
                                    dense
                                    icon="edit"
                                >
                                    Comment
                                </mwc-button>
                            </a>
                        </div>
                    </div>
                </div>
            )
        );
    }
}
