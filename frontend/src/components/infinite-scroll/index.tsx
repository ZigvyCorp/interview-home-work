import { Skeleton } from "antd";
import React, { useCallback, useRef } from "react";

interface Props<T = any> {
  data: T[];
  itemRenderer: (item: T) => any;
  loading?: boolean;
  hasMore?: boolean;
  loadMore?: () => any;
}

export function InfiniteScrollContainer<T = any>(props: Props<T>) {
  const observer = useRef<any>();
  const lastItemRef = useCallback(
    (node) => {
      if (props.loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && props.hasMore) {
          if (props.loadMore) props.loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [props.loading, props.hasMore]
  );

  return (
    <React.Fragment>
      {props.data.map((item, index) => {
        const Item = props.itemRenderer(item);
        return (
          <div
            key={index}
            ref={props.data.length === index + 1 ? lastItemRef : undefined}
          >
            {Item}
          </div>
        );
      })}
      {props.loading && <Skeleton active avatar title paragraph />}
    </React.Fragment>
  );
}
