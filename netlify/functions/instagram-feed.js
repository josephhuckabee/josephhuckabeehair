const INSTAGRAM_MEDIA_URL = 'https://graph.instagram.com/me/media';
const FIELDS = [
  'id',
  'caption',
  'media_type',
  'media_url',
  'permalink',
  'thumbnail_url',
  'timestamp'
].join(',');

exports.handler = async () => {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300'
      },
      body: JSON.stringify({ items: [] })
    };
  }

  const url = new URL(INSTAGRAM_MEDIA_URL);
  url.searchParams.set('fields', FIELDS);
  url.searchParams.set('limit', '12');
  url.searchParams.set('access_token', accessToken);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Instagram API returned ${response.status}`);
    }

    const data = await response.json();
    const items = (data.data || [])
      .filter((item) => item.permalink && (item.media_url || item.thumbnail_url))
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, 6);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=900, stale-while-revalidate=3600'
      },
      body: JSON.stringify({ items })
    };
  } catch (error) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300'
      },
      body: JSON.stringify({ items: [], error: 'Instagram feed unavailable' })
    };
  }
};
