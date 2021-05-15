import React from 'react';
function PostFilterForm(props) {
    const { onSubmit } = props;
    const onchange = e => {
        const value= e.target.value;
        if(!onSubmit) return;
        onSubmit(value);
    }
    const onHandleSubmit =(e)=>{
        e.preventDefault();
        onSubmit(e.target.value);
    }
    return (
        <form>
            <input className="search-input" placeholder="Tìm kiếm" onChange={onchange} onSubmit={onHandleSubmit} />
        </form>
        
    )
}

export default PostFilterForm;
