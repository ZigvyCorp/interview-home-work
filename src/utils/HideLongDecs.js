export const hideLongDesc = (desc, lengthLimit) => {
  let lengthDesc = desc.length;

  if (lengthDesc > lengthLimit) {
    return desc.slice(0, lengthLimit) + "...";
  } else {
    return desc;
  }
};
