import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your page components
import LoginPage from './pages/login/Login';
import RegisterPage from './pages/create-account/CreateAccount';
import HomePage from './pages/homepage/Homepage';
import AdminDashboard from './pages/admin-dashboard/AdminDashboard';
import InvestorDashboard from './pages/investor-dashboard/InvestorDashboard';
import ConsumerDashboard from './pages/consumer-dashboard/ConsumerDashboard';
import ContactUs from './pages/contact-us/ContactUs';

function App() {
    return (
        <Router>
            {/* Navigation Links */}
            <nav>
                <Link to="/login">Login</Link> | 
                <Link to="/register">Register</Link> | 
                <Link to="/">Home</Link> | 
                <Link to="/admin-dashboard">Admin Dashboard</Link> | 
                <Link to="/investor-dashboard">Investor Dashboard</Link> | 
                <Link to="/consumer-dashboard">Consumer Dashboard</Link> | 
                <Link to="/contact-us">Contact Us</Link>
            </nav>

            {/* Define Routes */}
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/investor-dashboard" element={<InvestorDashboard />} />
                <Route path="/consumer-dashboard" element={<ConsumerDashboard />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </Router>
    );
}

export default App;