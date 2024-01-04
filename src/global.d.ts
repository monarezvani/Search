declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}
declare module '*.png' {
    const value: any;
    export = value;
}
declare module '*.svg' {
    const value: any;
    export = value;
}