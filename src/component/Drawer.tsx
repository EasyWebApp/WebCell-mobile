import { OffcanvasBox, OffcanvasBoxProps } from 'boot-cell';
import { observable } from 'mobx';
import { WebCell, attribute, component, observer, on } from 'web-cell';

import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';

export interface DrawerProps extends OffcanvasBoxProps {}

export interface Drawer extends WebCell<DrawerProps> {}

@component({
    tagName: 'md-drawer',
    mode: 'open'
})
@observer
export class Drawer extends HTMLElement implements WebCell<DrawerProps> {
    @attribute
    @observable
    accessor open = false;

    mountedCallback() {
        this.classList.add('sticky-top');
    }

    @on('click', 'a[href], md-list-item')
    handleItemClick() {
        this.open = false;
    }

    renderContent() {
        const { title, open } = this;

        return (
            <>
                <div className="shadow-sm d-flex justify-content-between align-items-center p-3">
                    {title}

                    <md-icon-button onClick={() => (this.open = true)}>
                        <md-icon>menu</md-icon>
                    </md-icon-button>
                </div>

                <OffcanvasBox
                    title={title}
                    show={open}
                    onHide={() => (this.open = false)}
                >
                    <slot />
                </OffcanvasBox>
            </>
        );
    }

    render() {
        return (
            <>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                />
                {this.renderContent()}
            </>
        );
    }
}
