import { NextResponse } from 'next/server';
import admissionsData from '@/data/admissions.json';

// In-memory store initialized from JSON
let admissions = [...admissionsData];

export async function GET() {
  return NextResponse.json(admissions);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newApplication = {
      id: admissions.length > 0 ? Math.max(...admissions.map((a) => a.id)) + 1 : 1,
      applicantName: body.applicantName || '',
      email: body.email || '',
      phone: body.phone || '',
      course: body.course || '',
      academicScore: body.academicScore || '',
      status: 'Pending',
      appliedDate: new Date().toISOString().split('T')[0],
    };
    admissions.push(newApplication);
    return NextResponse.json(newApplication, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
