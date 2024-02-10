import { FC } from 'web-cell';
import { createRouter } from 'cell-router';

import '@material/web/list/list';
import '@material/web/list/list-item';

import { Drawer } from '../component/Drawer';
import { CompanyList } from './CompanyList';

const { Route } = createRouter();

export const PageBox: FC = () => (
    <div classList="d-flex flex-column vh-100">
        <Drawer title="Anti 996">
            <md-list>
                <md-list-item>
                    <a className="stretched-link" href="#?type=996">
                        996
                    </a>
                </md-list-item>
                <md-list-item>
                    <a className="stretched-link" href="#?type=955">
                        955
                    </a>
                </md-list-item>
            </md-list>
        </Drawer>

        <div className="flex-fill overflow-auto">
            <Route path="" component={CompanyList} />
        </div>
    </div>
);
