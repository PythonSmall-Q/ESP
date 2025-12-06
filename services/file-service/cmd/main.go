package main

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "ok", "service": "file-service"})
	})

	// Simple upload to local tmp folder (demo)
	r.POST("/api/v1/files/upload", func(c *gin.Context) {
		file, err := c.FormFile("file")
		if err != nil { c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()}); return }
		path := os.TempDir() + string(os.PathSeparator) + file.Filename
		if err := c.SaveUploadedFile(file, path); err != nil { c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()}); return }
		c.JSON(http.StatusCreated, gin.H{"id": file.Filename, "path": path})
	})

	port := os.Getenv("PORT")
	if port == "" { port = "4002" }
	r.Run(":" + port)
}
