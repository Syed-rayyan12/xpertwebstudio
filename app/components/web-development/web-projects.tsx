import React from 'react';
import Image from 'next/image';

const WebProjects = () => {
    const projects = [
        {
            id: 1,
            image: '/images/project-1.png',
            company: 'TechVision Inc.',
            heading: 'Modern SaaS platform for enterprise solutions'
        },
        {
            id: 2,
            image: '/images/project-2.png',
            company: 'EcoMarket',
            heading: 'E-commerce platform for sustainable products'
        },
        {
            id: 3,
            image: '/images/project-3.png',
            company: 'HealthHub',
            heading: 'Healthcare management system with patient portal'
        },
        {
            id: 4,
            image: '/images/project-4.png',
            company: 'FinanceFlow',
            heading: 'Financial tracking and investment management app'
        },
        {
            id: 5,
            image: '/images/project-5.png',
            company: 'EduLearn',
            heading: 'Online learning platform with interactive courses'
        },
        {
            id: 6,
            image: '/images/project-6.png',
            company: 'FoodieDelight',
            heading: 'Restaurant ordering and delivery management system'
        },
        {
            id: 7,
            image: '/images/project-7.png',
            company: 'TravelMate',
            heading: 'Travel booking and itinerary planning platform'
        },
        {
            id: 8,
            image: '/images/project-8.png',
            company: 'FitnessPro',
            heading: 'Personal training and workout tracking application'
        }
    ];

    return (
        <section className='px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16'>
            <div className='max-w-[1280px] mx-auto'>
                <div className='mb-8 sm:mb-10 md:mb-12'>
                   
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center'><span className='text-[#FF5900]'>Designing</span> Websites That Support Your Brand Goals</h2>
                    <p className='text-white text-sm sm:text-base mt-3 sm:mt-4 text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8'>
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            className='group overflow-hidden rounded-xl hover:rounded-xl transition-all duration-300 '
                        >
                            <div className='relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden'>
                                <Image
                                    src={project.image}
                                    alt={project.company}
                                    fill
                                    className='object-cover transition-transform duration-500 rounded-xl hover:rounded-xl group-hover:scale-110'
                                />
                            </div>
                            <div className='p-4 sm:p-5 md:p-6'>
                                <span className='text-[#FF5900] text-xs sm:text-sm font-semibold uppercase tracking-wider'>
                                    {project.company}
                                </span>
                                <h3 className='text-white text-base sm:text-lg md:text-xl font-semibold mt-2 leading-tight'>
                                    {project.heading}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebProjects;
