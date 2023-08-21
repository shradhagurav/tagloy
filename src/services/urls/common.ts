const commonController = () => {
  const getCommonUrl = (url: string) => `${url}`;

  const commonUrl = {
    tagloy: getCommonUrl(`login`),
  };

  return {
    commonUrl,
  };
};

export default commonController;
