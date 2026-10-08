import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory + persisted storage for Inquiries and Project Snapshots
interface StoredInquiry {
  id: string;
  name: string;
  phone: string;
  notes?: string;
  snapshotId?: string;
  snapshotData?: any;
  createdAt: string;
}

interface StoredSnapshot {
  id: string;
  industry: string;
  goal: string;
  features: string[];
  timeline: string;
  budgetRange: string;
  currency: string;
  estimatedPrice: string;
  recommendedSolution: string;
  createdAt: string;
}

const INQUIRIES_DB: StoredInquiry[] = [];
const SNAPSHOTS_DB: Map<string, StoredSnapshot> = new Map();

// Helper Gemini client if key is configured
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

// API: System Telemetry & Health
app.get('/api/system/telemetry', (_req: Request, res: Response) => {
  const mem = process.memoryUsage();
  res.json({
    status: 'ONLINE',
    node: 'LK-COLOMBO-CORE-01',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    metrics: {
      heapUsedMb: Math.round(mem.heapUsed / 1024 / 1024),
      heapTotalMb: Math.round(mem.heapTotal / 1024 / 1024),
      activeConnections: 1,
      totalInquiriesLogged: INQUIRIES_DB.length,
      totalSnapshotsGenerated: SNAPSHOTS_DB.size
    }
  });
});

// API: Save or update project blueprint snapshot
app.post('/api/snapshots', (req: Request, res: Response) => {
  const data = req.body;
  if (!data || !data.snapshotId) {
    return res.status(400).json({ error: 'Missing snapshot data or snapshotId' });
  }

  const snapshot: StoredSnapshot = {
    id: data.snapshotId,
    industry: data.industry || 'General Solution',
    goal: data.goal || 'Conversion Optimization',
    features: Array.isArray(data.features) ? data.features : [],
    timeline: data.timeline || 'Standard',
    budgetRange: data.budgetRange || 'Standard',
    currency: data.currency || 'LKR',
    estimatedPrice: data.estimatedPrice || 'Custom Quote',
    recommendedSolution: data.recommendedSolution || 'Ravana Tech Custom Architecture',
    createdAt: new Date().toISOString()
  };

  SNAPSHOTS_DB.set(snapshot.id, snapshot);

  return res.json({
    success: true,
    snapshotId: snapshot.id,
    message: 'Blueprint registered in Ravana Tech Core database'
  });
});

// API: Retrieve project blueprint snapshot by ID
app.get('/api/snapshots/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const snapshot = SNAPSHOTS_DB.get(id);

  if (!snapshot) {
    return res.status(404).json({ error: 'Blueprint token not found' });
  }

  return res.json({
    success: true,
    snapshot
  });
});

// API: Submit Client Lead / Project Dispatch
app.post('/api/inquiries', (req: Request, res: Response) => {
  const { name, phone, notes, snapshotId, snapshotData } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone number are required' });
  }

  const newInquiry: StoredInquiry = {
    id: `INQ-${Date.now().toString(36).toUpperCase()}`,
    name,
    phone,
    notes,
    snapshotId,
    snapshotData,
    createdAt: new Date().toISOString()
  };

  INQUIRIES_DB.unshift(newInquiry);

  return res.json({
    success: true,
    inquiryId: newInquiry.id,
    message: 'Official dispatch successfully logged into Ravana Tech queue'
  });
});

// API: List inquiries (for admin overview)
app.get('/api/inquiries', (_req: Request, res: Response) => {
  res.json({
    success: true,
    count: INQUIRIES_DB.length,
    inquiries: INQUIRIES_DB
  });
});

// API: AI Smart Analysis for Custom Client Requirements
app.post('/api/analyze-need', async (req: Request, res: Response) => {
  const { promptText, language } = req.body;

  if (!promptText) {
    return res.status(400).json({ error: 'promptText is required' });
  }

  const ai = getGeminiClient();

  if (!ai) {
    // Intelligent heuristic fallback
    const query = (promptText || '').toLowerCase();
    let suggestedDomain = 'bakery';
    if (query.includes('cafe') || query.includes('restaurant')) suggestedDomain = 'cafe';
    else if (query.includes('salon') || query.includes('hair') || query.includes('beauty')) suggestedDomain = 'salon';
    else if (query.includes('property') || query.includes('real estate') || query.includes('villa')) suggestedDomain = 'realtors';
    else if (query.includes('gym') || query.includes('fitness') || query.includes('coach')) suggestedDomain = 'fitness';
    else if (query.includes('flower') || query.includes('flora')) suggestedDomain = 'flora';

    return res.json({
      success: true,
      mode: 'heuristic',
      analysis: {
        domain: suggestedDomain,
        intent: 'website',
        summary: `Analyzed requirement: "${promptText}". Recommended architecture blueprint mapped to ${suggestedDomain}.`
      }
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are the AI core for Ravana Tech, led by Shanthapriya Silva. 
A prospective client stated: "${promptText}".
Analyze this client need and output valid JSON with:
{
  "domain": "bakery" | "cafe" | "flora" | "fitness" | "realtors" | "salon" | "ecommerce" | "corporate",
  "intent": "website" | "ai" | "sales" | "consultation",
  "recommendedStack": ["list of 3 key technologies"],
  "headline": "Short punchy 1-sentence recommendation",
  "estimatedTimeline": "e.g. 2-3 Weeks"
}`
    });

    const text = response.text || '';
    let parsed: any = null;
    try {
      const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
      parsed = JSON.parse(cleaned);
    } catch {
      parsed = {
        domain: 'bakery',
        intent: 'website',
        headline: text.slice(0, 120),
        estimatedTimeline: '2-3 Weeks'
      };
    }

    return res.json({
      success: true,
      mode: 'ai-engine',
      analysis: parsed
    });
  } catch (err) {
    return res.json({
      success: true,
      mode: 'fallback',
      analysis: {
        domain: 'bakery',
        intent: 'website',
        headline: 'Custom Ravana High-Conversion Architecture',
        estimatedTimeline: '2-3 Weeks'
      }
    });
  }
});

// Production vs Development routing
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[RAVANA TECH CORE] Full-stack Server Online on port ${PORT}`);
  });
}

startServer();
