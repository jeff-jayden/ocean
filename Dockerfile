# 构建 Nginx 镜像，版本根据项目需要更换
FROM nginx:1.21.3-alpine

# 复制编译后的前端代码到 Nginx 静态资源目录
COPY /dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]

