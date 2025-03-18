interface Business {
  id: string;
  name: string;
  description: string;
  borough: string;
  phone: string;
  address: string;
}

const businesses: Business[] = [
  {
    id: '1',
    name: 'NYC Emergency Towing',
    description: '24/7 Emergency towing service in NYC',
    borough: 'Manhattan',
    phone: '(212) 555-0123',
    address: '123 Main St, New York, NY 10001'
  },
  // Add more businesses as needed
];

export async function getBusiness(id: string): Promise<Business | undefined> {
  return businesses.find(business => business.id === id);
}

export async function getAllBusinesses(): Promise<Business[]> {
  return businesses;
} 