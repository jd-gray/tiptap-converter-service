import { Request, Response } from 'express';
import { generateJSON } from "@tiptap/html";
import { StarterKit } from "@tiptap/starter-kit";

export const convert = (req: Request, res: Response) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  // Parse the HTML from the request body
  const { html } = req.body;

  if (!html) {
    res.status(400).json({ error: 'No HTML provided' });
    return;
  }

  const tiptapJSON = generateJSON(html, [StarterKit]);

  res.status(200).json({ tiptapJSON });
};
