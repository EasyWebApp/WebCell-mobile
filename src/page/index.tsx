import { delegate } from 'web-utility';
import { FC } from 'web-cell';
import { createRouter } from 'cell-router';

import '@material/web/list/list';
import '@material/web/list/list-item';

import { Drawer } from '../component/Drawer';
import { CompanyList } from './CompanyList';

const { Route } = createRouter();

document.addEventListener(
    'MDCTopAppBar:nav',
    ({ target }) => ((target as HTMLElement).closest('md-drawer').open = true)
);

document.addEventListener(
    'click',
    delegate(
        'md-drawer > md-list a',
        (_, link) => (link.closest('md-drawer').open = false)
    )
);

export const PageBox: FC = () => (
    <>
        <Drawer title="Anti 996">
            <md-list>
                <md-list-item>
                    <a className="stretched-link" href="companies?type=996">
                        996
                    </a>
                </md-list-item>
                <md-list-item>
                    <a className="stretched-link" href="companies?type=955">
                        955
                    </a>
                </md-list-item>
            </md-list>
        </Drawer>

        {/* <Route path="" component={CompanyList} /> */}
    </>
);
