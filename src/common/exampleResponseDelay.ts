export const exampleResponseDelay = (time: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
