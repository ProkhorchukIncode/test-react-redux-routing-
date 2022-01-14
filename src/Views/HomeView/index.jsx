import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import {loading, noLoading} from "../../Redux/loadingSlice"

const HomeView = () => {
    const dispatch = useDispatch()

    return (
        <>
            <p>HomeView</p>
            <Link to='/about'>AboutView</Link>
            <button onClick={()=> dispatch(loading())}>Loader</button>
            <button onClick={()=> dispatch(noLoading())}>Close Loader</button>
        </>
    )
}

export default HomeView