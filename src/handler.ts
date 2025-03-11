import { Request, Response } from 'express';
import { generateJSON } from "@tiptap/html";
import { StarterKit } from "@tiptap/starter-kit";
import { Editor } from '@tiptap/core';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
(global as any).window = window;
(global as any).document = window.document;
(global as any).navigator = { ...window.navigator, userAgent: 'node.js' };

export const handler = (req: Request, res: Response) => {
  if (req.url === '/convert' && req.method === 'GET') {
    return convert(req, res);
  } else if (req.url === '/isEmpty' && req.method === 'GET') {
    return isEmpty(req, res);
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
};

const convert = (req: Request, res: Response) => {
  const { html } = req.body;

  if (!html) {
    res.status(400).json({ error: 'No HTML provided' });
    return;
  }

  const tiptapJSON = generateJSON(html, [StarterKit]);

  res.status(200).json({ tiptapJSON });
};

const isEmpty = (req: Request, res: Response) => {
  const { content } = req.body;

  try {
    const editor = new Editor({
      content,
      extensions: [StarterKit],
    });

    const empty = editor.isEmpty;

    editor.destroy();

    res.status(200).json({ isEmpty: empty });
  } catch (error) {
    console.error('Error checking content:', error);
    res.status(500).json({ error: 'Failed to check content' });
  }
};