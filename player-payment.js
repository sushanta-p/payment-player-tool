const formulatePayment = (choice, amount) => {
    const initialPayment = (0.1 * amount).toFixed(2);

    const remainingTotal = amount - initialPayment;
    
    if (choice === 'weekly') {
        const weeklyAmount = Math.ceil(remainingTotal / (3 * 52)); // 3 years = 3 * 52 weeks
        const totalWeeks = Math.ceil(remainingTotal / weeklyAmount);
        const roundedWeeklyAmount = Math.ceil(weeklyAmount / 50) * 50;

        console.log('You will be paid $${roundedWeeklyAmount} for ${totalWeeks} weeks.');
        return { time: totalWeeks, amount: roundedWeeklyAmount };
    } else if (choice === 'monthly') {
        const monthlyAmount = Math.ceil(remainingTotal / (3 * 12)); // 3 years = 3 * 12 months
        const totalMonths = Math.ceil(remainingTotal / monthlyAmount);
        const roundedMonthlyAmount = Math.ceil(monthlyAmount / 100) * 100;

        console.log('You will be paid $${roundedMonthlyAmount} for ${totalMonths} months.');
        return { time: totalMonths, amount: roundedMonthlyAmount };
    } else {
        return null;
    }
};

// Example usage
const resultWeekly = formulatePayment('weekly', 10000);
const resultMonthly = formulatePayment('monthly', 10000);
