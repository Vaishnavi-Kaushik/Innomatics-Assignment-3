// Ques1 ATM Withdrawal System

function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) return "Incorrect PIN";
    if (amount > balance) return "Insufficient Funds";
    if (amount % 100 !== 0) return "Enter amount in multiples of 100";
    return `Withdrawal successful. Remaining balance: $${balance - amount}`;
}

// Ques2 Online Shopping Discount & Free Shipping

function calculateFinalAmount(orderAmount) {
    let discount = 0;
    if (orderAmount > 1000) discount = 0.2;
    else if (orderAmount >= 500) discount = 0.1;
    
    let finalAmount = orderAmount - (orderAmount * discount);
    let shipping = finalAmount > 50 ? 0 : 10;
    return finalAmount + shipping;
}

// Ques3. Student Grading System with Extra Credit

function calculateGrade(marks, attendance) {
    if (attendance > 90) marks += 5;
    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 60) return "D";
    return "F";
}

// Ques4 Smart Traffic Light System
function trafficLightControl(density) {
    if (density === "Heavy Traffic") return 60;
    if (density === "Moderate Traffic") return 40;
    return 20;
}

// Ques5 Movie Ticket Pricing with Time and Age Discount
function calculateTicketPrice(age, showTime) {
    let price = 12;
    if (showTime < 17) price *= 0.8;
    if (age > 60) price *= 0.7;
    if (age < 12) price *= 0.6;
    return price.toFixed(2);
}

// Ques6 Job Application Filter
function isEligibleForJob(age, experience, qualification) {
    return (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree");
}

// Ques7 E-commerce Coupon Redemption
function applyCoupon(orderAmount, couponCode) {
    let discount = 0, freeShipping = false;
    if (couponCode === "DISCOUNT10" && orderAmount > 500) discount = 0.1;
    if (couponCode === "FREESHIP" && orderAmount > 200) freeShipping = true;
    
    let finalAmount = orderAmount - (orderAmount * discount);
    let shipping = freeShipping ? 0 : (finalAmount > 50 ? 0 : 10);
    return finalAmount + shipping;
}

// Ques8 Fitness Membership Plan
function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (planType === "VIP") return "$80 - Gym + Trainer + Diet Plan";
    if (planType === "Premium" || wantsTrainer) return "$50 - Gym + Trainer";
    return "$20 - Gym Access Only";
}

// Ques9 Electricity Bill Calculation with Peak Hours
function calculateElectricityBill(units, timeOfDay) {
    let rate = units > 300 ? 3 : units > 100 ? 4 : 5;
    if (timeOfDay >= 20 || timeOfDay < 8) rate *= 1.1;
    return (units * rate).toFixed(2);
}

// Ques10 Flight Ticket Booking System
function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let price = 300 + (classType === "Business" ? 200 : classType === "First" ? 500 : 0);
    if (luggageWeight > 20) price += Math.ceil((luggageWeight - 20) / 10) * 50;
    if (isStudent) price *= 0.85;
    else if (isSenior) price *= 0.90;
    return price.toFixed(2);
}
