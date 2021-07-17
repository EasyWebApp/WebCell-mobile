import { delegate, createCell } from 'web-cell';
import { CellRouter } from 'cell-router/source';

import type {} from 'material-cell';
import '@material/mwc-drawer';
import '@material/mwc-list';
import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-icon-button';

import { history } from '../model';
import { CompanyList } from './CompanyList';

document.addEventListener(
    'MDCTopAppBar:nav',
    ({ target }) => ((target as HTMLElement).closest('mwc-drawer').open = true)
);

document.addEventListener(
    'click',
    delegate(
        'mwc-drawer > mwc-list a',
        (_, link) => (link.closest('mwc-drawer').open = false)
    )
);

export function PageBox() {
    return (
        <mwc-drawer hasHeader type="modal">
            <div slot="title">Companies</div>
            <mwc-list>
                <mwc-list-item>
                    <a className="stretched-link" href="companies?type=996">
                        996
                    </a>
                </mwc-list-item>
                <mwc-list-item>
                    <a className="stretched-link" href="companies?type=955">
                        955
                    </a>
                </mwc-list-item>
            </mwc-list>

            <mwc-top-app-bar-fixed slot="appContent">
                <mwc-icon-button slot="navigationIcon" icon="menu" />
                <div slot="title">Anti 996</div>

                <CellRouter
                    history={history}
                    routes={[
                        { paths: ['', 'companies'], component: CompanyList }
                    ]}
                />
            </mwc-top-app-bar-fixed>
        </mwc-drawer>
    );
}
