import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './config';

/**
 * Save a lead to Firestore
 * @param {Object} leadData - Lead data from the contact form
 * @returns {Promise<string>} - Document ID of the created lead
 */
export async function saveLead(leadData) {
  try {
    const leadsCollection = collection(db, 'leads');

    const lead = {
      firstName: leadData.firstName || '',
      lastName: leadData.lastName || '',
      email: leadData.email || '',
      phone: leadData.phone || '',
      projectType: leadData.projectType || '',
      message: leadData.message || '',
      createdAt: serverTimestamp(),
      status: 'new', // Status: new, contacted, converted, closed
    };

    const docRef = await addDoc(leadsCollection, lead);
    console.log('Lead saved successfully with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error saving lead to Firestore:', error);
    throw error;
  }
}
