export function catchAsyn(fn) {
   return async function (data) {
      let response;
      try {
         response = await fn(data);
      } catch (error) {
         const err =
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message;

         throw new Error(err);
      }
      return response;
   };
}
