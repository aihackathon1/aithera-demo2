import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY 
});

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    
    if (!Array.isArray(messages)) {
      return NextResponse.json({ error: 'messages must be an array' }, { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      temperature: 0.7,
    });

    return NextResponse.json(response);
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    const status = error.status || 500;
    return NextResponse.json({ error: error.message || 'Unknown error' }, { status });
  }
}
