import { auto } from 'browser-unhandled-rejection';
import { serviceWorkerUpdate, documentReady } from 'web-utility';
import { DOMRenderer } from 'dom-renderer';
import { configure } from 'mobx';

import { PageBox } from './page';
import { renderMode } from './utility';

auto();

configure({ enforceActions: 'never' });

self.addEventListener('unhandledrejection', ({ reason }) => {
    const { message } = reason as Error;

    if (message) self.alert(message);
});

const { serviceWorker } = window.navigator;

if (process.env.NODE_ENV !== 'development')
    serviceWorker
        ?.register('sw.js')
        .then(serviceWorkerUpdate)
        .then(worker => {
            if (
                window.confirm(
                    'New version of this Web App detected, update now?'
                )
            )
                worker.postMessage({ type: 'SKIP_WAITING' });
        });

serviceWorker?.addEventListener('controllerchange', () =>
    window.location.reload()
);

documentReady.then(() =>
    new DOMRenderer().render(<PageBox />, document.body, renderMode)
);
