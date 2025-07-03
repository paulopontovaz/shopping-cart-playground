export const getUpdateProperties = <T>(
  originalProps: Partial<T>,
  updatedProps: Partial<T>,
) => {
  const diffObj: Partial<T> = {};
  for (const key in updatedProps) {
    if (
      // biome-ignore lint/suspicious/noDoubleEquals: I am also checking for 'null'
      updatedProps[key] != undefined &&
      updatedProps[key] !== originalProps[key]
    ) {
      diffObj[key] = updatedProps[key];
    }
  }

  return diffObj;
};
