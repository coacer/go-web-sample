package server

import (
	"github.com/coacer/go-web-sample/api/controller"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Init() {
	r := router()
	r.Run()
}

func router() *gin.Engine {
	r := gin.Default()

	// CORS 対応
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"}
	r.Use(cors.New(config))

	p := r.Group("/posts")
	{
		ctrl := controller.PostController{}
		p.GET("", ctrl.Index)
		p.GET("/:id", ctrl.Show)
		p.POST("", ctrl.Create)
		p.PUT("/:id", ctrl.Update)
		p.DELETE("/:id", ctrl.Delete)
	}

	u := r.Group("/users")
	{
		ctrl := controller.UserController{}
		u.GET("", ctrl.Index)
		u.GET("/:id", ctrl.Show)
		u.POST("", ctrl.Create)
	}

	return r
}
