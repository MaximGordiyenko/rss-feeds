SELECT companies.name,companies.state, companies.updated_at - companies.created_at AS time_diff
FROM companies
         JOIN users ON companies.id = users.company_id
WHERE companies.state = 'CA';
