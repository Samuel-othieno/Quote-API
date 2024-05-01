import App from "./index.js"
const PORT = 5000;

App.listen(PORT, (req, res) => {
    console.log(`Server running on http://localhost:${PORT}`)
})