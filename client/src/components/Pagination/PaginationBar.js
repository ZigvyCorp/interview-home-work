/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    faAngleDoubleLeft,
    faAngleLeft,
    faAngleRight,
    faAngleDoubleRight,
    faEllipsisH,
  } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import React from 'react'
  import { Pagination } from 'react-bootstrap'
  
  
  const PaginationBar = ({ data, onChangePage }) => {
  
    const renderItem = (title, page, disabled = false) => {
      return (
        <li onClick={()=>{onChangePage(page)}} className={`page-item${disabled ? ' disabled' : ''}`}>
          {title}
        </li>
      )
    }
  
    const renderItemLink = (active, pageItem) => {
      return active ? <span className="page-link">{pageItem}</span> : <a className="page-link">{pageItem}</a>
    }
  
    const renderRangeItem = () => {
      const paginationItem = [],
        pageRange = 5
  
      let showedLeftEllipsis = false,
        showedRightEllipsis = false
      for (let pageItem = 1; pageItem <= parseInt(data.lastPage); pageItem++) {
        const minPage = data.currentPage - pageRange > 1 ? data.currentPage - pageRange : 1,
          maxPage =
            data.currentPage + pageRange < parseInt(data.lastPage)
              ? data.currentPage + pageRange
              : parseInt(data.lastPage)
  
        if (pageItem < minPage && !showedLeftEllipsis) {
          showedLeftEllipsis = true
          paginationItem.push(
            <li className={'page-item'} key={`pagination-item-left-ellipsis-${pageItem}`}>
              <span className="page-link">
                <FontAwesomeIcon icon={faEllipsisH} fixedWidth />
              </span>
            </li>,
          )
        }
  
        if (pageItem > maxPage && !showedRightEllipsis) {
          showedRightEllipsis = true
          paginationItem.push(
            <li className={'page-item'} key={`pagination-item-right-ellipsis-${pageItem}`}>
              <span className="page-link">
                <FontAwesomeIcon icon={faEllipsisH} fixedWidth />
              </span>
            </li>,
          )
        }
  
        if (pageItem < minPage || pageItem > maxPage) {
          continue
        }
  
        paginationItem.push(
          <li
            className={`page-item${pageItem === data.currentPage ? ' active' : ''}`}
            key={`pagination-item-${pageItem}`}
            onClick={()=>{onChangePage(pageItem)}}
          >
            {renderItemLink(pageItem === data.currentPage, pageItem)}
          </li>,
        )
      }
  
      return paginationItem
    }
  
    return (
      <Pagination className="align-items-center">
        {renderItem(<FontAwesomeIcon icon={faAngleDoubleLeft} fixedWidth />, 1, data.currentPage === 1)}
        {renderItem(<FontAwesomeIcon icon={faAngleLeft} fixedWidth />, data.prevPage, data.currentPage === 1)}
        {renderRangeItem()}
        {renderItem(
          <FontAwesomeIcon icon={faAngleRight} fixedWidth />,
          data.nextPage,
          data.currentPage === data.lastPage,
        )}
        {renderItem(
          <FontAwesomeIcon icon={faAngleDoubleRight} fixedWidth />,
          data.lastPage,
          data.currentPage === data.lastPage,
        )}
      </Pagination>
    )
  }
  
  export default PaginationBar
  