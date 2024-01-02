import { json } from '@sveltejs/kit';
// import * as database from '$lib/server/database.js';
// import db from "$lib/server/database.js"

export function GET() {
	const number = Math.floor(Math.random() * 6) + 1;
	return json(number);
}

export async function POST({ request, cookies }) {
	const { method } = await request.json();
	// const userid = cookies.get('userid');
    console.log(method)
	// let NuriID = '4127300000';
	// const { id } = await database.createTodo( userid, description );
	// await database.createTodo( userid, description );
	// database.createTodo( userid, description );
	// const member = await db.collection('IndexDongHo').find({'NuriID': NuriID}).toArray()
	// console.log(member.length);
	
    return json([])
	// return json({ id }, { status: 201 });
}

// export async function getMemberList (){
//     const member = await db.collection('cars').find().toArray()
//     console.log(member);
//     return member;
// }

