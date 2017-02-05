const actress = {
	person: '饭岛爱'
}

const todos = (state = actress, action) => {
	switch (action.type) {
		case 'FUCK_YOU':
			{
				alert('You\'re fucking ' + actress.person)
				return state
			}
		case 'CATCH_YOU':
			{
				actress.person = action.person
				return state
			}
		default:
			return state
	}
}

export { actress }
export default todos
