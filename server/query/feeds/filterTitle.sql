SELECT *
FROM feeds
WHERE title ILIKE $1 || '%'
   OR title ILIKE '%' || $1 || '%';
