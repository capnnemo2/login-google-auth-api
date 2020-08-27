const ProtectedService = {
  getAll(db) {
    return db.from("login").select("*");
  },
};

module.exports = ProtectedService;
