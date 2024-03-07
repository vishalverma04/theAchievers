

import React from 'react';
import styled from 'styled-components';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            title: 'Mess Menu',
            description: 'Going to mess? Check menu here!',
            imageUrl: '/images/service-menu.jpg',
            link: '/mess-menu',
        },
        {
            id: 2,
            title: 'Your Extras',
            description: "Don't remember how much extra items you purchased this month? Check here!",
            imageUrl: '/images/service-extras.jpg',
            link: '/extras',
        },
        {
            id: 3,
            title: 'Bills',
            description: "Check for any pending bills!",
            imageUrl: '/images/service-bill.jpg',
            link: '/myBills',
        },
        {
            id: 4,
            title: 'Fill Rebate',
            description: "Going home? Don't forget to file the rebate",
            imageUrl: '/images/rebates.jpg',
            link: '/rebate',
        },
        {
            id: 5,
            title: 'Complaints',
            description: "Complain regarding carpentry, cleanliness, or anything related to hostel or the mess",
            imageUrl: '/images/complaints.jpg',
            link: '/complaint',
        },
        {
            id: 6,
            title: 'Feedback',
            description: 'Description for Service 6.',
            imageUrl: '/images/service-feedback.avif',
            link: '/feedback', // Add the appropriate link
        },
    ];

    return (
        <ServiceContainer>
            {/*         
            <h3>Our Services</h3> */}
            {serviceData.map((service, index) => (
                <ServiceCard key={service.id} isFirstRow={index < 3}>
                    <ServiceInfo>
                        <h2>
                            <a href={service.link}>{service.title}</a>
                        </h2>
                        <ServiceImage src={service.imageUrl} alt={service.title} />
                    </ServiceInfo>
                    <p>{service.description}</p>
                </ServiceCard>
            ))}
            {/* </Contain> */}
        </ServiceContainer>
    );
};


// const Contain = styled.div`
// margin-top: 10px;
//   padding: 30 0 0 26px;
// `;
const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  margin: 100px;
  @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

const ServiceCard = styled.div`
//   background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  p {
    padding: 16px;
    font-size: 14px;
    color: white;
    text-align: center;
  }

  ${({ isFirstRow }) => (isFirstRow ? 'grid-row: 1;' : 'grid-row: 2;')}
`;

const ServiceInfo = styled.div`
  text-align: center;

  h2 {
    font-size: 18px;
    margin-bottom: 8px;

   
    a {
              color: white;
              text-decoration: none;
              &:hover {
                text-decoration: underline;
              }
            }
    }

`;

const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export default Services;
