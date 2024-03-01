const formatDate = (dateString) => {
    const date = new Date(dateString)
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }
    return date.toLocaleDateString('en-US', options)
}

export default formatDate