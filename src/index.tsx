import React, {useEffect, useRef} from 'react';

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
  options?: IntersectionObserver
}

const defaultUrl = require('./assets/loading.png');

const LazyImage:React.FC<LazyImageProps> = ({src, style, defaultSrc= defaultUrl, options={}}) => {
  const imgRef = useRef(null);

  const setDefaultSrc = () => {
    imgRef.current.src = defaultSrc;
  }

  const proxyImage = () => {
    const img = new Image();
    img.onload = () => {
      imgRef.current.src = src;
    }
    return {
      setSrc() {
        img.src = src;
      }
    }
  }

  
  useEffect(() => {
    setDefaultSrc(); 

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(item => {
        if (item.isIntersecting) {
          proxyImage().setSrc();
          observer.unobserve(item.target);
        }
      })
    }, {...options})

    observer.observe(imgRef.current);
    
    return () => {
      observer.unobserve(imgRef.current);
    }

  }, [])

  return (
    <div style={style}>
      <img ref={imgRef} src="" alt="" style={{width: '100%', height: '100%'}}/>
    </div>
  )
}

export default LazyImage;