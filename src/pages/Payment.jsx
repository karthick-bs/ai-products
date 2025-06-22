import React, { useState } from 'react';

const Payment = () => {
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [isYearly, setIsYearly] = useState(false);

  const plans = {
    basic: {
      name: "ChatGPT Basic",
      price: { monthly: 9.99, yearly: 99.99 },
      features: [
        "Standard response speed",
        "Access to GPT-3.5",
        "100 messages/day limit",
        "Basic chat history",
        "Email support"
      ]
    },
    standard: {
      name: "ChatGPT Standard",
      price: { monthly: 19.99, yearly: 199.99 },
      features: [
        "Faster response speed",
        "Access to GPT-4",
        "500 messages/day limit",
        "Extended chat history",
        "Priority email support",
        "Code interpreter access"
      ]
    },
    pro: {
      name: "ChatGPT Pro",
      price: { monthly: 29.99, yearly: 299.99 },
      features: [
        "Fastest response speed",
        "Access to GPT-4 Turbo",
        "Unlimited messages",
        "Full chat history",
        "24/7 priority support",
        "Advanced data analysis",
        "Custom instructions",
        "Early access to new features"
      ]
    }
  };

  
  const calculateSavings = (plan) => {
    const monthlyTotal = plans[plan].price.monthly * 12;
    const yearlyPrice = plans[plan].price.yearly;
    return monthlyTotal - yearlyPrice;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upgrade Your ChatGPT Experience</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs and unlock powerful AI capabilities
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full shadow-sm">
            <div className="flex">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full font-medium ${!isYearly ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full font-medium ${isYearly ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Yearly <span className="text-blue-200 ml-1">(Save {calculateSavings('standard')}$)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(plans).map(([key, plan]) => (
            <div 
              key={key}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${selectedPlan === key ? 'ring-4 ring-blue-500 scale-105' : 'bg-white'}`}
              onClick={() => setSelectedPlan(key)}
            >
              <div className={`p-6 ${selectedPlan === key ? 'bg-blue-600 text-white' : 'bg-white text-gray-900'}`}>
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <p className="text-4xl font-bold mb-4">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                  <span className="text-lg font-normal">/{isYearly ? 'year' : 'month'}</span>
                </p>
                {isYearly && (
                  <p className="text-blue-100 mb-4">
                    Save ${calculateSavings(key)} (${(plan.price.monthly * 12 - plan.price.yearly).toFixed(2)})
                  </p>
                )}
                <button
                  className={`w-full py-3 rounded-lg font-bold ${selectedPlan === key ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                  {selectedPlan === key ? 'Selected' : 'Select Plan'}
                </button>
              </div>
              <div className="p-6 bg-gray-50">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Payment form (would appear after plan selection in a real implementation) */}
        {selectedPlan && (
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Payment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Plan Summary</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">{plans[selectedPlan].name}</span>
                    <span className="font-medium">${isYearly ? plans[selectedPlan].price.yearly : plans[selectedPlan].price.monthly}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Billing: {isYearly ? 'Yearly' : 'Monthly'}</span>
                    {isYearly && <span>Save ${calculateSavings(selectedPlan)}</span>}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Information</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input 
                      type="text" 
                      id="card" 
                      placeholder="1234 5678 9012 3456" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                      <input 
                        type="text" 
                        id="expiry" 
                        placeholder="MM/YY" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                      <input 
                        type="text" 
                        id="cvc" 
                        placeholder="123" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Pay ${isYearly ? plans[selectedPlan].price.yearly : plans[selectedPlan].price.monthly}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;