declare module '*scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames
}

declare module '*.jpg'
declare module '*.png'
declare module '*.jpeg'
declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS__DEV: boolean;
