import { Skeleton, Card } from 'antd';

const SkeletonBlobs = () => {
    return (
        <Card className="my-10">
            <Skeleton.Input className="mb-4" active block size="large" />
            <Skeleton
                // avatar
                title={false}
                paragraph={{
                    rows: 4,
                    width: ['20%', '20%', 'full', '50%'],
                }}
                active
            />
            <Skeleton.Button className="mt-2 ml-2" active size="default" />
        </Card>
    );
};

export default SkeletonBlobs;
