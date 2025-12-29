const { updateStats } = require('../../scripts/updateStats');

export default async function handler(req, res) {
  // Only allow POST requests from Vercel Cron
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Optional: Check for a secret key for security
  const authHeader = req.headers.authorization;
  const expectedSecret = process.env.CRON_SECRET_KEY;

  if (expectedSecret && authHeader !== `Bearer ${expectedSecret}`) {
    return res.status(401).json({ error: 'Unauthorized' });
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
