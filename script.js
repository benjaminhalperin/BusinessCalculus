'use strict';

const businesscalculus = {
  categories: ['EmployeesTypes', 'SalaryCode', 'EngageTime', 'OfficeContent', 'Travels', 'LeasingExpense', 'Nre'],
  EmployeesTypes: ['CoreEmployee', 'Contractor1', 'Contractor2', 'Contractor3', 'Contractor4'],
  ExpenseCode: ['HourlyRate', 'MonthlyHoursKey', 'DailyRate', 'OfficeElectricity', 'OfficeMaintenance'],
  EngageTime: ['EngageDuration', 'LeasingMonths'],
  OfficeContent: ['Furniture', 'Hardware', 'Software'],
  OfficeLeasing: ['AreaSqMeter', 'LeaseFeeOneSqMeter', 'ServiceOneSqMeter', 'TaxationOneSqMeter', 'InsurancePerOneMonth', 'MonthlyDairy', 'LeasDurationMonths'],
  NonRecurringExpense: ['SpecialTestEquip', 'SpecialHardware', 'DesignDev'],
  TavelsExpense: ['Immigration', 'FlightTicketing', 'HotelAccommodation', 'DailyEconomic', 'CarHireDay'],


  /** core employees cost order of estimation FM */
  order: function (employeesIndex) {
    return [this.EmployeesTypes[employeesIndex]];
  },

  employeesEngage: function ({
    employeesIndex = 0,
    salaryPaymentsIndex = 0,
    engageTimeIndex = 0,
    address }) {
    console.log(`Employees details calculation based on the following:
                   number of: ${this.EmployeesTypes[employeesIndex]}
				   multiplied by the Core Employee ${this.ExpenseCode[salaryPaymentsIndex]} - 
                   key factor: single person annual working hours: 1800 to be calculated for:
                   duration of ${this.EngageTime[engageTimeIndex]} in project total work hours
			       ${address}`);
  },


  /** contractors cost order of estimation FM */
  order: function (contractorsIndex) {
    return [this.EmployeesTypes[employeesIndex]];
  },

  contractorsEngage: function ({
    employeesIndex1 = 1,
    employeesIndex2 = 2,
    employeesIndex3 = 3,
    salaryPaymentsIndex = 1,
    engageTimeIndex = 0,
    address }) {
    console.log(`Contractors expenses details calculation based on the following:
                  Contractor type: ${this.EmployeesTypes[employeesIndex1]}
                  multiplied by the ${this.ExpenseCode[salaryPaymentsIndex]} per the specific 1st contractor
                  which will be engaged for duration of ${this.EngageTime[engageTimeIndex]} in working months
				  plus:
                  Contractor type: ${this.EmployeesTypes[employeesIndex2]}
                  multiplied by the ${this.ExpenseCode[salaryPaymentsIndex]} per the specific 2nd contractor
                  which will be engaged for duration of ${this.EngageTime[engageTimeIndex]} in working months
                  plus:
                  Contractor type: ${this.EmployeesTypes[employeesIndex3]}
                  multiplied by the ${this.ExpenseCode[salaryPaymentsIndex]} per the specific 3rd contractor
                  which will be engaged for duration of ${this.EngageTime[engageTimeIndex]} in working months
                  ${address}`);
  },


  /** office content cost order of estimation FM */
  order: function (officeIndex) {
    return [this.OfficeContent[OfficeIndex]];
  },

  officeHolding: function ({ officeIndex1 = 0,
    officeIndex2 = 1,
    officeIndex3 = 2,

    address }) {
    console.log(`Office holding recuring expenses details calculation based on the following:
                  Office content: ${this.OfficeContent[officeIndex1]} plus ${this.OfficeContent[officeIndex2]} plus ${this.OfficeContent[officeIndex3]} 
                  which will be added to office holding expenses
                  ${address}`);
  },

  /** office  leasing and maintenance cost estimation FM */
  order: function (leaseIndex) {
    return [this.OfficeLeasing[leaseIndex]];
  },

  leasingOffice: function ({
    leaseIndex1 = 0,
    leaseIndex2 = 1,
    leaseIndex3 = 2,
    leaseIndex4 = 3,
    leaseIndex5 = 4,
    leaseIndex6 = 5,
    leaseIndex7 = 6,
    address }) {
    console.log(`Structure leasing period expense details calculation based on the following:
                    office area of: ${this.OfficeLeasing[leaseIndex1]} meters to be the key factor multiplied for the following:
                    lease monthly fee rate of ${this.OfficeLeasing[leaseIndex2]} 
                    monthly office services of ${this.OfficeLeasing[leaseIndex3]} 
                    monthly tax payments of ${this.OfficeLeasing[leaseIndex4]} 
                    monthly insurance fee rate of ${this.OfficeLeasing[leaseIndex5]} 
                    monthly supply of ${this.OfficeLeasing[leaseIndex6]} refreshments and drinks available
                    all that for duration of ${this.OfficeLeasing[leaseIndex7]} months
                    ${address}`);
  },

  /** project Non Recurring Expense cost estimation FM */
  order: function (nreIndex) {
    return [this.NonRecurringExpense[nreIndex]];
  },

  nreCost: function ({ nreIndex1 = 0,
    nreIndex2 = 1,
    nreIndex3 = 2,

    address }) {
    console.log(`Project NRE required expenses calculation based on the following:
                  Test Equipment dedicated for project needs: ${this.NonRecurringExpense[nreIndex1]} 
                  Required hardware to be implemented in facilities ${this.NonRecurringExpense[nreIndex2]} 
                  One time required development for the project ${this.NonRecurringExpense[nreIndex3]} 
                  ${address}`);
  },


  /** project Non Recurring Expense cost estimation FM */
  order: function (nreIndex) {
    return [this.NonRecurringExpense[nreIndex]];
  },

  travelsCost: function ({ travelsIndex1 = 0,
    travelsIndex2 = 1,
    travelsIndex3 = 2,
    travelsIndex4 = 3,
    travelsIndex5 = 4,

    address }) {
    console.log(`Travels required expenses calculation based on the following:
                  Visas and immigration arrangements as required: ${this.TavelsExpense[travelsIndex1]} 
                  Flights ticketing to destination ${this.TavelsExpense[travelsIndex2]} 
                  Accommodation in destination  ${this.TavelsExpense[travelsIndex3]}
                  Economic in destination ${this.TavelsExpense[travelsIndex4]} 
                  Car/transportation expense in destination  ${this.TavelsExpense[travelsIndex5]} 
                  ${address}`);
  },



};

