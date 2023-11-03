import clsx from 'clsx';

interface LineBreakProps {
    className?: string;
    type?: 'vertical' | 'horizontal';
}

const LineBreak: React.FC<LineBreakProps> = (props) => {
    const { className, type = 'horizontal' } = props;

    return (
        <div
            className={clsx(
                'border-b-[1px] border-gray',
                { 'h-full bg-gray-400 w-[1px]': type === 'vertical' },
                className,
            )}
        ></div>
    );
};

export default LineBreak;
