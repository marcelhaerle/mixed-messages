const fs = require("fs")

const quotesContent = fs.readFileSync("./quotes.json")
const quotes = JSON.parse(quotesContent)

const selectedRandomQuote = () => {
    const rndIdx = Math.floor(Math.random() * quotes.length)
    return quotes[rndIdx]
}

console.log(selectedRandomQuote())
