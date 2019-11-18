# LazyImage 图片懒加载
一个应用React Hooks基于IntersectionObserver API实现的图片懒加载组件，具有如下特点：

- 简单好用，配置灵活
- 兼容主流浏览器
- 适用于React框架，因为使用了React Hooks，请确保React版本高于16.8.X

<!-- [查看示例](www.baidu.com) -->

## 安装
```jsx
// 使用yarn安装
yarn add lazy-image

// 使用npm安装
npm install lazy-image --save
```

## 使用
```jsx
import React from 'react';
import LazyImage from 'lazy-image';

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
| src | string | 是 | - | 需要显示图片的真实src地址 |
| defaultSrc | string | 否 | LazyImage占位图 | 默认渲染的占位图src地址 |
| style | object | 否 | - | 图片样式 |
| options | object | 否 | - | 自定义配置，通过配置可以指定图片与特定的父级元素交叉时才去加载真实图片，祥见[IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/IntersectionObserver) |



## 最后
如果觉得好用，请点个star支持一下哈~<br />
如果在使用过程中有任何问题或者建议，可以在项目中提交issue，或者通过邮件与我取得联系，我会及时处理~<br />email：lujun5068@gmail.com



