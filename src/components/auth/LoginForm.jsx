import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

// import { authApi } from '../../services/api/authApi';
// import { useSetRecoilState } from 'recoil';
// import { authState } from '../../recoil/atoms/authState';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const result = await login(formData);
    if (result.success) {
      navigate('/'); // 로그인 성공 후 메인 페이지로 이동
    } else {
      setError(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="space-y-2">
        <div>
          <label htmlFor="email" className="sr-only">이메일</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="appearance-none rounded-none relative block w-full 
            px-5 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 
            border-2 rounded-t-md sm:text-sm text-sm
            focus:outline-none focus:ring-indigo-500 focus:border-my-blue-4 focus:z-10 "
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="appearance-none rounded-none relative block w-full 
            px-5 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 
            border-2 rounded-b-md sm:text-sm text-sm
            focus:outline-none focus:ring-indigo-500 focus:border-my-blue-4 focus:z-10 "
            placeholder="Password"
          />
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-sm text-center">
          {error}
        </div>
      )}

      <div>
        <button
          type="submit"
          className="
          group relative w-full flex justify-center 
          py-2 px-4 border border-transparent text-sm font-medium 
          rounded-md text-white bg-my-blue-1 hover:bg-hmy-blue-1
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Log in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;