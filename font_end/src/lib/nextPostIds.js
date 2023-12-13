export default function nextPostIds(currentLength) {
    let ids = '?';
    for (let index = currentLength + 1; index <= currentLength + 5; index++) {
        ids = ids.concat(`id=${index}&`);
    }
    return ids;
}
