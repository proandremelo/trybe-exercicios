const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

function sendMarsTemperature(){
    return `A temperatura de Marte é: ${getMarsTemperature()} celsius`;
}

setTimeout(() => {
    console.log(sendMarsTemperature());
}, messageDelay());