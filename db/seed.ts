import { db, Author, Comment } from "astro:db";
import rDB from "."

export default async function () {
	await rDB.execute('CREATE TABLE IF NOT EXISTS author (id INTEGER PRIMARY KEY, name TEXT);')
	await rDB.execute('CREATE TABLE IF NOT EXISTS comment (id INTEGER PRIMARY KEY, authorId INTEGER, body TEXT);')
	/// insert data

	// await rDB.execute('INSERT INTO author (name) VALUES ("Kasim");')
	// await rDB.execute('INSERT INTO author (name) VALUES ("Mina");')
	// await rDB.execute('INSERT INTO comment (authorId, body) VALUES (1, "Hope you like Astro DB!");')
	// await rDB.execute('INSERT INTO comment (authorId, body) VALUES (1, "Enjoy!");')

    const userInsert = await db.insert(Author).values([
        { name: Math.random().toString(36).substring(7) },
    ]).returning();
	console.log('[ USER INSERT ]')
	console.log(userInsert)

    const commentInsert = await db.insert(Comment).values([
        { authorId: 1, body: 'Hope you like Astro DB!' },
        { authorId: 1, body: 'Enjoy!' },
    ]);

	console.log('[ COMMENT INSERT ]')
	console.log(commentInsert)

	const data = await db.select().from(Author) //.leftJoin(Comment, eq(Author.id, Comment.authorId))
	console.log('[ RESULT ]')
	console.log(data)
}
