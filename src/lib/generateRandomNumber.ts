type GenerateRandomNumberProps = (min: number, max: number) => number;

export const generateRandomNumber: GenerateRandomNumberProps = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
};
