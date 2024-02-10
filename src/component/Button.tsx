import { FC, WebCellProps } from 'web-cell';

import '@material/web/button/filled-button';
import '@material/web/icon/icon';

type Props = JSX.IntrinsicElements['md-filled-button'];

export interface ButtonProps
    extends Omit<Props, 'target'>,
        Pick<WebCellProps<HTMLAnchorElement>, 'href' | 'target'> {
    icon?: string;
}

export const Button: FC<ButtonProps> = ({
    className = '',
    style,
    title,
    slot,
    icon,
    href,
    target,
    children,
    ...rest
}) => {
    const props = { className, style, title, slot };
    const button = (
        <md-filled-button {...(href ? null : props)} {...rest}>
            {icon && <md-icon slot="icon">{icon}</md-icon>}
            {children}
        </md-filled-button>
    );

    return href ? (
        <a
            {...props}
            {...{ href, target }}
            className={`text-decoration-none ${props.className}`}
        >
            {button}
        </a>
    ) : (
        button
    );
};
