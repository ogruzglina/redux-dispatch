let state;// = {count: 0} // add this as a default value to changeState arguments
let action = {type: 'INCREASE_COUNT'}

function changeState(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function render() {
  document.body.textContent = state.count;
}

function dispatch(action) {
  state = changeState(state, action);
  console.log('dispatch',state);
  render();
}
dispatch({ type: "@@INIT" }); //will initialize state and show 0 in the page

//or run in browser console dispatch({type: 'INCREASE_COUNT'})
// or uncomment this - dispatch(action); but in this case you won't see 0


