import { WebCell, component, reaction, attribute, observer } from 'web-cell';
import { observable } from 'mobx';
import { Card, CardBody, CardTitle } from 'boot-cell';

import '@material/web/button/filled-button';
import '@material/web/icon/icon';

import { Button } from '../component/Button';
import companyStore, { WorkType, Company } from '../model/Company';

export interface CompanyListProps {
    type: WorkType;
}

export interface CompanyList extends WebCell<CompanyListProps> {}

@component({ tagName: 'company-list' })
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
        <Card className="shadow-sm h-100">
            <CardBody className="d-flex flex-column">
                <CardTitle className="h5 text-truncate">
                    {url ? (
                        <a target="_blank" href={url}>
                            {name}
                        </a>
                    ) : (
                        name
                    )}
                </CardTitle>
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
                    <Button target="_blank" href={comment_url} icon="edit">
                        Comment
                    </Button>
                </div>
            </CardBody>
        </Card>
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
