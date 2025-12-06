package main

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status":"ok","service":"asset-service"})
	})

	r.POST("/api/v1/assets", func(c *gin.Context) {
		var body struct { Name string `json:"name"` }
		if err := c.BindJSON(&body); err != nil || body.Name == "" { c.JSON(http.StatusBadRequest, gin.H{"error":"invalid"}); return }
		c.JSON(http.StatusCreated, gin.H{"id":"a1","name":body.Name})
	})

	port := os.Getenv("PORT"); if port == "" { port = "4004" }
	r.Run(":"+port)
}
