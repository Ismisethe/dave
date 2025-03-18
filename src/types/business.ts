export interface Business {
  licenseNumber: string;
  licenseStatus: string;
  businessName: string;
  dbaTradeName: string;
  businessUniqueId: string;
  darpEnrollmentStatus: string;
  rotowEnrollmentStatus: string;
  buildingNumber: string;
  street: string;
  unitType: string;
  unit: string;
  city: string;
  state: string;
  zipCode: string;
  borough: string;
  communityBoard: string;
  councilDistrict: string;
  policePrecinct: string;
  bin: string;
  bbl: string;
  nta: string;
  censusBlock: string;
  censusTract: string;
  latitude?: number | null;
  longitude?: number | null;
  xCoordinate?: number | null;
  yCoordinate?: number | null;
}

export interface BusinessFilters {
  searchTerm?: string;
  borough?: string;
  enrollmentStatus?: 'DARP' | 'ROTOW' | 'BOTH';
  page?: number;
  limit?: number;
} 