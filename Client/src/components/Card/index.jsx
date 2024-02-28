import React from 'react';
import { Card as CCard } from 'antd';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Avatar from 'src/components/Avatar/index.jsx';
import { COLORS } from 'src/theme/colors.js';
import moment from 'moment';
import { getRandomDate } from 'src/utils/helpers/random.js';
import { MessageOutlined } from '@ant-design/icons';
import Collapse from 'src/components/Collapse/index.jsx';
import UserComment from 'src/components/UserComment/index.jsx';
import { Link } from 'react-router-dom';

const CardStyled = styled(CCard)`
    width: 100%;

    .ant-card-head {
        .ant-card-head-title {
            display: flex;
            justify-content: center;
        }

        a {
            display: block;
            color: ${COLORS.BLUE700};
            width: fit-content;

            &:hover {
                color: ${COLORS.RED400};

            }
        }
    }
`

const CardTitle = styled(Link)`
    text-align: center;
`

const CardContainer = styled.div`
    padding: 0 30px;
`
const CardDescription = styled.div`
    display: flex;
    justify-content: space-between;
`
const CardCreatedDate = styled.div`
    font-style: italic;
    color: ${COLORS.GRAY500};
`

const CardContent = styled.div`
    margin: 25px 0;
`

const CardAction = styled.div`
    display: flex;
    justify-content: center;
`
const IconText = ({ icon, text }) => (
    <span>
    {React.createElement(icon, { style: { marginInlineEnd: 8 } })}
        {text}
  </span>
);
const Card = ({ children, id, title, comments, user, ...props }) => {
    const userAvatar = parseInt(user?.id) > 69 ? `https://picsum.photos/250?${user?.id}` : `https://i.pravatar.cc/250?img=${user?.id}`
    const date = getRandomDate();

    const formattedDate = moment(date).format('MMM DD, YYYY')

    return (
        <CardStyled
            title={
                <CardTitle to={`/post/detail/${id}`}>{title}</CardTitle>
            }
            bordered
            {...props}
        >
            <CardContainer>
                <CardDescription>
                    <Avatar id={user?.id} src={userAvatar} userName={user?.name}/>
                    <CardCreatedDate>
                        Created at: {formattedDate}
                    </CardCreatedDate>
                </CardDescription>
                <CardContent>
                    {children}
                </CardContent>
                <CardAction>
                    <Collapse
                        label={
                            <IconText
                                icon={MessageOutlined}
                                text={`${comments?.length}`}
                                key="list-vertical-message"
                            />
                        }
                        content={
                            comments?.map(x => (
                                <UserComment data={x} key={x.id}/>
                            ))
                        }
                    />
                </CardAction>
            </CardContainer>
        </CardStyled>
    )
};

Card.propTypes = {
    children: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    comments: PropTypes.array,
    user: PropTypes.object
};

IconText.propTypes = {
    icon: PropTypes.object,
    text: PropTypes.string
};
export default Card;
