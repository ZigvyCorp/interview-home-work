import clsx from 'clsx'
import { ReactNode, type FC, CSSProperties } from 'react'
import styles from './index.module.scss'

type percent = '100' | '20' | '40' | '60' | '80' | '25' | '50' | '75' | '33' | '66'
type layout = 'start' | 'center' | 'end'
type justify = 'between' | 'evenly' | 'around'
type direction = 'row' | 'column' | 'row-reverse' | 'column-reverse'

interface ContainerProps {
    children: ReactNode;
    width?: percent;
    height?: percent;
    flex?: boolean;
    direct?: direction;
    justify?: layout | justify;
    align?: layout;
    gap?: number;
    rowGap?: number;
    wrap?: boolean;
    className?: string;
    color?: string;
    background?: string;
    style?: CSSProperties;
    id?: string;
}


const Container: FC<ContainerProps> = ({
    children,
    width = '100',
    height,
    flex = false,
    direct = 'row',
    justify,
    align,
    gap,
    rowGap,
    wrap = false,
    className,
    color,
    background,
    style,
    id,
    ...props
}) => {
    return (
        <div
            className={clsx(
                styles[`width-${width}`],
                height && styles[`height-${height}`],
                flex && styles.flex,
                flex && styles[`direct-${direct}`],
                justify && styles[`justify-${justify}`],
                align && styles[`align-${align}`],
                wrap && styles.wrap,
                className
            )}
            style={{
                gap: `${gap}px`,
                rowGap: `${rowGap}px`,
                color,
                background,
                ...style
            }}
            id={id}
            {...props}
        >
            {children}
        </div>
    )
}

export default Container
