SELECT users.id, users.email, users.role_id, roles.type FROM users
JOIN roles ON users.role_id = roles.id;
