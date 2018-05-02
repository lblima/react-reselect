export default function(state = {}, action) {
    switch(action.type){
        case 'BOOK_SELECTED': 
            return { ...state, book: action.payload };
        case 'GET_BOOKS':  
            return { books: [...action.payload] };
    }

    return state;
}