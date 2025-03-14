import 'mdui/components/button-icon';
import 'mdui/components/layout';
import 'mdui/components/layout-item';
import 'mdui/components/layout-main';
import 'mdui/components/list';
import 'mdui/components/list-item';
import 'mdui/components/navigation-drawer';
import 'mdui/components/top-app-bar';
import 'mdui/components/top-app-bar-title';

import { createRouter } from 'cell-router';
import { observable } from 'mobx';
import { attribute, component, observer } from 'web-cell';

import { renderMode } from '../utility';
import { CompanyList } from './CompanyList';

const { Route } = createRouter();

@component({ tagName: 'page-box', renderMode })
@observer
export class PageBox extends HTMLElement {
    @attribute
    @observable
    accessor drawerOpen = false;

    render() {
        const { drawerOpen } = this;

        return (
            <mdui-layout className="h-screen bg-white">
                <mdui-top-app-bar className="flex items-center gap-4 p-4">
                    <mdui-button-icon
                        icon="menu"
                        onClick={() => (this.drawerOpen = !this.drawerOpen)}
                    />
                    <mdui-top-app-bar-title>Anti 996</mdui-top-app-bar-title>
                    <div className="flex-1" />
                    <mdui-button-icon icon="more_vert" />
                </mdui-top-app-bar>

                <mdui-navigation-drawer
                    open={drawerOpen}
                    closeOnOverlayClick
                    onClosed={() => (this.drawerOpen = false)}
                >
                    <mdui-list onClick={() => (this.drawerOpen = false)}>
                        <mdui-list-item href="#?type=996">996</mdui-list-item>
                        <mdui-list-item href="#?type=955">955</mdui-list-item>
                    </mdui-list>
                </mdui-navigation-drawer>

                <mdui-layout-main>
                    <Route path="" component={CompanyList} />
                </mdui-layout-main>
            </mdui-layout>
        );
    }
}
