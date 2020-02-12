package service

import (
	"github.com/coacer/go-web-sample/api/db"
	"github.com/coacer/go-web-sample/api/model/entity"
	"github.com/gin-gonic/gin"
)

type Service struct{}

type Post entity.Post

func (s Service) GetAll() ([]Post, error) {
	db := db.GetDB()
	var p []Post

	if err := db.find(&p).Error; err != nil {
		return nil, err
	}

	return p, nil
}

func (s Service) CreateModel(c *gin.Context) (Post, error) {
	db := db.GetDB()
	var p Post

	if err := c.BindJSON(&p); err != nil {
		return p, err
	}

	if err := db.Create(&p).Error; err != nil {
		return p, err
	}

	return p, nil
}

func (s Service) GetById(id string) (Post, error) {
	db := db.GetDB()
	var p Post

	if err := db.Where("id = ?", id).First(&p).Error; err != nil {
		return p, err
	}

	return p, nil
}

func (s Service) UpdateByID(id string, c *gin.Context) (Post, error) {
	db := db.GetDB()
	var p Post

	if err := db.Where("id = ?", id).First(&p).Error; err != nil {
		return p, err
	}

	if err := c.BindJSON(&p); err != nil {
		return p, err
	}

	return p, nil
}

func (s Service) DeleteByID(id string) error {
	db := db.GetDB()
	var p Post

	if err := db.Where("id = ?", id).Delete(&p).Error; err != nil {
		return p, err
	}

	return nil
}
