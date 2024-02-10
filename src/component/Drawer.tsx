import { OffcanvasBox, OffcanvasBoxProps } from 'boot-cell';
import { observable } from 'mobx';
import { WebCell, attribute, component, observer } from 'web-cell';
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

    @observable
    accessor narrow = false;

    updateScreen = () => (this.narrow = innerWidth < innerHeight);

    mountedCallback() {
        this.updateScreen();

        globalThis.addEventListener('resize', this.updateScreen);
    }

    disconnectedCallback() {
        globalThis.removeEventListener('resize', this.updateScreen);
    }

    renderContent() {
        const { title, narrow, open } = this;

        return (
            <>
                <div className="sticky-top shadow-sm d-flex justify-content-between align-items-center p-3">
                    {title}

                    {narrow && (
                        <md-icon-button onClick={() => (this.open = true)}>
                            <md-icon>menu</md-icon>
                        </md-icon-button>
                    )}
                </div>
                {narrow ? (
                    <OffcanvasBox
                        title={title}
                        show={open}
                        onHide={() => (this.open = false)}
                    >
                        <slot />
                    </OffcanvasBox>
                ) : (
                    <slot />
                )}
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
