FROM klakegg/hugo:0.95.0-ext-alpine

WORKDIR /src

COPY package.json yarn.lock /src/
RUN mkdir static/
RUN yarn install

ENTRYPOINT [ "hugo" ]
CMD [ "server", "--bind 0.0.0.0" ]
