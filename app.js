const fs = require("fs")

const quotesContent = fs.readFileSync("./quotes.json")
const quotes = JSON.parse(quotesContent)

console.log(quotes)
