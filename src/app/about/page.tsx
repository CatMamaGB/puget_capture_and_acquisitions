'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { FaLinkedin } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <>
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-deepNavy mb-6 text-center md:text-left">About Us</h1>
            <p className="text-lg text-gray-700 text-center md:text-left">
              Puget Capture & Acquisition is a boutique consulting firm built to help small and 
              mid-sized service-based businesses navigate the complex world of federal contracting 
              with clarity and confidence. We specialize in GSA Schedule acquisition, compliance 
              strategy, and long-term capture planning — with a focus on practical execution and 
              sustainable growth.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-deepNavy mb-8 text-center md:text-left">Who We Are</h2>
            <div className="space-y-12">
              <div className="bg-fogGray bg-opacity-5 p-8 rounded-lg">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <img 
                      src="/images/josh-headshot.jpg"
                      alt="Josh Houseworth"
                      className="w-full rounded-lg border-2 border-fogGray"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold mb-3 text-center md:text-left">Josh Houseworth</h3>
                    <p className="text-evergreen font-medium mb-4 text-center md:text-left">Co-Founder & Federal Acquisition Expert</p>
                    <div className="space-y-4 text-gray-700 text-center md:text-left">
                      <p>
                      With over 15 years of experience in federal contracting, Josh is a recognized authority in Multi-Agency Contracts (MACs), GSA Schedules, Department of Defense acquisition, and proposal strategy. 
                      His background as a U.S. Air Force veteran, combined with roles in the DoD and GSA, gives him a mission-oriented perspective and a rare, insider-level understanding of the federal acquisition process. 
                      This unique blend of military and civilian expertise allows him to bridge the gap between government expectations and industry capabilities, providing clients with deep insight into the nuances of federal procurement.
                      </p>
                      <p>
                      In his current role, Josh leads the technical execution of proposal submissions, 
                      contract renewals, and modifications. He guides clients through each phase with precision, 
                      compliance, and a structured methodology proven to deliver results. Known for his detail-driven 
                      and results-focused approach, Josh equips clients with the clarity and confidence needed to succeed in a highly regulated and competitive environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-fogGray bg-opacity-5 p-8 rounded-lg">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <img 
                      src="/images/brianna-headshot.jpg"
                      alt="Brianna Pirro"
                      className="w-full rounded-lg border-2 border-fogGray"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-semibold mb-3 text-center md:text-left">Brianna Pirro</h3>
                    <p className="text-evergreen font-medium mb-4 text-center md:text-left">Co-Founder & Small Business Strategist</p>
                    <div className="space-y-4 text-gray-700 text-center md:text-left">
                      <p>
                        Brianna brings a decade of hands-on experience supporting small and medium-sized 
                        businesses across industries — from consumer goods to digital marketing. With a 
                        background in entrepreneurship, brand development, and operations, she has a sharp 
                        eye for identifying growth barriers and building the systems needed to scale.
                      </p>
                      <p>
                        At Puget Capture & Acquisition, Brianna focuses on client success, business 
                        optimization, and ensuring every client receives the tools and support to grow 
                        sustainably in both the private and federal space. She's known for her 
                        resourcefulness, empathy, and ability to transform vision into structured momentum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-deepNavy mb-4 text-center md:text-left">Why "Puget"?</h2>
            <p className="text-gray-700 text-center md:text-left">
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