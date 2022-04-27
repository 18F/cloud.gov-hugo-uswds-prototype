FROM klakegg/hugo:0.95.0-ext-alpine

WORKDIR /src

COPY package.json package-lock.json /src/
RUN mkdir static/
RUN npm install

ENTRYPOINT [ "hugo" ]
CMD [ "server", "--bind 0.0.0.0" ]
