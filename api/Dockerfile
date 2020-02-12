FROM golang:1.13.0-alpine

ENV GO111MODULE=on
WORKDIR $GOPATH/src/github.com/coacer/go-web-sample/api

COPY . .
COPY go.mod go.sum ./
RUN go mod download
