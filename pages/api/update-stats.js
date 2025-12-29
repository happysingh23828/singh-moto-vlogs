const { updateStats } = require('../../scripts/updateStats');

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if this is a Vercel cron job (internal call)
  const userAgent = req.headers['user-agent'];
  const isVercelCron = userAgent && userAgent.includes('vercel-cron');

  // For external requests, require authentication
  if (!isVercelCron) {
    const authHeader = req.headers.authorization;
    const expectedSecret = process.env.CRON_SECRET_KEY;

    if (!expectedSecret) {
      return res.status(500).json({ error: 'CRON_SECRET_KEY not configured' });
    }

    if (!authHeader || authHeader !== `Bearer ${expectedSecret}`) {
      return res.status(401).json({ error: 'Unauthorized - Invalid or missing CRON_SECRET_KEY' });
    }
  }

  try {
    console.log('🔄 Cron job triggered: Updating stats...');

    await updateStats();

    res.status(200).json({
      success: true,
      message: 'Stats updated successfully',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Cron job error:', error);
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
}
