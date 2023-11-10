"use client";

// Utilities
import { 
  getAccount,
  getKeyword,
  useDispatch,
  useSelector,
  managePosts,
  getTotalPage,
  getPageNumber,
  getPostsByKeyword,
  getPostsByPageNumber,
} from 'lib/redux';
import dynamic from 'next/dynamic'
import { BsSearch } from 'react-icons/bs';
import React, { Suspense, useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

// Components
import PostElement from './components/post/post.tsx';
import Account from "./components/account/account.tsx";
import Loading from "common-components/loading/loading.tsx";
const Pagination = dynamic(() => import('common-components/pagination/pagination.tsx'), { ssr: false })

// Interface
import { UserPost } from 'lib/redux'

// Style
import './home.scss'

export default function Home() {
  const dispatch = useDispatch();
  const account = useSelector(getAccount);
  const totalPage = useSelector(getTotalPage);
  const keywordState = useSelector(getKeyword);
  const pageNumber = useSelector(getPageNumber);
  const [keyword, setKeyword] = useState<string>('');
  const resultSearched = useSelector(getPostsByKeyword);
  const postsByPageNumber = useSelector(getPostsByPageNumber);

  const Posts = (accountId: number): React.ReactElement => {
    const posts = (() => {
      if(keywordState) {
        return resultSearched
      }

      return postsByPageNumber
    }
    )()

    return (
      <Suspense fallback={<Loading />}>
        {
          posts.map((post: UserPost) => {
            return <PostElement key={post.id} post={post} accountId={accountId} />
          })
        }
      </Suspense>
    )
  }

  const handlePageChange = async (pageNumber: number) => {
    await dispatch(managePosts.actions.setPageNumber(pageNumber))
  }

  const handleSearchClick = async () => {
    await dispatch(managePosts.actions.setPageNumber(1))
    dispatch(managePosts.actions.setKeyword(keyword.toLowerCase()))
  }

  return (
    <div className='home-page'>
      <div className='home-page__header'>
        <div className='header__logo' />
        <div className='header__search'>
          <InputGroup className="search__group">
            <Form.Control
              value={keyword}
              aria-label="Search"
              placeholder="Search post..."
              aria-describedby="basic-addon2"
              onChange={(event) => setKeyword(event.target.value)}
            />
            <Button variant="outline-info" id="button-addon2" onClick={handleSearchClick}>
              <BsSearch />
            </Button>
          </InputGroup>
        </div>
        <div className='header__account'>
          <Account account={account} />
        </div>
      </div>
      <div className='home-page__content'>
        {
          Posts(account.id)
        }
      </div>
      <div className='home-page__footer'>
        <Pagination
          totalPage={totalPage}
          pageNumber={pageNumber}

          pageChange={handlePageChange}
        />
      </div>
    </div>
  )
}
