export const dataCharacters = () => {
  return {
    data: wrapPromise(dataFetching()),
  };
};

const dataFetching = async (): Promise<any> => {
  return fetch("https://www.breakingbadapi.com/api/characters").then(
    (res) => res.json()
  );
};

const wrapPromise = (promise: any) => {
  let status = "pending";
  let result: any;

  let suspender = promise.then(
    (res: any) => {
      (status = "success"), (result = res);
    },
    (err: any) => {
      (status = "error"), (result = err);
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};
