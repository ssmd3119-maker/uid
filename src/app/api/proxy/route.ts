import { NextRequest } from 'next/server';

// Updated cookies
const COOKIES = 'cf_clearance=gD0ogJ59zS2hFHTR4CwqHY6vA6qh3CpdQJB6S13b_cQ-1760663786-1.2.1.1-vTj9vrARatAKa8Fv724P3wLzk6H7svnVBCDJVvoPCn_JkuiEOS9J320VdsIa73nr7D2kKsY2SpTKGlhEhQRo6BohT8IWEutfHCrDAiLmj9KmXj518_6YEPy15nCa14TGJqYfyal0g8SNT9.39nKe3NSl0NzZ_HITyIYdvq3Smn1cA5k86L1aJrMSjCVkXyufAAQ6twxDNaerAHM0JvfKAMqpv4BdcuTIFnxPDd_mBfk; cf_chl_rc_ni=1; token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGYxMDQzMDViMjY3OGUxNDY2MmVhYjEiLCJ1c2VybmFtZSI6Im5leGxva3NoIiwiaXNBZG1pbiI6ZmFsc2UsImlzU3VwZXJBZG1pbiI6ZmFsc2UsImFjY291bnRFeHBpcmF0aW9uRGF0ZSI6IjIwMjUtMTEtMDVUMTQ6NDE6NTIuMTk3WiIsInN1c3BlbmRlZCI6ZmFsc2UsInNlY3VyaXR5U3RhbXAiOiJlYTI4ZmU4Y2ZkNWI0OTUzMzE1MDY3YzVjNDJiNTZlZiIsIm1heENvbnRhaW5lcnMiOjEsImNvbnRhaW5lclRpbWVMaW1pdEhvdXJzIjpudWxsLCJjb25zdW1lZENvbnRhaW5lclRpbWVTZWNvbmRzIjozNDY2MiwiaWF0IjoxNzYwNjcyNTk2LCJleHAiOjE3NjA2NzYxOTZ9.gVmK4UGRpRaweLNo08jRb1hRaLB7cPiKJ-CI5l0Mw_Y';

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get('endpoint');
  
  console.log('Proxy API called with endpoint:', endpoint);
  
  if (!endpoint) {
    return new Response(
      JSON.stringify({ error: 'Missing endpoint parameter' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    // Map endpoint to actual API URL
    let apiUrl: string;
    switch (endpoint) {
      case 'more-details':
        apiUrl = 'https://www.fflevel.pro/api/docker/more-details';
        break;
      case 'working-status':
        apiUrl = 'https://www.fflevel.pro/api/docker/working-status';
        break;
      default:
        return new Response(
          JSON.stringify({ error: 'Invalid endpoint' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }

    console.log('Calling external API:', apiUrl);
    
    // Get the body from the request
    const body = await request.text();
    console.log('Request body:', body);
    
    // Forward the request to the external API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': COOKIES,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
        'Accept': 'application/json',
        'Referer': 'https://www.fflevel.pro/user-home/dashboard',
        'Origin': 'https://www.fflevel.pro',
      },
      body: body || '{}',
    });

    console.log('External API response status:', response.status);
    
    // Check if the response is OK
    if (!response.ok) {
      console.error(`External API error: ${response.status} ${response.statusText}`);
      // Try to get error message from response
      let errorMessage = `External API error: ${response.status} ${response.statusText}`;
      try {
        const errorText = await response.text();
        console.log('External API error response:', errorText);
        errorMessage = errorText || errorMessage;
      } catch (e) {
        console.error('Error reading error response:', e);
        // Ignore error when reading error response
      }
      
      return new Response(
        JSON.stringify({ error: errorMessage }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get the response data
    let data;
    try {
      data = await response.json();
      console.log('External API response data:', JSON.stringify(data, null, 2));
    } catch (jsonError) {
      console.error('Failed to parse JSON response:', jsonError);
      const textResponse = await response.text();
      console.log('Raw response:', textResponse);
      return new Response(
        JSON.stringify({ error: 'Failed to parse JSON response', rawResponse: textResponse }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Return the response with proper headers
    return new Response(
      JSON.stringify(data),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error: any) {
    console.error('Proxy error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch data from external API', details: error.message || 'Unknown error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}