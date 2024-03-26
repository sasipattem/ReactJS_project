const fullname = user => user.firstname + ' ' + user.lastname
const user = {firstname: 'sasi', lastname: 'pattem'}
const element = <h1 className='greeting'>Hello {fullname(user)}</h1>
ReactDOM.render(element, document.getElementById('root'))
