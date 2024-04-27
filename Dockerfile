FROM node:18-alpine AS build

WORKDIR /build

COPY package.json package.json

COPY yarn.lock yarn.lock

RUN yarn

# Copy the rest of the application code
COPY . .

RUN yarn build

FROM httpd:alpine

WORKDIR /var/www/html

COPY --from=build /build/build/ .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the application
CMD ["yarn", "start"]