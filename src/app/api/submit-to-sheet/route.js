import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()
    
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    // Prepare the values to be inserted
    const values = [
      [
        body.name,
        body.phone,
        body.email,
        body.serviceType,
        body.serviceType === 'Other' ? body.otherService : '',
        body.buildingType,
        body.height,
        body.width,
        body.length,
        body.availabilityDate,
        body.referralSource,
      ],
    ]

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A1:K1', // Updated range to include all fields
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    })

    return NextResponse.json({ result: response.data })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

