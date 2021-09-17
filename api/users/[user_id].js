module.exports = (req, res) => {
    const {
        query: { user_id },
      } = req;
    
      res.send({
          msg: `Hello ${user_id}!`
      });
  };