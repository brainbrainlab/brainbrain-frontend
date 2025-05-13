declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  export const ReactComponent: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  const src: string;
  export default src;
}

declare module '*.svg?component' {
  const SVGComponent: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export default SVGComponent;
}
