'use client';

import { useState } from 'react';
import { clinic } from './clinic';

export default function ContactTools() {
  const [status, setStatus] = useState('');
  async function shareClinic() {
    const text = `${clinic.name}\n${clinic.phone}\n${clinic.address}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: clinic.name, text, url: clinic.mapURL });
        setStatus('Clinic details shared.');
      } else {
        await navigator.clipboard.writeText(`${text}\n${clinic.mapURL}`);
        setStatus('Clinic details copied. Paste them into a message to share.');
      }
    } catch (error) {
      if (error.name !== 'AbortError') setStatus(`${text}\n${clinic.mapURL}`);
    }
  }
  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(`${clinic.name}\n${clinic.address}\n${clinic.mapURL}`);
      setStatus('Address copied. You can paste it into your message or maps app.');
    } catch {
      setStatus(`Copy this address: ${clinic.address}`);
    }
  }
  function saveContact() {
    const escape = value => value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
    const card = ['BEGIN:VCARD', 'VERSION:3.0', `FN:${escape(clinic.name)}`, `ORG:${escape(clinic.name)}`, `TEL;TYPE=WORK,VOICE:${clinic.telephone.slice(4)}`, `NOTE:${escape(clinic.address)}`, `URL:${clinic.mapURL}`, 'END:VCARD', ''].join('\r\n');
    const url = URL.createObjectURL(new Blob([card], { type: 'text/vcard;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'hm-dental-care.vcf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus('Contact card downloaded. Open it to save the clinic to your contacts.');
  }
  return <div className="contact-tools"><div className="contact-tool-actions"><button type="button" onClick={saveContact}>Save contact <span aria-hidden="true">↓</span></button><button type="button" onClick={copyAddress}>Copy address</button><button type="button" onClick={shareClinic}>Share clinic ↗</button></div><p role="status" aria-live="polite">{status}</p></div>;
}
