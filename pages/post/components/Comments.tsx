import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Image from 'react-bootstrap/Image';
import { getComments } from '../../../app/actions/getComments';

function Comments({ id }: any) {
    const [open, setOpen] = useState(false);
    const [comments, setComments] = useState<any[]>([]);

    useEffect(() => {
        let mounted = true;
        getComments(id)
            .then((items: any) => {
                if (mounted) {
                    setComments(items.data);
                }
            });

        return () => {
            mounted = false;
        };
    }, [open]);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls={id}
                aria-expanded={open}
                className='w-100 text-start bg-transparent text-secondary border-0 border-bottom rounded-0'
            >
                {comments.length} Reply
            </Button>
            <Collapse in={open}>
                <div id={id} className='py-3'>
                    {
                        comments.map((comment: any) => {
                            return (
                                <div key={comment.id} className='d-flex align-items-start'>
                                    <Image src="/assets/images/avt-2.jpg" roundedCircle width={50} />
                                    <div>
                                        <h4 className='text-black-50 fs-6'>{comment.name}</h4>
                                        <p>{comment.body}</p>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Collapse>
        </>
    );
}

export default Comments;