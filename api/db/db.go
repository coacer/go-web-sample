package db

import (
	"github.com/coacer/go-web-sample/api/model/entity"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var (
	db  *gorm.DB
	err error
)

func Init() {
	db, err = gorm.Open("mysql", "root:password@tcp(db:3306)/go-web-sample?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		panic(err)
	}

	autoMigration()
}

func GetDB() *gorm.DB {
	return db
}

func Close() {
	if err := db.Close(); err != nil {
		panic(err)
	}
}

func autoMigration() {
	db.AutoMigrate(&entity.Post{})
	db.AutoMigrate(&entity.User{})
}
