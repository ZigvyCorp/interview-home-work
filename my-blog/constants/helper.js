export function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export const mergedDataPost = ({ users, posts, comments }) => {
  return posts.map((post) => {
    const user = users.find((user) => user.id === post.userId);
    const commentList = comments.filter((comment) => comment.postId === post.id);
    return {
      ...post,
      user: user,
      comments: commentList,
    };
  });
};

export const shortText = (text, limit) => {
  const elememts = formatText(text).split(/[\s,]+/); //text.replace(/\n/g, ' _breakline_ ').split(/[\s,]+/)
  let txt = "";
  for (let i = 0; i < elememts.length; i++) {
    const next = " " + elememts[i];
    if (txt.length + next.length < limit) txt += " " + elememts[i];
    else {
      txt += " " + elememts[i] + " " + "...";
      break;
    }
  }
  return txt;
};

export const formatText = (text) => {
  const elememts = (text || "").replace(/\n/g, " _breakline_ ").split(/[\s]+/);
  let txt = "";
  for (let i = 0; i < elememts.length; i++) {
    if (elememts[i] === "_breakline_") {
      if (elememts[i - 1] !== "_breakline_") {
        txt += " " + elememts[i];
      }
      if (
        elememts[i - 1] === "_breakline_" &&
        elememts[i - 2] !== "_breakline_"
      ) {
        txt += " " + elememts[i];
      }
    } else {
      txt += " " + elememts[i];
    }
  }
  return txt.replace(/_breakline_/g, "<br/>");
};
