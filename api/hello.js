module.exports = (req, res) => {
  let msg = "hello there, how are you!!";

  // msg = "Boo!";
  res.json({
    msg,
  });
};
