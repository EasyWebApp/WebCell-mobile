import 'mdui/components/button';
import 'mdui/components/card';

import { observable } from 'mobx';
import { attribute, component, observer, reaction, WebCell } from 'web-cell';

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

    @reaction(({ type }: CompanyList) => type)
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
        <mdui-card className="flex h-full flex-col gap-4 p-4">
            <h2 className="font-bold text-blue-500" title={name}>
                {url ? (
                    <a target="_blank" href={url} rel="noreferrer">
                        {name}
                    </a>
                ) : (
                    name
                )}
            </h2>
            <div className="flex flex-1 flex-col gap-4">
                <p className="text-neutral-500">{city}</p>
                <p>{rule}</p>

                <ol className="list-inside list-decimal">
                    {evidences.map(({ href, title }) => (
                        <li key={title}>
                            <a
                                target="_blank"
                                className="text-blue-500 underline"
                                href={href}
                                rel="noreferrer"
                            >
                                {title}
                            </a>
                        </li>
                    ))}
                </ol>
            </div>
            <div className="flex items-center justify-between">
                <time className="truncate" title={date}>
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
            <ul className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {list.map(item => (
                    <li key={item.name}>{this.renderCase(item)}</li>
                ))}
            </ul>
        );
    }
}
