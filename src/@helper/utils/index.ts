import { connect } from "react-redux";
export interface IObjectPromise<T = any> {
  [key: string]: () => Promise<T>;
}

export interface IObject {
  [key: string]: string;
}
const promiseWhen = (promises: Promise<any>[]) => {
  return new Promise((resolve) => {
    let errors: any = [];
    let result: any = [];
    let count = 0;
    if (promises.length === 0) {
      resolve({
        errors,
        result,
      });
    } else {
      promises.forEach((promise) => {
        promise
          .then((res) => {
            result.push(res);
            count += 1;
            if (count === promises.length) {
              resolve({
                errors,
                result,
              });
            }
          })
          .catch((err) => {
            errors.push(err.message);
            count += 1;
            if (count === promises.length) {
              resolve({
                errors,
                result,
              });
            }
          });
      });
    }
  });
};
const promiseAllObject = async (promiseObj: IObjectPromise = {}) => {
  const list = [];
  for (let index = 0; index < Object.keys(promiseObj).length; index++) {
    const key = Object.keys(promiseObj)[index];
    list.push(promiseObj[key]());
  }
  const res = await Promise.all(list);
  const output = {};
  for (let index = 0; index < Object.keys(promiseObj).length; index++) {
    const key = Object.keys(promiseObj)[index];
    Object.assign(output, {
      [key]: res[index],
    });
  }
  return output;
};

function connectToRedux({
  component,
  stateProps = () => ({}),
  dispatchProps = () => ({}),
}: {
  component: any;
  stateProps?: Function;
  dispatchProps?: Function;
}) {
  const mapStateToProps = () => stateProps;

  const mapDispatchToProps = dispatchProps;

  return connect(mapStateToProps, mapDispatchToProps)(component);
}

const removeVietnameseTones = (str: string) => {
  let result = str || '';
  result = result.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  result = result.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  result = result.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  result = result.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  result = result.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  result = result.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  result = result.replace(/đ/g, 'd');
  result = result.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  result = result.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  result = result.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  result = result.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  result = result.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  result = result.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  result = result.replace(/Đ/g, 'D');
  result = result.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
  result = result.replace(/\u02C6|\u0306|\u031B/g, '');
  result = result.replace(/ + /g, ' ');
  result = result.trim();
  result = result.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ' ',
  );
  return result.toLowerCase();
};

export const Utils = {
  promiseWhen,
  promiseAllObject,
  connectToRedux,
  removeVietnameseTones
};
