const ProtectedRoute = ({ element: Component, ...props }) => {
    return (
        props.loggedIn ? <Component {...props} /> : <Navigate to="/sign-in" replace />
    )
}
export default ProtectedRoute;