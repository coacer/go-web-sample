package main

import (
	"github.com/coacer/go-web-sample/api/db"
	"github.com/coacer/go-web-sample/api/server"
)

func main() {
	db.Init()
	server.Init()
}
