
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { password } = req.body;
    if (password === 'zaq0857') {
      res.setHeader('Set-Cookie', 'auth=true; Path=/; Max-Age=3600');
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Unauthorized' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
