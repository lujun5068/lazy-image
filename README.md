
<p align="center">
  <img alt="lazyImage" src="./src/assets/loading.png" width="200">
</p>
<p align="center">
  <img src="https://img.shields.io/npm/v/@alifd/next.svg">
  <img src="https://img.shields.io/npm/dm/@alifd/next.svg">
  <a href="https://codecov.io/gh/alibaba-fusion/next"><img src="https://codecov.io/gh/alibaba-fusion/next/branch/master/graph/badge.svg?token=FSufKVDhmT"></a>
  <a href="https://travis-ci.com/alibaba-fusion/next"><img src="https://travis-ci.com/alibaba-fusion/next.svg?token=KAYresHL1UPaaLzUYyx6&branch=master"></a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
  <a href="https://github.com/lujun5068/lazy-image/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg"></a>
</p>

# react-hook-lazy-image 图片懒加载

一个应用React Hooks基于IntersectionObserver API实现的图片懒加载组件，具有如下特点：

- 简单好用，配置灵活
- 兼容主流浏览器
- 使用React Hooks实现
- 使用TypeScript



<!-- [查看示例](www.baidu.com) -->

## 安装
```jsx
// 使用yarn安装
yarn add react-hook-lazy-image

// 使用npm安装
npm install react-hook-lazy-image --save
```

## 使用
```jsx
import React from 'react';
import LazyImage from 'react-hook-lazy-image';

const list = [ // image src url ...];

const LazyLoad:React.FC<any> = () => {
  const clientHeight = window.innerHeight;

  const style = {height: 300, width: 400, border: '1px solid #000', margin: '10px'};

  return (
    <ul style={{height: `${clientHeight-100}px`, overflow: 'auto'}}>
      {
        list.map((item, i) => (
          <LazyImage style={style} src={item} key={i} />
        ))
      }
    </ul>
  )
}

export default LazyLoad;
```


## API
| 属性 | 类型 | 是否必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| src | string | 否 | - | 图片的真实src,不传默认显示占位图 |
| defaultSrc | string | 否 | LazyImage占位图 | 默认渲染的占位图src地址 |
| style | object | 否 | {  width: 300,  height: 200 } | 图片样式 |
| options | object | 否 | - | 自定义配置，通过配置可以指定图片与特定的父级元素交叉时才去加载真实图片，祥见[IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/IntersectionObserver) |



## 最后
如果觉得好用，请点个star支持一下哈~<br />
如果在使用过程中有任何问题或者建议，可以在项目中提交issue，或者通过邮件与我取得联系，我会及时处理~<br />email：lujun5068@gmail.com



