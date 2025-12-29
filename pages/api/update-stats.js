const { updateStats } = require('../../scripts/updateStats');

export default async function handler(req, res) {
  // Only allow POST requests from Vercel Cron
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Required: Check for a secret key for security
  const authHeader = req.headers.authorization;
  const expectedSecret = process.env.CRON_SECRET_KEY;

  if (!expectedSecret) {
    return res.status(500).json({ error: 'CRON_SECRET_KEY not configured' });
  }

  if (!authHeader || authHeader !== `Bearer ${expectedSecret}`) {
    return res.status(401).json({ error: 'Unauthorized - Invalid or missing CRON_SECRET_KEY' });
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
