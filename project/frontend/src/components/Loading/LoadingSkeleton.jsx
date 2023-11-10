import { twMerge } from 'tailwind-merge';

const LoadingSkeleton = ({ className }) => {
    return <div className={twMerge('background-gray-100 animate-pulse rounded-lg bg-gray-100', className)} />;
};

export default LoadingSkeleton;
