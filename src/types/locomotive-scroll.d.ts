declare module 'locomotive-scroll' {
  interface LocomotiveScrollOptions {
    el?: HTMLElement | null;
    smooth?: boolean;
    [key: string]: any;
  }

  class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    destroy(): void;
  }

  export default LocomotiveScroll;
} 