import api from './axios';

const getUserApi = {
  // 글 목록 조회
  getUserInfo: () => api.post('/userInfo')
  .then(response => {
    console.log('응답 데이터:', response.data);
    return response;
  })
  .catch(error => {
    console.error('에러 발생:', error);
    throw error;
  }),
};
export default getUserApi;