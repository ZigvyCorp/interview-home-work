export const randomDate = () => {
    const startMs = new Date('2020-01-01').getTime();
    const endMs = new Date().getTime();

    const randomMs = startMs + Math.random() * (endMs - startMs);
    const randomDate = new Date(randomMs);

    return randomDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });;
}