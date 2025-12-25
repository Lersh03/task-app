import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/ca2021b5-3d6a-4da5-b83a-81f00abb1860',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/auth/callback/route.ts:12',message:'exchangeCodeForSession called',data:{code},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    // This exchanges the temporary code from Google for a permanent session
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/ca2021b5-3d6a-4da5-b83a-81f00abb1860',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'app/auth/callback/route.ts:17',message:'exchangeCodeForSession result',data:{error:error?.message},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
  }

  // Once authenticated, redirect the user to the dashboard
  return NextResponse.redirect(`${requestUrl.origin}/dashboard`);
}