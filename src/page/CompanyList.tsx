import { observable } from 'mobx';
import { WebCell, attribute, component, observer, reaction } from 'web-cell';

import 'mdui/components/button';
import 'mdui/components/card';

import companyStore, { Company, WorkType } from '../model/Company';
import { renderMode } from '../utility';

export interface CompanyListProps {
    type: WorkType;
}

export interface CompanyList extends WebCell<CompanyListProps> {}

@component({ tagName: 'company-list', renderMode })
@observer
export class CompanyList
    extends HTMLElement
    implements WebCell<CompanyListProps>
{
    @attribute
    @observable
    accessor type: WorkType = '996';

    @reaction(({ type }) => type)
    mountedCallback() {
        companyStore.getList(this.type);
    }

    renderCase = ({
        name,
        url,
        city,
        rule,
        evidences,
        date,
        comment_url
    }: Company) => (
        <mdui-card className="h-100 d-flex flex-column p-3">
            <h2 className="h5 text-truncate" title={name}>
                {url ? (
                    <a
                        className="text-decoration-none"
                        target="_blank"
                        href={url}
                    >
                        {name}
                    </a>
                ) : (
                    name
                )}
            </h2>
            <div className="flex-fill">
                <p className="text-muted">{city}</p>

                <p>{rule}</p>
                <ol>
                    {evidences.map(({ href, title }) => (
                        <li key={title}>
                            <a target="_blank" href={href}>
                                {title}
                            </a>
                        </li>
                    ))}
                </ol>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-3">
                <time className="text-truncate" title={date}>
                    {date}
                </time>
                <mdui-button target="_blank" href={comment_url} icon="edit">
                    Comment
                </mdui-button>
            </div>
        </mdui-card>
    );

    render() {
        const { list } = companyStore;

        return (
            <div className="row m-0 py-2">
                {list.map(item => (
                    <div
                        className="col-12 col-sm-6 col-md-4 col-lg-3 my-2"
                        key={item.name}
                    >
                        {this.renderCase(item)}
                    </div>
                ))}
            </div>
        );
    }
}
