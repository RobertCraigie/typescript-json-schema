export function getWeather(props: { location: string; unit: 'fahrenheit' | 'celsius'; pretty: boolean }) {
  console.log(props);
  return 'The weather is foo';
}

