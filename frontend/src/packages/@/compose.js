import React from 'react';

export default function compose(...props) {
  return (Com) => {
    let HocCom = Com;
    const memo = (C) => {
      const NC = React.memo(C);
      NC.rootName = Com.name;
      return NC;
    };
    props.forEach((hocFunc) => {
      HocCom = hocFunc(memo(HocCom));
    });
    return memo(HocCom);
  };
}
