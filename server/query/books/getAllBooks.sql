SELECT books.title,
       books.year,
       authors.id AS author_id,
       authors.name,
       authors.status,
       feeds.link,
       feeds.id AS id
FROM books
         JOIN authors
              ON books.author_id = authors.id
         JOIN feeds
              ON books.id = feeds.book_id;
