import clientPromise from "@/lib/mongodb"

export async function POST(req) {
const body = await req.json()
const client = await clientPromise
const db = client.db("pawan")
const collection = db.collection("data")


 await collection.insertOne({
            name: body.name,
            email: body.email,
            rating: body.rating,
            msg: body.msg
        })

  return Response.json({success: true , error:false ,message: 'Your feedback has been saved.'})

}