import api from "./axios";

export const authApi = {
  // 로그인
  login: async (credentials) => {
    // console.log("login inner 01");

    try {
      // console.log("로그인 test1");
      console.log(credentials); // {email: 'namgi@ssafy.com', password: '1234'} 잘들어있음

      const response = await api.post("/login", credentials);
      console.log("로그인 test2");
      console.log(response);

      if (response.data && response.data.accessToken) {
        console.log(" acc");

        localStorage.setItem("accessToken", response.data.accessToken);
        return response.data;
      }
      throw new Error("Invalid response format");
    } catch (error) {
      console.error("Login error:", error.response || error);
      throw error;
    }
  },
  logout: async () => {
    try {
      await api.post("/logout");
      localStorage.removeItem("accessToken");
    } catch (error) {
      console.error("Logout failed:", error);
      localStorage.removeItem("accessToken"); // 에러가 나도 로컬 스토리지는 클리어
      throw error;
    }
  },
  join: async (email, password, name, nickname, profilePicture = null) => {
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("name", name);
      formData.append("nickname", nickname);

      if (profilePicture) {
        formData.append("profilePicture", profilePicture);
      } else {
        formData.append("profilePicture", new Blob([]));
      }

      const response = await api.post("/join", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      console.error("Join error:", {
        message: error.message,
        response: error.response,
        data: error.response?.data,
      });
      throw new Error(
        error.response?.data?.message || "회원가입 처리 중 오류가 발생했습니다."
      );
    }
  },
};

export const socialLogin = (provider) => {
  window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`;
};