import axios from 'axios';

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}


export const fetchCars =  async (model: string) => {
  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/cars', {
      params: { model: model },
      headers: { 'X-Api-Key': process.env.API_NINJA_KEY }
    });

    return response.data;
  } catch (error) {
    console.error('Unexpected error:', error);
  }
};