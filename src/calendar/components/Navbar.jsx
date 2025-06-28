export const Navbar = () => {
    return (
        <div className="navbar bg-transparent mb-4 px-4" data-bs-theme="light">
            <span className="navbar-brand">
                <i className="fas fa-calendar-alt text-primary me-2"></i>
                Calendar
            </span>

            <button className="btn btn-outline-danger">
                <i className="fas fa-sign-out-alt me-2"></i>
                <span>Log out</span>
            </button>
        </div>
    );
}