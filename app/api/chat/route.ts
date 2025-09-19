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
      temperature: 0.8,
      max_tokens: 150,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    return NextResponse.json(response);
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    
    // Handle quota exceeded error with fallback response
    if (error.status === 429 && error.code === 'insufficient_quota') {
      const fallbackResponse = {
        choices: [{
          message: {
            content: "I'm here to listen and support you. While I'm experiencing some technical limitations right now, I want you to know that your feelings are valid and important. Would you like to try some breathing exercises or mindfulness techniques while we work through this together?"
          }
        }]
      };
      return NextResponse.json(fallbackResponse);
    }
    
    const status = error.status || 500;
    return NextResponse.json({ error: error.message || 'Unknown error' }, { status });
  }
}
