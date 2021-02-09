import {useSelector} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'

function PrivateRouter({children}) {
    const user = useSelector(state => state.auth)
    return (

        <Route>
            {user.isLogged ? children : <Redirect to='/auth'/>}
        </Route>
    );
}

export default PrivateRouter;
