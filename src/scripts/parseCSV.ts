import { parse } from 'csv-parse';
import * as fs from 'fs';
import * as path from 'path';
import { Business } from '../types/business';

const csvFilePath = path.join(process.cwd(), 'DARP-ROTOW_Enrollment_Status_of_Active_Tow_Truck_Companies.csv');
const outputPath = path.join(process.cwd(), 'public', 'data', 'businesses.json');

// Ensure the output directory exists
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const businesses: Business[] = [];

fs.createReadStream(csvFilePath)
  .pipe(parse({
    columns: true,
    skip_empty_lines: true,
    trim: true
  }))
  .on('data', (row: any) => {
    const business: Business = {
      licenseNumber: row['License Number'],
      licenseStatus: row['License Status'],
      businessName: row['Business Name'],
      dbaTradeName: row['DBA/Trade Name'],
      businessUniqueId: row['Business Unique ID'],
      darpEnrollmentStatus: row['DARP Enrollment Status'],
      rotowEnrollmentStatus: row['ROTOW Enrollment Status'],
      buildingNumber: row['Building Number'],
      street: row['Street'],
      unitType: row['Unit Type'],
      unit: row['Unit'],
      city: row['City'],
      state: row['State'],
      zipCode: row['ZIP Code'],
      borough: row['Borough'],
      communityBoard: row['Community Board'],
      councilDistrict: row['Council District'],
      policePrecinct: row['Police Precinct'],
      bin: row['BIN'],
      bbl: row['BBL'],
      nta: row['NTA'],
      censusBlock: row['Census Block (2010)'],
      censusTract: row['Census Tract (2010)'],
      latitude: parseFloat(row['Latitude']),
      longitude: parseFloat(row['Longitude']),
      xCoordinate: parseFloat(row['X_Coordinate']),
      yCoordinate: parseFloat(row['Y_Coordinate'])
    };
    businesses.push(business);
  })
  .on('end', () => {
    // Write the parsed data to a JSON file
    fs.writeFileSync(outputPath, JSON.stringify(businesses, null, 2));
    console.log(`Successfully processed ${businesses.length} businesses`);
  })
  .on('error', (error) => {
    console.error('Error processing CSV:', error);
  }); 