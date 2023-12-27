const express = require('express') 
const app = express();

// make public directory static
app.use(express.static('public'))

// setting port 5000
const PORT = process.env.PORT || 5000;
// setting app to listen on port 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => {
    // test code to send
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
}); 

