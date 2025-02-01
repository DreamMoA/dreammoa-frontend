# 1단계: Node.js 기반 이미지 사용
FROM node:22.13.0-alpine AS build

# 리액트 애플리케이션 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 파일 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 현재 디렉토리의 모든 파일을 도커 컨테이너의 작업 디렉토리에 복사
COPY . .

# 리액트 애플리케이션 빌드
RUN npm run build

RUN ls -l /app/dist
# 2단계: Nginx를 사용해 빌드된 파일을 서빙
FROM nginx:alpine

# 이전 빌드 단계에서 빌드한 결과물을 /usr/share/nginx/html 으로 복사한다.
COPY --from=build /app/dist /usr/share/nginx/html

# 기본 nginx 설정 파일을 삭제한다. (custom 설정과 충돌 방지)
RUN rm /etc/nginx/nginx.conf

# custom 설정파일을 컨테이너 내부로 복사한다.
COPY nginx.conf /etc/nginx/nginx.conf

# 포트 80을 외부로 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
