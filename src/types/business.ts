export interface Business {
  businessUniqueId: string;
  businessName: string;
  dbaTradeName?: string;
  buildingNumber: string;
  street: string;
  unit?: string;
  borough: string;
  zipCode: string;
  phone?: string;
  licenseNumber: string;
  licenseStatus: string;
  darpEnrollmentStatus: string;
  rotowEnrollmentStatus: string;
  communityBoard: string;
  councilDistrict: string;
  policePrecinct: string;
}

export interface BusinessFilters {
  searchTerm?: string;
  borough?: string;
  enrollmentStatus?: 'DARP' | 'ROTOW' | 'BOTH';
  page?: number;
  limit?: number;
} 