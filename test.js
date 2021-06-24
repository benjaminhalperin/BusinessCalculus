describe("costEstimateConsiderations", function() {
  it("returns Employee payment factors for estimate", function() {
    let salaries = {
		"Number of Core Employees": 5,
		"CoreEmployee Work Hour": 50,
		"Hours per Month": 200,
		"Employment duration in months": 36
    };

    //assert.equal( topSalary(salaries), "Pete" );
  });
  
  
   it("returns Contractors Engagement Expenses for estimate", function() {
   let contractors = {
		"Number of Contractors": 5,
		"Contractor Work Hour Value": 20,
		"Hours per Month": 100,
		"Employment duration in months": 12
    };

    //assert.equal( topSalary(salaries), "Pete" );
  });
  
 
    it("returns Office Content purchase for estimate", function() {
    let items = {
		"Furniture": 40000,
		"Hardware": 20000,
		"Software": 20000
    };

    //assert.equal( topSalary(salaries), "Pete" );
  });
 
  
    it("returns Office Lease Maintenance Expenses for estimate", function() {
	let topics1 = {
		"AreaSqMeter": 100,
		"LeaseFeeOneSqMeter": 15,
		"ServiceOneSqMeter": 2,
		"TaxationOneSqMeter": 2,
		"InsurancePerOneMonth": 100,
		"MonthlyDairy": 200,
		"LeasDurationMonths": 40
    };

    //assert.equal( topSalary(salaries), "Pete" );
  });

  
    it("returns Non Recurring Expenses for estimate", function() {
	let topics2 = {
		"SpecialTestEquip": 15000,
		"SpecialHardware": 10000,
		"DesignDev": 50000
    };

    //assert.equal( topSalary(salaries), "Pete" );
  });
  
  
   
    it("returns Travels Expenses for estimate", function() {
	let topics2 = {
		"Immigration & visas": 500,
		"Flights": 2000,
		"AccommodationPerNight":300,
		"EconomicPerDay": 100,
		"TransportationDaily":80
    };

    //assert.equal( topSalary(salaries), "Pete" );
  });



/*
  it("returns null for the empty object", function() {
    assert.isNull( topSalary({}) );
  });*/
});