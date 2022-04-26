import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import data from "../../bigData";

const itemHeight = 30;

export const VirtualListScroll = () => {
  const virtualRef = useRef(null);
  const virtualContentRef = useRef(null);
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    onHandleScroll();
  }, []);

  const onHandleScroll = (e) => {
    // 获取滚动的高度
    const scrollTop = virtualRef.current.scrollTop;
    // 下拉框的高度除以每个item的高度 = 可见的item的数量
    // 每个可见 item 的高度，是 lineHeight + padding + border = itemHeight
    const visibleCount = Math.ceil(
      virtualRef.current.clientHeight / itemHeight
    );

    // 滚动的高度除以每个 item 的高度 = 可见的 item 的索引
    const start = Math.floor(scrollTop / itemHeight);
    // 结束索引 = 可见的 item 的索引 + 可见的 item 的数量
    const end = start + visibleCount;
    // 截取可见 item 的数据
    setVisibleData(data.slice(start, end));
    // 用 transform 移动下拉框的可见区域
    virtualContentRef.current.style.webkitTransform = `translate3d(0, ${scrollTop}px, 0)`;
  };

  return (
    <div>
      <div className="list-view" ref={virtualRef} onScroll={onHandleScroll}>
        <div
          className="list-view-phantom"
          style={{ height: data.length * itemHeight + "px" }}
        ></div>
        <div className="list-view-content" ref={virtualContentRef}>
          {visibleData.map((item) => (
            <div className="list-view-item" key={item.key}>
              {item.key}
              {item.value}
            </div>
          ))}
        </div>
      </div>

      <br />
      <span>data count: 100k</span>
      <br />
      <span>visible data count: 8</span>
      <br />
      <span>visible data item height: {itemHeight}</span>
    </div>
  );
};
