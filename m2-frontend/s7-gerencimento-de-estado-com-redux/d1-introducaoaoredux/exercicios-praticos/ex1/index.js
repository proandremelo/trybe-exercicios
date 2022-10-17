const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};
const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';
const MIN_INDEX = 0;

const reducer = (state = INITIAL_STATE , action) => {
  switch(action.type){
    case NEXT_COLOR:
      return {
        colors: state.colors,
        index: state.index < (state.colors.length - 1) ? (state.index + 1) : MIN_INDEX,
      };
    case PREVIOUS_COLOR:
      return {
        colors: state.colors,
        index: state.index > MIN_INDEX ? (state.index - 1) : (state.colors.length - 1),
    };
    case RANDOM_COLOR:
      return {
        colors: [...state.colors, criarCor()],
        index: (state.colors.length - 1),
    };
    default:
      return state;
  }
};
const store = Redux.createStore(reducer);

const next = document.querySelector('#next');
const previous = document.querySelector('#previous');
const random = document.querySelector('#random');

const nextColor = () => {
  store.dispatch({ type: NEXT_COLOR });
};
const previousColor = () => {
  store.dispatch({ type: PREVIOUS_COLOR });
};
const randomColor = () => {
  store.dispatch({ type: RANDOM_COLOR });
};

next.addEventListener('click', nextColor);
previous.addEventListener('click', previousColor);
random.addEventListener('click', randomColor);

const changeColor = (state) => {
  const colorValue = document.querySelector("#value");
  const container = document.querySelector('#container');
  if(state.colors[state.index] == 'black'){
    colorValue.style.color = 'white';
  }else{
    colorValue.style.color = 'black';
  }
  colorValue.innerHTML = state.colors[state.index];
  container.style.backgroundColor = state.colors[state.index];
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
};

store.subscribe(() => {
  const state = store.getState();
  changeColor(state);
});