'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';

export default function AboutPage() {
  return (
    <>
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-deepNavy mb-6">About Us</h1>
            <p className="text-lg text-gray-700">
              Puget Capture & Acquisitions is a boutique consulting firm built to help small and 
              mid-sized service-based businesses navigate the complex world of federal contracting 
              with clarity and confidence. We specialize in GSA Schedule acquisition, compliance 
              strategy, and long-term capture planning — with a focus on practical execution and 
              sustainable growth.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-deepNavy mb-8">Who We Are</h2>
            <div className="space-y-12">
              <div className="bg-fogGray bg-opacity-5 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Brianna Pirro</h3>
                <p className="text-evergreen font-medium mb-4">Co-Founder & Small Business Strategist</p>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Brianna brings a decade of hands-on experience supporting small and medium-sized 
                    businesses across industries — from consumer goods to digital marketing. With a 
                    background in entrepreneurship, brand development, and operations, she has a sharp 
                    eye for identifying growth barriers and building the systems needed to scale.
                  </p>
                  <p>
                    At Puget Capture & Acquisitions, Brianna focuses on client success, business 
                    optimization, and ensuring every client receives the tools and support to grow 
                    sustainably in both the private and federal space. She's known for her 
                    resourcefulness, empathy, and ability to transform vision into structured momentum.
                  </p>
                </div>
              </div>

              <div className="bg-fogGray bg-opacity-5 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Josh Houseworth</h3>
                <p className="text-evergreen font-medium mb-4">Co-Founder & Federal Acquisition Expert</p>
                <div className="space-y-4 text-gray-700">
                  <p>
                    With over 15 years of federal contracting experience, Josh is a leading authority 
                    in GSA Schedules, MAS onboarding, and proposal strategy. He has worked both inside 
                    and outside the system, including tenure with the GSA itself — giving him a unique 
                    understanding of what it takes to build winning proposals and navigate complex reviews.
                  </p>
                  <p>
                    Josh leads the technical execution for MAS submissions, renewals, and modifications, 
                    guiding clients through each milestone with clarity, compliance, and a proven framework 
                    for success. His no-fluff, detail-first approach helps clients feel confident at every step.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-deepNavy mb-4">Why "Puget"?</h2>
            <p className="text-gray-700">
              Inspired by the Puget Sound region, our brand reflects clarity, depth, and steady 
              movement — just like the clients we serve. We believe in straight talk, thorough 
              preparation, and building systems that last.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
} 