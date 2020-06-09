export default (req, res) => {
  res.statusCode = 200;
  res.json({ date: new Date(), status: res.statusCode });
};
