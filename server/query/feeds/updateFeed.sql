UPDATE feeds
SET title = $2,
    content = $3,
    author = $4
WHERE id = $1;
