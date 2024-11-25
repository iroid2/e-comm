"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";

export default function PricingV1() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const monthlyPrice = 29;
  const annualPrice = 349;

  return (
    <div className="bg-white py-24 sm:py-32">
        
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
        <SectionHeader title="Pricing" heading="Transparent Per Student Pricing" description=""/>
        </div>

        <div className="mx-auto mt-8 flex justify-center space-x-4">
          <Button
            variant={!isAnnual ? "default" : "outline"}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </Button>
          <Button
            variant={isAnnual ? "default" : "outline"}
            onClick={() => setIsAnnual(true)}
          >
            Annually
          </Button>
        </div>

        {isAnnual && (
          <div className="mt-4 text-center text-green-600 font-semibold">
            Save $79 with an annual subscription!
          </div>
        )}

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              {isAnnual ? "Annual" : "Monthly"} Membership
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Enjoy full access to exclusive resources, private community, and more!
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-xl font-semibold leading-6 text-indigo-600">
                Whats Included
              </h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              <li className="flex gap-x-3">
                <span className="text-indigo-600">✓</span> Private forum access
              </li>
              <li className="flex gap-x-3">
                <span className="text-indigo-600">✓</span> Member resources
              </li>
              <li className="flex gap-x-3">
                <span className="text-indigo-600">✓</span> Entry to annual conference
              </li>
              <li className="flex gap-x-3">
                <span className="text-indigo-600">✓</span> Official member t-shirt
              </li>
            </ul>

            <Button
              className="mt-6"
              variant="secondary"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide" : "View"} Additional Benefits
            </Button>

            {showDetails && (
              <div className="mt-4 text-gray-600 text-sm">
                <p>• Priority support</p>
                <p>• Early access to new content</p>
                <p>• Exclusive webinars and Q&A sessions</p>
              </div>
            )}
          </div>

          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  {isAnnual ? "Pay yearly and save" : "Flexible monthly plan"}
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    ${isAnnual ? annualPrice : monthlyPrice}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    USD
                  </span>
                  {!isAnnual && (
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      /month
                    </span>
                  )}
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
