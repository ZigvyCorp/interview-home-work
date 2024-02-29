"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/shallowequal";
exports.ids = ["vendor-chunks/shallowequal"];
exports.modules = {

/***/ "(ssr)/./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("//\n\nmodule.exports = function shallowEqual(objA, objB, compare, compareContext) {\n    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;\n    if (ret !== void 0) {\n        return !!ret;\n    }\n    if (objA === objB) {\n        return true;\n    }\n    if (typeof objA !== \"object\" || !objA || typeof objB !== \"object\" || !objB) {\n        return false;\n    }\n    var keysA = Object.keys(objA);\n    var keysB = Object.keys(objB);\n    if (keysA.length !== keysB.length) {\n        return false;\n    }\n    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);\n    // Test for A's keys different from B.\n    for(var idx = 0; idx < keysA.length; idx++){\n        var key = keysA[idx];\n        if (!bHasOwnProperty(key)) {\n            return false;\n        }\n        var valueA = objA[key];\n        var valueB = objB[key];\n        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;\n        if (ret === false || ret === void 0 && valueA !== valueB) {\n            return false;\n        }\n    }\n    return true;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2hhbGxvd2VxdWFsL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLEVBQUU7O0FBRUZBLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxhQUFhQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxjQUFjO0lBQ3hFLElBQUlDLE1BQU1GLFVBQVVBLFFBQVFHLElBQUksQ0FBQ0YsZ0JBQWdCSCxNQUFNQyxRQUFRLEtBQUs7SUFFcEUsSUFBSUcsUUFBUSxLQUFLLEdBQUc7UUFDbEIsT0FBTyxDQUFDLENBQUNBO0lBQ1g7SUFFQSxJQUFJSixTQUFTQyxNQUFNO1FBQ2pCLE9BQU87SUFDVDtJQUVBLElBQUksT0FBT0QsU0FBUyxZQUFZLENBQUNBLFFBQVEsT0FBT0MsU0FBUyxZQUFZLENBQUNBLE1BQU07UUFDMUUsT0FBTztJQUNUO0lBRUEsSUFBSUssUUFBUUMsT0FBT0MsSUFBSSxDQUFDUjtJQUN4QixJQUFJUyxRQUFRRixPQUFPQyxJQUFJLENBQUNQO0lBRXhCLElBQUlLLE1BQU1JLE1BQU0sS0FBS0QsTUFBTUMsTUFBTSxFQUFFO1FBQ2pDLE9BQU87SUFDVDtJQUVBLElBQUlDLGtCQUFrQkosT0FBT0ssU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ2I7SUFFM0Qsc0NBQXNDO0lBQ3RDLElBQUssSUFBSWMsTUFBTSxHQUFHQSxNQUFNVCxNQUFNSSxNQUFNLEVBQUVLLE1BQU87UUFDM0MsSUFBSUMsTUFBTVYsS0FBSyxDQUFDUyxJQUFJO1FBRXBCLElBQUksQ0FBQ0osZ0JBQWdCSyxNQUFNO1lBQ3pCLE9BQU87UUFDVDtRQUVBLElBQUlDLFNBQVNqQixJQUFJLENBQUNnQixJQUFJO1FBQ3RCLElBQUlFLFNBQVNqQixJQUFJLENBQUNlLElBQUk7UUFFdEJaLE1BQU1GLFVBQVVBLFFBQVFHLElBQUksQ0FBQ0YsZ0JBQWdCYyxRQUFRQyxRQUFRRixPQUFPLEtBQUs7UUFFekUsSUFBSVosUUFBUSxTQUFVQSxRQUFRLEtBQUssS0FBS2EsV0FBV0MsUUFBUztZQUMxRCxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3NoYWxsb3dlcXVhbC9pbmRleC5qcz83MTgxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIsIGNvbXBhcmUsIGNvbXBhcmVDb250ZXh0KSB7XG4gIHZhciByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCBvYmpBLCBvYmpCKSA6IHZvaWQgMDtcblxuICBpZiAocmV0ICE9PSB2b2lkIDApIHtcbiAgICByZXR1cm4gISFyZXQ7XG4gIH1cblxuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSBcIm9iamVjdFwiIHx8ICFvYmpBIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8ICFvYmpCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBiSGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmJpbmQob2JqQik7XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwga2V5c0EubGVuZ3RoOyBpZHgrKykge1xuICAgIHZhciBrZXkgPSBrZXlzQVtpZHhdO1xuXG4gICAgaWYgKCFiSGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZUEgPSBvYmpBW2tleV07XG4gICAgdmFyIHZhbHVlQiA9IG9iakJba2V5XTtcblxuICAgIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIHZhbHVlQSwgdmFsdWVCLCBrZXkpIDogdm9pZCAwO1xuXG4gICAgaWYgKHJldCA9PT0gZmFsc2UgfHwgKHJldCA9PT0gdm9pZCAwICYmIHZhbHVlQSAhPT0gdmFsdWVCKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2hhbGxvd0VxdWFsIiwib2JqQSIsIm9iakIiLCJjb21wYXJlIiwiY29tcGFyZUNvbnRleHQiLCJyZXQiLCJjYWxsIiwia2V5c0EiLCJPYmplY3QiLCJrZXlzIiwia2V5c0IiLCJsZW5ndGgiLCJiSGFzT3duUHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImJpbmQiLCJpZHgiLCJrZXkiLCJ2YWx1ZUEiLCJ2YWx1ZUIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/shallowequal/index.js\n");

/***/ })

};
;