import React from "react";
import styled from "styled-components";
import withComments from "./comments.enhance";
import Comment from "src/routes/comment";

interface IProps {
  id: number;
  comments: any;
  translate: any;
}

const Styled = styled.div``;

const Comments = (props: IProps) => {
  const { id, comments } = props;
  const { data } = comments[id];
  const { replies } = props.translate.comments;
  const total = data.length;
  return (
    <Styled className="comments">
      <p className="total">{`${total} ${replies}`}</p>
      {data.map((item: any) => (
        <Comment key={item.id} id={item.id} />
      ))}
    </Styled>
  );
};

export default withComments(Comments);
