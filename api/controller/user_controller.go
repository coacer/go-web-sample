package controller

import (
	"fmt"

	"github.com/coacer/go-web-sample/api/model/service"
	"github.com/gin-gonic/gin"
)

type UserController struct{}

func (pc UserController) Index(c *gin.Context) {
	var s service.UserService
	u, err := s.GetAll()

	if err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.JSON(200, u)
	}
}

func (pc UserController) Create(c *gin.Context) {
	var s service.UserService
	u, err := s.CreateModel(c)

	if err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.JSON(201, u)
	}
}

func (pc UserController) Show(c *gin.Context) {
	uid := c.Params.ByName("uid")
	var s service.UserService
	u, err := s.GetByUid(uid)

	if err != nil {
		c.AbortWithStatus(404)
		fmt.Println(err)
	} else {
		c.JSON(200, u)
	}
}
