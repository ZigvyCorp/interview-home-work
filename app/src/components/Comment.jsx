import { Avatar } from "antd"

import { get } from 'lodash'
import { timeSince } from '../utils'

export default function Comment({ comment } = { comment: {} }) {
    return <div key={comment._id} className="flex">
        <Avatar size="small" className="flex-none mr-2">
            {get(comment, ['owner', 'name', 0], "")}
        </Avatar>
        <div>
            <div>
                <span className="text-gray-700">{comment.owner?.name || "Unknown"}</span>
                <span className="ml-2 text-xs text-gray-400">{timeSince(new Date(comment?.created_at))}</span>
            </div>
            <p>
                {comment?.content}
            </p>
        </div>
    </div>
}