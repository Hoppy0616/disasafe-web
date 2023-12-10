import type { NextApiRequest, NextApiResponse } from 'next';
const { cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../../firebase-test-serviceAccount.json');
const admin = require('firebase-admin');
import { Timestamp } from 'firebase-admin/firestore'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const COLLECTION_NAME = 'posts';
    if (admin.apps.length === 0) {
        admin.initializeApp({
            credential: cert(serviceAccount),
        });
    }
    const db = getFirestore();

    if (req.method === 'POST') {
        const docRef = db.collection(COLLECTION_NAME).doc();
        const insertData = {
            body: 'test',
            category: '1',
            createdAt: Timestamp.now(),
        };
        docRef.set(insertData);
    }
    res.status(200);
}