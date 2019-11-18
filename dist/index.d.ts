import React from 'react';
interface LazyImageProps {
    /**
     * 图片的真实src
     */
    src: string;
    /**
     * 默认的占位图片，可以自己传，默认使用lazyImage的占位图
     */
    defaultSrc?: string;
    /**
     * 图片样式
     */
    style?: React.CSSProperties;
    /**
     * 自定义配置项
     */
    options?: IntersectionObserver;
}
declare const LazyImage: React.FC<LazyImageProps>;
export default LazyImage;
