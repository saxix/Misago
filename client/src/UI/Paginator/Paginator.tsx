import React from "react"
import Icon from "../Icon"
import { IPaginatorProps } from "./Paginator.types"
import PaginatorButton from "./PaginatorButton"
import PaginatorDropdown from "./PaginatorDropdown"
import getPaginatorPagesList from "./getPaginatorPagesList"

const Paginator: React.FC<IPaginatorProps> = ({ page, pages, url }) => (
  <div className="paginator">
    <PaginatorButton
      className="btn-paginator-start"
      page={page > 1 && 1}
      url={url}
    >
      <Icon icon="angle-double-left" solid fixedWidth />
    </PaginatorButton>
    <PaginatorButton
      className="btn-paginator-prev"
      page={page > 1 && page - 1}
      url={url}
    >
      <Icon icon="angle-left" solid fixedWidth />
    </PaginatorButton>
    {getPaginatorPagesList(page, pages).map((i, key) =>
      i ? (
        <PaginatorButton
          className="btn-paginator-page"
          isActive={page === i}
          key={key}
          page={i}
          url={url}
        >
          {i}
        </PaginatorButton>
      ) : (
        <PaginatorButton className="btn-paginator-ellipsis" key={key}>
          ...
        </PaginatorButton>
      )
    )}
    <PaginatorDropdown page={page} pages={pages} url={url} compact />
    <PaginatorButton
      className="btn-paginator-next"
      page={page < pages && page + 1}
      url={url}
    >
      <Icon icon="angle-right" solid fixedWidth />
    </PaginatorButton>
    <PaginatorButton
      className="btn-paginator-last"
      page={page < pages && pages}
      url={url}
    >
      <Icon icon="angle-double-right" solid fixedWidth />
    </PaginatorButton>
    <PaginatorDropdown page={page} pages={pages} url={url} />
  </div>
)

export default React.memo(Paginator)
