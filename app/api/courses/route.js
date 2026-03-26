import { NextResponse } from 'next/server';
import coursesData from '@/data/courses.json';

// In-memory store initialized from JSON
let courses = [...coursesData];

export async function GET() {
  return NextResponse.json(courses);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newCourse = {
      id: courses.length > 0 ? Math.max(...courses.map((c) => c.id)) + 1 : 1,
      name: body.name || '',
      duration: body.duration || '',
      intake: body.intake || 0,
      eligibility: body.eligibility || '',
      description: body.description || '',
      fee: body.fee || '',
      category: body.category || 'Undergraduate',
    };
    courses.push(newCourse);
    return NextResponse.json(newCourse, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
