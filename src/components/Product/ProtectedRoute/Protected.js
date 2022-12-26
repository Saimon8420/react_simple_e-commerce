import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
    const user = useSelector(state => state.auth.currentUser);
    // console.log(user.length === 0);
    if (user?.length === 0) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default Protected;