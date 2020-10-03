package main

import (
	"fmt"

	"github.com/k0kubun/pp"
)

var gitCommit = ""
var version = ""

func main() {
	pp.Println("github-actions-sandbox")
	fmt.Printf("gitCommit: %s\n", gitCommit)
	fmt.Printf("version:   %s\n", version)
	fmt.Println("Test")
}
