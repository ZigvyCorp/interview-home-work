import React, {} from 'react'
import styled from '@emotion/styled';
import Page from 'src/components/page/index.jsx';
import { Link, useNavigate } from 'react-router-dom';
import InputSearch from 'src/components/Input/inputSearch.jsx';
import { useSelector } from 'react-redux';


const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
`

const HeaderContentLeft = styled.div`

`

const HeaderContentCenter = styled.div`
    width: 60%;
`

const Logo = styled(Link)`

`

const HeaderContentRight = styled.div`
    display: flex;
    justify-content: space-between;
`


function Header() {
    const { postListWithUser: dataPost } = useSelector(state => state.PostReducer)
    const navigate = useNavigate()
    const listTitle = dataPost.result?.map(x => ({ value: x.title }))

    const onSearch = (value) => {
        const dataFilter = dataPost.result.filter(x => x.title === value)[0]
        navigate(`/post/detail/${dataFilter.id}`);
    }

    return (
        <Page>
            <HeaderStyled>
                <HeaderContentLeft>
                    <Logo to={'/'}>Home</Logo>
                </HeaderContentLeft>
                <HeaderContentCenter>
                    <InputSearch option={listTitle} onSearch={onSearch}/>
                </HeaderContentCenter>
                <HeaderContentRight>
                    <div>
                        logout
                    </div>
                </HeaderContentRight>
            </HeaderStyled>
        </Page>
    )
}

export default Header
