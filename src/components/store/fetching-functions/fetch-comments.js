export async function fetchComments(endpoint) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error(response.statusText);
    const commentsArray = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 250));

    const commentsDataMap = new Map();
    commentsArray.forEach((comment) => {
      commentsDataMap.set(comment.id, comment);
    });

    return commentsDataMap;
  } catch (err) {
    throw new Error(`-Error: ${err}\n-End point: ${endpoint}`);
  }
}
