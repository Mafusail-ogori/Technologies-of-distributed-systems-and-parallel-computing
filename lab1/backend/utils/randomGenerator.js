const generator = (amount) => {
  const randomArray = Array.from({ length: amount }, () =>
    Math.floor(Math.random() * 1000)
  );
  return randomArray;
};

export default generator;
