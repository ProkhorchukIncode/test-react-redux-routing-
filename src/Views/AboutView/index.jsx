import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import {loading, noLoading} from "../../Redux/loadingSlice"

const AboutView = () => {
    const dispatch = useDispatch()
    return (
        <>
            <p>AboutView</p>
            <Link to='/home'>HomeView</Link>
            <button onClick={()=> dispatch(loading())}>Loader</button>
            <button onClick={()=> dispatch(noLoading())}>Close Loader</button>
        </>
    )
}

export default AboutView