/**********************************************************
******************** Calling Functions  *******************
**********************************************************/


/**  calling the FM of the core employees cost: */
businesscalculus.employeesEngage({
  address: 'Will be added to the business calculus - PROJECT TEAM CORE EMPLOYEES',
});

/**  calling the FM of the contractors cost: */
businesscalculus.contractorsEngage({
  address: 'The sum of ALL contractors estimates will be added to the business calculus - ENGAGED CONTRACTORS EXPENSES',
});

/**  calling the FM of the office holding expenses cost: */
businesscalculus.officeHolding({
  address: 'The sum of ALL office holding content will be added to the business calculus - OFFICE CONTENT',
});

/**  calling the FM of the office leasing expenses cost: */
businesscalculus.leasingOffice({
  address: 'The sum of ALL office lease payments will be added to the business calculus - STRUCTURE LEASING',
});

/**  calling the FM of the NRE expenses cost: */
businesscalculus.nreCost({
  address: 'The sum of ALL NRE topics will be added to the business calculus - PROJECT NRE',
});

/**  calling the FM of the NRE expenses cost: */
businesscalculus.travelsCost({
  address: 'The sum of ALL travel topics will be added to the business calculus - TRAVELS',
});



/*
const { name, openingHours, categories } = businesscalculus; // 3 vars based on "restaurant"
console.log(name, openingHours, categories);

const {
  name: businesscalculusName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(businesscalculusName, hours, tags);


/*
// Default values
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14};
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c},
 } = openingHours;
console.log(o, c);



////////////////////////////////////////////////////
// Destructaring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);*/

// place in arr elements from a category: "categories" in restaurant declaration 
/*const [first, , second] = restaurant.categories;
console.log(first, second);  // printout

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// SWITCHING VARIABLES
//const temp = main;
//main = secondary;
//secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0); // meaning arr of el.2 of starter, followed el.0 of main
console.log(starter, mainCourse);

// Nested destructing
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/