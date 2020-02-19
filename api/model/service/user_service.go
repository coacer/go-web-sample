package service

import (
	"github.com/coacer/go-web-sample/api/db"
	"github.com/coacer/go-web-sample/api/model/entity"
	"github.com/gin-gonic/gin"
)

type UserService struct{}

type User entity.User

func (s UserService) GetAll() ([]User, error) {
	db := db.GetDB()
	var u []User

	if err := db.Find(&u).Error; err != nil {
		return nil, err
	}

	return u, nil
}

func (s UserService) CreateModel(c *gin.Context) (User, error) {
	db := db.GetDB()
	var u User

	if err := c.BindJSON(&u); err != nil {
		return u, err
	}

	if err := db.Create(&u).Error; err != nil {
		return u, err
	}

	return u, nil
}

func (s UserService) GetByUid(uid string) (User, error) {
	db := db.GetDB()
	var u User

	if err := db.Where("uid = ?", uid).First(&u).Error; err != nil {
		return u, err
	}

	return u, nil
}
