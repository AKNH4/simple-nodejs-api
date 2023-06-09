module.exports = class UserResponse {
  constructor(id, email, created_at) {
    this.id = id;
    this.email = email;
    this.created_at = created_at;
  }

  id;
  email;
  created_at;
};
