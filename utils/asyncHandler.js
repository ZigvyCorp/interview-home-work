export const asyncHandler = (fn) =>
   async function asyncUtilWrap(...args) {
      const fnReturn = fn(...args);
      const next = args[args.length - 1];
      return Promise.resolve(fnReturn).catch(next);
   };
