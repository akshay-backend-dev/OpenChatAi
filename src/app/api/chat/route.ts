import { NextResponse } from "next/server";


export async function POST(
  request: Request
) {

  try {

    const body = await request.json();


    const userMessage = body.message;


    if (!userMessage) {

      return NextResponse.json(
        {
          error: "Message is required"
        },
        {
          status: 400
        }
      );

    }



    return NextResponse.json({

      message: {

        id: crypto.randomUUID(),

        role: "assistant",

        content:
          `You said: ${userMessage}`,

        createdAt: new Date(),

      }

    });


  } catch (error) {


    console.error(error);


    return NextResponse.json(
      {
        error: "Internal server error"
      },
      {
        status: 500
      }
    );


  }

}