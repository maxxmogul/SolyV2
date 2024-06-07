// api/handleScoreboard.js
function handleScoreboard(req, res) {
    const { name, score } = req.body;
    console.log(`Name: ${name}, Score: ${score}`);
    // Add any additional logic or operations here
    res.status(200).json({ message: 'Scoreboard data received' });
  }
  
  module.exports = handleScoreboard;