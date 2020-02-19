package service

import (
	"fmt"

	"github.com/coacer/go-web-sample/api/db"
	"github.com/coacer/go-web-sample/api/model/entity"
	"github.com/gin-gonic/gin"
)

type PostService struct{}

type Post entity.Post

func (s PostService) GetAll() ([]Post, error) {
	db := db.GetDB()
	var p []Post

	if err := db.Find(&p).Error; err != nil {
		return nil, err
	}

	return p, nil
}

func (s PostService) CreateModel(c *gin.Context) (Post, error) {
	db := db.GetDB()
	var p Post

	if err := c.BindJSON(&p); err != nil {
		return p, err
	}
	fmt.Println("-------", p.Title)

	if err := db.Create(&p).Error; err != nil {
		return p, err
	}

	return p, nil
}

func (s PostService) GetByID(id string) (Post, error) {
	db := db.GetDB()
	var p Post

	if err := db.Where("id = ?", id).First(&p).Error; err != nil {
		return p, err
	}

	return p, nil
}

func (s PostService) UpdateByID(id string, c *gin.Context) (Post, error) {
	db := db.GetDB()
	var p Post

	if err := db.Where("id = ?", id).First(&p).Error; err != nil {
		return p, err
	}

	if err := c.BindJSON(&p); err != nil {
		return p, err
	}

	db.Save(&p)

	return p, nil
}

func (s PostService) DeleteByID(id string) error {
	db := db.GetDB()
	var p Post

	if err := db.Where("id = ?", id).Delete(&p).Error; err != nil {
		return err
	}

	return nil
}
