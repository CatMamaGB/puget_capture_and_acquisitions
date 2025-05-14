'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';

interface FormData {
  name: string;
  email: string;
  company?: string;
  guests?: string;
  message?: string;
}

export default function ConsultationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    guests: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/book-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Failed to book consultation');
      
      // Redirect to Calendly scheduling page
      window.location.href = data.schedulingUrl;
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof FormData
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          label="Name"
          required
          value={formData.name}
          onChange={(e) => handleInputChange(e, 'name')}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => handleInputChange(e, 'email')}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company (Optional)</Label>
        <Input
          id="company"
          value={formData.company}
          onChange={(e) => handleInputChange(e, 'company')}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="guests">Additional Guests (Optional)</Label>
        <Input
          id="guests"
          value={formData.guests}
          onChange={(e) => handleInputChange(e, 'guests')}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange(e, 'message')}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Booking...' : 'Schedule Consultation'}
      </Button>
    </form>
  );
} 