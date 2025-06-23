import { useDispatch } from "react-redux";
import { useLoginMutation } from '../redux/services/mainApi';
import { useState } from "react";
import { setToken } from '../redux/slices/authSlice';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [login, { isLoading, error }] = useLoginMutation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ email, password }).unwrap();
            // Assuming the response returns a token field
            dispatch(setToken(response.token || 'dummy-token'));
        } catch (err) {
            console.error('Login failed', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
            </button>
            {error && <p style={{ color: 'red' }}>Login failed</p>}
        </form>
    );
};

export default LoginForm;