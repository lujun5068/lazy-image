import React from 'react';
import { render } from 'react-dom';
// import LazyImage from '../src/index';
import LazyImage from 'react-hook-lazy-image';

const list = [
  'https://cdn.imgbin.com/1/6/10/imgbin-arctic-wolf-furry-fandom-carnivora-red-wolf-others-ZHnTC2tmQMPzs37cWQ7tPqp4R.jpg',
  'https://cdn.imgbin.com/11/3/6/imgbin-london-soldier-icon-british-soldiers-two-royal-guards-illustration-DnXRqwwC7iWRUpyfneT3dqUpc.jpg',
  'https://cdn.imgbin.com/17/18/0/imgbin-warrington-council-cheshire-east-london-borough-of-richmond-upon-thames-london-boroughs-others-hJL5XyKYPb4CjHKDUjJ1S9yWV.jpg',
  'https://cdn.imgbin.com/21/6/22/imgbin-fermanagh-and-omagh-london-borough-of-lambeth-county-fermanagh-london-boroughs-others-LCDYu4VaxCS2kxqWHeaW4wgPf.jpg',
  'https://cdn.imgbin.com/1/10/9/imgbin-london-borough-of-southwark-hayes-city-of-westminster-cities-of-london-and-westminster-geography-foreign-candidates-bwQZvxJYgVDGLtsWkkVrHgYY1.jpg',
  'https://cdn.imgbin.com/12/10/17/imgbin-london-borough-of-hammersmith-and-fulham-silhouette-dog-yoga-sySpTkfUATdQ5A4xKzprWBTbG.jpg',
  'https://cdn.imgbin.com/5/4/21/imgbin-london-borough-of-camden-hammersmith-commercial-building-facade-london-bridge-trading-bpv9mKugy0CnbgTak0Va2Wfy9.jpg',
  'https://cdn.imgbin.com/17/2/24/imgbin-london-borough-of-ealing-london-boroughs-west-london-perceval-house-others-Qtw8cdkHXF7JUW9k7mezLELAR.jpg',
  'https://cdn.imgbin.com/4/18/13/imgbin-kingston-upon-thames-royal-borough-of-kensington-and-chelsea-royal-borough-of-greenwich-london-borough-of-ealing-london-borough-of-hounslow-others-MvTGFyw0UDkbw6s6B5bWBTfZc.jpg',
  'https://cdn.imgbin.com/25/22/16/imgbin-kingston-upon-thames-coat-of-arms-surrey-county-council-law-HA2zNQcxjxmMTM0FjHL4ZrsbD.jpg',
  'https://cdn.imgbin.com/2/15/11/imgbin-county-armagh-counties-of-ireland-republic-of-ireland-coat-of-arms-of-ireland-creative-harp-fvtXjkya9NkurELWVaZndG6jL.jpg',
  'https://cdn.imgbin.com/10/9/18/imgbin-wetsuit-yulex-counties-of-ireland-parthenium-argentatum-county-donegal-surfer-AUZFTFWmktMjJPSa05ZRJfcmB.jpg',
  'https://cdn.imgbin.com/22/16/18/imgbin-counties-of-the-kingdom-of-hungary-zalaegerszeg-list-of-regions-of-hungary-town-with-county-rights-hungarian-Lzu3F4V6eSi0KDQWt53ydV9Fp.jpg',
  'https://cdn.imgbin.com/22/9/1/imgbin-fifa-online-3-need-for-speed-edge-mabinogi-vindictus-nexus-the-kingdom-of-the-winds-festivals-cy4Q8uiTF95ihz6ZBjyCN10tZ.jpg',
  'https://cdn.imgbin.com/25/8/24/imgbin-need-for-speed-shift-need-for-speed-most-wanted-shift-2-unleashed-xbox-360-need-for-speed-hot-pursuit-need-for-speed-8RjDqSUsEzgJFskmbVAR6QjWa.jpg',
  'https://cdn.imgbin.com/23/20/11/imgbin-need-for-speed-hot-pursuit-2-need-for-speed-iii-hot-pursuit-need-for-speed-most-wanted-xbox-360-need-for-speed-69VBuefWmKD6c4P2d1hC2Hv9m.jpg',
]



const LazyLoad = () => {
  const clientHeight = window.innerHeight;

  const style = {height: 300, width: 400, border: '1px solid #000', margin: '10px auto'};

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

render(<LazyLoad /> , document.getElementById('root'));