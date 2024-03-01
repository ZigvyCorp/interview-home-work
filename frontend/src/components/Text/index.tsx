import { type FC } from 'react'
import {
    Typography as AntdTypography,
    ConfigProvider as AntdConfigProvider,
    ThemeConfig
} from 'antd'
import { TextProps as AntdTextProps } from 'antd/es/typography/Text'
import { TitleProps as AntdTitleProps } from 'antd/es/typography/Title'
import { ParagraphProps as AntdParagraphProps } from 'antd/es/typography/Paragraph'
import { Require } from 'types/common'

const {
    Text: AntdText,
    Title: AntdTitle,
    Paragraph: AntdParagraph
} = AntdTypography

interface CommonCss {
    fontSize?: number;
    fontWeight?: number;
    color?: string;
    lineHeight?: number;
}

interface TextProps extends
    Require<AntdTextProps, 'children'>,
    CommonCss {}

export const Text: FC<TextProps> = ({
    children,
    fontSize,
    fontWeight,
    color,
    lineHeight,
    ...props
}) => {
    const theme: ThemeConfig = {
        token: {
            fontSize,
            colorText: color,
            lineHeight
        }
    }
    return (
        <AntdConfigProvider theme={theme}>
            <AntdText style={{ fontWeight }} {...props}>
                {children}
            </AntdText>
        </AntdConfigProvider>
    )
}

interface TitleProps extends
    Require<AntdTitleProps, 'children' | 'level'>,
    CommonCss {}

export const Title: FC<TitleProps> = ({
    children,
    level,
    fontSize,
    fontWeight,
    color,
    lineHeight,
    ...props
}) => {
    const theme: ThemeConfig = {
        token: {
            fontSize,
            colorText: color,
            lineHeight
        }
    }
    return (
        <AntdConfigProvider theme={theme}>
            <AntdTitle
                style={{ fontWeight }}
                level={level} {...props}
            >
                {children}
            </AntdTitle>
        </AntdConfigProvider>
    )
}

interface ParagraphProps extends
    Require<AntdParagraphProps, 'children'>,
    CommonCss {}

export const Paragraph: FC<ParagraphProps> = ({
    children,
    ellipsis,
    fontSize,
    fontWeight,
    color,
    lineHeight,
    ...props
}) => {
    const theme: ThemeConfig = {
        token: {
            fontSize,
            colorText: color,
            lineHeight
        }
    }
    return (
        <AntdConfigProvider theme={theme}>
            <AntdParagraph
                style={{ fontWeight }}
                ellipsis={ellipsis} {...props}
            >
                {children}
            </AntdParagraph>
        </AntdConfigProvider>
    )
}
