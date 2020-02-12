package server

import (
	"github.com/coacer/go-web-sample/api/controller"
	"github.com/gin-gonic/gin"
)

func router() *gin.Engine {
	r := gin.Default()

	p := r.Group("/posts")
	{
		ctrl := controller.Controller{}
		p.GET("", ctrl.Index)
		p.GET("/:id", ctrl.Show)
		p.POST("", ctrl.Create)
		p.PUT("/:id", ctrl.Update)
		p.DELETE("/:id", ctrl.Delete)
	}

	return r
}
