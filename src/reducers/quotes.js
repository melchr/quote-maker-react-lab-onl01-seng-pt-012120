export default (state = [], action) => {
  let idx
	let selectedQuote

  switch (action.type) {
    case 'ADD_QUOTE':
      return [ ...state, action.quote ]

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      selectedQuote = state[idx]
      selectedQuote.votes += 1

      return [...state.slice(0, idx), selectedQuote, ...state.slice(idx + 1)]

    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      selectedQuote = state[idx]
      selectedQuote.votes > 0 ? selectedQuote.votes -= 1 : selectedQuote.votes = 0

      return [...state.slice(0, idx), selectedQuote, ...state.slice(idx + 1)]

    default:
      return state;
  }

} 
