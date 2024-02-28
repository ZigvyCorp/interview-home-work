import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Avatar from 'src/components/Avatar/index.jsx';
import { getRandomNumber } from 'src/utils/helpers/random.js';
import { COLORS } from 'src/theme/colors.js';

const UserCommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0;
    border-bottom: 1px solid ${COLORS.GRAY300};
`
const UserCommentContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Comment = styled.div`
    padding: 5px 10px;
    margin-left: 35px;
`
const CommentTile = styled.div`
    display: flex;
    align-items: center;
`
const CreatedDate = styled.div`
    margin-left: 10px;
    font-style: italic;
    color: ${COLORS.GRAY500};
`


const UserComment = ({ data = [], ...props }) => {
    const day = getRandomNumber(1, 30)
    const userAvatar = parseInt(data.id) > 69 ? `https://picsum.photos/250?${data.id}` : `https://i.pravatar.cc/250?img=${data.id}`
    return (
        <UserCommentContainer>
            <UserCommentContent>
                <CommentTile>
                    <Avatar id={data.id} src={userAvatar} userName={data.name}/>
                    <CreatedDate>
                        {day === 1 ? 'a day ago' : `${day} days ago`}
                    </CreatedDate>
                </CommentTile>
                <Comment>
                    {data.body}
                </Comment>
            </UserCommentContent>
        </UserCommentContainer>
    )
};

UserComment.propTypes = {
    data: PropTypes.object,
};

export default UserComment;
