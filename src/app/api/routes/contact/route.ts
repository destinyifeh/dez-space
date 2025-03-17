import {NextRequest, NextResponse} from 'next/server';
import {emailSender} from '../../configs/email-sender.config';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Log the parsed body to the console
    console.log(body, 'Request Body');

    await emailSender(body);

    return NextResponse.json({message: 'email sent'}, {status: 200});
  } catch (err) {
    console.log(err, 'errr22');
    return NextResponse.json({message: err}, {status: 500});
  }
}
