export default function handler(req, res) {
  if (req.method === 'POST') {
    const { password } = req.body;
    if (password === 'The source of all evil No.1') {
      res.status(200).json({ success: true, message: '登入成功！' });
    } else {
      res.status(401).json({ success: false, message: '密碼錯誤！' });
    }
  } else {
    res.status(405).json({ message: '只支援 POST 方法' });
  }
}