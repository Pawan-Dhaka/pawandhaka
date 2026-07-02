import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"

const page = async () => {

    const client = await clientPromise
    const db = client.db("pawan")
    const collection = db.collection("data")
    const doc = await collection.find().toArray();
   


    return (
        <>
            <h2 className='mt-30 text-center font-bold text-3xl'>Here are all Feedbaks</h2>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 w-[90vw] mx-auto mt-8 gap-4'>
                {doc.map((item,index)=>{
                    return  <div key={index} className="card flex  flex-col bg-slate-700  rounded-2xl px-5 py-3 gap-3">
                    <div className="flex justify-between bg-gray-50 p-2 -mx-2 rounded-2xl text-xl">
                        <div className=" flex items-center">
                            <img className='h-6' src="/profile.png" alt="" />
                            <h2>{item.name}</h2>
                        </div>
                        <p>{item.rating}</p>
                    </div>
                    <p className='px-2 text-white'>{item.msg}</p>
                </div>
                })}
               


            </div>
        </>
    )
}

export default page














