/// <reference types="vite-plugin-svgr/client" />
declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >

  export default ReactComponent
}
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}
declare type ValueOf<T> = T[keyof T]
