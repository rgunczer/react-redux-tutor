import { ADD_ITEM } from './actionTypes';

export function addItem(value) {
    return {
        type: ADD_ITEM,
        payload: value
    }
}

export function loadItems() {
    return function (dispatch, getState) {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                json.slice(1, 10).forEach(element => {
                    dispatch(addItem(element.title))
                });
            })
    }
}
