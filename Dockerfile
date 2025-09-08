# Step 1: Build React app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Step 2: Serve with nginx
FROM nginx:alpine
# Copy SPA-aware nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Vite outputs to dist by default
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
